
<template>
  <div class="container my-4">
    <Header :projectName="projectName"></Header>
    <div class="card issue-view" v-if="issue">
      <div class="card-header">
        <h3 class="card-title issue-title">{{ issue.name }}</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <p class="card-text issue-no">
              <strong>Issue No:</strong> {{ issue.no }}
            </p>
            <p class="card-text issue-status">
              <strong>Status:</strong> <span :class="getStatusClass(issue.status)">{{ issue.status }}</span>
            </p>
          </div>
          <div class="col-md-6">
            <p class="card-text issue-manager" v-if="issue.manager">
              <strong>Manager:</strong> {{ issue.manager.name }} ({{ issue.manager.nickname }})
            </p>
            <p class="card-text issue-writer" v-if="issue.writer">
              <strong>Writer:</strong> {{ issue.writer.name }} ({{ issue.writer.nickname }})
            </p>
          </div>
        </div>
        <hr class="issue-divider" />
        <p class="card-text issue-content">
          {{ issue.content }}
        </p>
      </div>
      <div class="card-footer text-end">
        <button class="btn btn-secondary me-2" @click="backToIssueBoard">Back</button>
        <button class="btn btn-primary" @click="navigateToIssueForm">Edit</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './ProjectTemplateHeader.vue';
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const issue = ref({});
const projectName = ref('');

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:9500/issue/${route.params.projectId}`);
    projectName.value = response.data.name;
    issue.value = response.data.issueList.find((issue) => issue.no == route.params.issueNo);
  } catch (error) {
    console.error('Failed to fetch issue:', error);
  }
});

const getStatusClass = (status) => {
  switch (status) {
    case '진행예정':
      return 'text-primary';
    case '진행중':
      return 'text-warning';
    case '진행완료':
      return 'text-success';
    default:
      return '';
  }
};

const backToIssueBoard = () => {
  router.push({ name: "IssueBoard", params: { projectId: route.params.projectId } });
};

const navigateToIssueForm = () => {
  router.push({ name: "IssueEdit", params: { projectId: route.params.projectId, issueNo: issue.value.no } });
};
</script>

<style scoped>
.issue-view {
  max-width: 800px;
  margin: 0 auto;
}

.issue-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0;
}

.issue-status {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.issue-content {
  white-space: pre-wrap;
}

.issue-divider {
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid #dee2e6;
}

@media (max-width: 767px) {
  .issue-view {
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>
<template>
  <div class="container">
    <Header :projectName="projectName"></Header>
    <div class="row">
      <div class="col-md-4">
        <h3 class="text-center text-uppercase">TO DO</h3>
        <div class="card">
          <div class="card-body">
            <div v-for="issue in todoIssues" :key="issue.id">
              <div class="issue-card" @click="navigateToIssueView(issue)">
                <div>{{ issue.name }}</div>
                <div class="btn-group btn-group-sm">
                  <button class="btn btn-dark" @click.stop="navigateToIssueForm(issue)">Edit</button>
                  <button class="btn btn-dark" @click.stop="deleteIssue(issue)">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h3 class="text-center text-uppercase">IN PROGRESS</h3>
        <div class="card">
          <div class="card-body">
            <div v-for="issue in inProgressIssues" :key="issue.id">
              <div class="issue-card" @click="navigateToIssueView(issue)">
                <div>{{ issue.name }}</div>
                <div class="btn-group btn-group-sm">
                  <button class="btn btn-dark" @click.stop="navigateToIssueForm(issue)">Edit</button>
                  <button class="btn btn-dark" @click.stop="deleteIssue(issue)">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h3 class="text-center text-uppercase">DONE</h3>
        <div class="card">
          <div class="card-body">
            <div v-for="issue in doneIssues" :key="issue.id">
              <div class="issue-card" @click="navigateToIssueView(issue)">
                <div>{{ issue.name }}</div>
                <div class="btn-group btn-group-sm">
                  <button class="btn btn-dark" @click.stop="navigateToIssueForm(issue)">Edit</button>
                  <button class="btn btn-dark" @click.stop="deleteIssue(issue)">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 d-flex justify-content-between">
      <button class="btn btn-dark" @click="backToProject">Back to Project</button>
      <button class="btn btn-dark" @click="navigateToIssueForm()">Add Issue</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Header from "./Header.vue";

const currentRoute = useRoute();
const router = useRouter();
const issues = ref([]);
const todoIssues = ref([]);
const inProgressIssues = ref([]);
const doneIssues = ref([]);

const projectName = ref(''); // 프로젝트 이름을 저장할 ref 변수

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:9500/issue/${currentRoute.params.projectId}`);
    projectName.value = response.data.name;
    issues.value = response.data.issueList;
    filterIssues();
  } catch (error) {
    console.error('Failed to fetch issues:', error);
  }
});

const filterIssues = () => {
  todoIssues.value = issues.value.filter(issue => issue.status === '진행예정');
  inProgressIssues.value = issues.value.filter(issue => issue.status === '진행중');
  doneIssues.value = issues.value.filter(issue => issue.status === '진행완료');
};

const navigateToIssueForm = (issue = null) => {
  if (issue) {
    router.push({ name: 'IssueEdit', params: { projectId: currentRoute.params.projectId, issueNo: issue.no } });
  } else {
    router.push({ name: 'IssueNew', params: { projectId: currentRoute.params.projectId } });
  }
};

const navigateToIssueView = (issue) => {
  router.push({ 
    name: 'IssueView', 
    params: { projectId: currentRoute.params.projectId, issueNo: issue.no },
    query: { issue: JSON.stringify(issue) }
  });
};

const deleteIssue = async (issueToDelete) => {
  try {
    await axios.delete(`http://localhost:9500/issue/remove/${currentRoute.params.projectId}`, {
      data: {
        no: issueToDelete.no
      }
    });
    issues.value = issues.value.filter(issue => issue.no !== issueToDelete.no);
    filterIssues();
  } catch (error) {
    console.error('Failed to delete issue:', error);
  }
};

function backToProject() {
  router.push(`/project/${currentRoute.params.projectId}`);
}
</script>

<style scoped>
.issue-card {
  padding: 10px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.issue-card > div {
  display: flex;
  align-items: center;
}

.issue-card .btn-group {
  margin-left: 10px;
}

@media (max-width: 767px) {
  .issue-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .issue-card > div {
    margin-bottom: 5px;
  }

  .issue-card .btn-group {
    margin-left: 0;
  }
}
</style>
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
                <div>{{ issue.title }}</div>
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
                <div>{{ issue.title }}</div>
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
                <div>{{ issue.title }}</div>
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
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import ProjectIssueForm from './ProjectIssueForm.vue';
import Header from "./ProjectTemplateHeader.vue";

const router = useRouter();
const store = useStore();
const issues = computed(() => store.state.issues);
const todoIssues = computed(() => issues.value.filter(issue => issue.status === 'todo'));
const inProgressIssues = computed(() => issues.value.filter(issue => issue.status === 'inprogress'));
const doneIssues = computed(() => issues.value.filter(issue => issue.status === 'done'));

const navigateToIssueForm = (issue = null) => {
  if (issue) {
    router.push({ name: 'IssueEdit', params: { id: issue.id } });
  } else {
    router.push({ name: 'IssueNew' });
  }
};

const deleteIssue = (issueToDelete) => {
  store.dispatch('deleteIssue', issueToDelete);
};

const backToProject = () => {
  // 여기에 Back to Project 버튼 클릭 시 동작할 내용 추가
  console.log('Back to Project clicked');
};
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
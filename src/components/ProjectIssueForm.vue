
<template>
  <div class="container my-4">
    <Header :projectName="projectName"></Header>
    <h3 class="text-center text-uppercase mb-4">{{ isEditMode ? 'Edit Issue' : 'Add Issue' }}</h3>
    <form @submit.prevent="saveIssue" class="mx-auto" style="max-width: 500px;">
      <div class="form-group">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="issue.name" placeholder="Enter issue title">
      </div>
      <div class="form-group">
        <label for="status" class="form-label">Status</label>
        <select class="form-select" id="status" v-model="issue.status">
          <option value="진행예정">TO DO</option>
          <option value="진행중">IN PROGRESS</option>
          <option value="진행완료">DONE</option>
        </select>
      </div>
      <div class="form-group">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" v-model="issue.content" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="manager" class="form-label">Manager</label>
        <select class="form-select" id="manager" v-model="issue.managerId">
          <option v-for="member in projectMembers" :key="member.id" :value="member.id">{{ member.name }} ({{ member.nickname }})</option>
        </select>
      </div>
      <div class="form-group">
        <label for="writer" class="form-label">Writer</label>
        <select class="form-select" id="writer" v-model="issue.writerId">
          <option v-for="member in projectMembers" :key="member.id" :value="member.id">{{ member.name }} ({{ member.nickname }})</option>
        </select>
      </div>
      <div class="d-flex justify-content-between mt-4">
        <button type="button" class="btn btn-dark" @click="cancel">Cancel</button>
        <button type="submit" class="btn btn-dark">{{ isEditMode ? 'Update' : 'Save' }}</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Header from "./Header.vue";

const route = useRoute();
const router = useRouter();
const isEditMode = computed(() => route.name === 'IssueEdit');
const issue = ref({
  no: null,
  name: '',
  status: '진행예정',
  content: '',
  managerId: null,
  writerId: null
});
const projectMembers = ref([]);
const projectName = ref('');

onMounted(async () => {
  try {
    const projectResponse = await axios.get(`http://localhost:9500/project/${route.params.projectId}`);
    projectName.value = projectResponse.data.name;
    projectMembers.value = projectResponse.data.members;
  } catch (error) {
    console.error('Failed to fetch project members:', error);
  }

  if (isEditMode.value) {
    try {
      const response = await axios.get(`http://localhost:9500/issue/${route.params.projectId}`);
      const selectedIssue = response.data.issueList.find(issue => issue.no === parseInt(route.params.issueNo));
      if (selectedIssue) {
        issue.value = {
          no: selectedIssue.no,
          name: selectedIssue.name,
          status: selectedIssue.status,
          content: selectedIssue.content,
          managerId: selectedIssue.manager.id,
          writerId: selectedIssue.writer.id
        };
      }
    } catch (error) {
      console.error('Failed to fetch issue:', error);
    }
  }
});
const saveIssue = async () => {
  try {
    const requestData = {
      no: issue.value.no,
      name: issue.value.name,
      status: issue.value.status,
      content: issue.value.content,
      managerId: issue.value.managerId,
      writerId: issue.value.writerId
    };

    if (isEditMode.value) {
      await axios.put(`http://localhost:9500/issue/modify/${route.params.projectId}`, requestData);
    } else {
      await axios.post(`http://localhost:9500/issue/add/${route.params.projectId}`, requestData);
    }

    navigateToIssueBoard();
  } catch (error) {
    console.error('Failed to save issue:', error);
  }
};

const cancel = () => {
  navigateToIssueBoard();
};

const navigateToIssueBoard = () => {
  router.push({ name: 'IssueBoard', params: { projectId: route.params.projectId } });
};
</script>

<style scoped>
h3 {
  font-weight: bold;
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-label {
  font-weight: bold;
}
</style>
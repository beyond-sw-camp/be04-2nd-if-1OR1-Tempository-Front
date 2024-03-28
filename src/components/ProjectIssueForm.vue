<template>
  <div class="container my-4">
    <Header :projectName="projectName"></Header>
    <h3 class="text-center text-uppercase mb-4">{{ isEditMode ? 'Edit Issue' : 'Add Issue' }}</h3>
    <form @submit.prevent="saveIssue" class="mx-auto" style="max-width: 500px;">
      <div class="form-group">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="issue.title" placeholder="Enter issue title">
      </div>
      <div class="form-group">
        <label for="status" class="form-label">Status</label>
        <select class="form-select" id="status" v-model="issue.status">
          <option value="todo">TO DO</option>
          <option value="inprogress">IN PROGRESS</option>
          <option value="done">DONE</option>
        </select>
      </div>
      <div class="form-group">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" v-model="issue.description" rows="3"></textarea>
      </div>
      <div class="d-flex justify-content-between mt-4">
        <button type="button" class="btn btn-dark" @click="cancel">Cancel</button>
        <button type="submit" class="btn btn-dark">{{ isEditMode ? 'Update' : 'Save' }}</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Header from "./ProjectTemplateHeader.vue";


const route = useRoute();
const router = useRouter();
const store = useStore();

const isEditMode = computed(() => route.name === 'IssueEdit');
const issue = ref({ id: null, title: '', status: 'todo', description: '' });

if (isEditMode.value) {
  const issueId = parseInt(route.params.id);
  const selectedIssue = store.state.issues.find(issue => issue.id === issueId);
  if (selectedIssue) {
    issue.value = { ...selectedIssue };
  }
}

const saveIssue = () => {
  if (isEditMode.value) {
    store.dispatch('updateIssue', issue.value);
  } else {
    store.dispatch('addIssue', issue.value);
  }
  navigateToIssueBoard();
};

const cancel = () => {
  navigateToIssueBoard();
};

const navigateToIssueBoard = () => {
  router.push({ name: 'IssueBoard' });
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
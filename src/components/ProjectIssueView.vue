<template>
    <div class="container my-4">
      <Header :projectName="projectName"></Header>
      <div class="card issue-view">
        <div class="card-body">
          <h3 class="card-title issue-title">{{ issue.title }}</h3>
          <hr class="issue-divider" />
          <p class="card-text issue-status">
            <strong>Status:</strong> {{ issue.status }}
          </p>
          <hr class="issue-divider" />
          <p class="card-text issue-description">
            <strong>Description:</strong> {{ issue.description }}
          </p>
        </div>
      </div>
      <div class="mt-3 d-flex justify-content-between">
        <button class="btn btn-dark" @click="backToIssueBoard">Back</button>
        <button class="btn btn-dark" @click="navigateToIssueForm">Edit</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import Header from './ProjectTemplateHeader.vue'
  import { computed } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { useStore } from "vuex";
  
  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  
  const issueId = parseInt(route.params.id);
  const issue = computed(() =>
    store.state.issues.find((issue) => issue.id === issueId)
  );
  
  const backToIssueBoard = () => {
    router.push({ name: "IssueBoard" });
  };
  
  const navigateToIssueForm = () => {
    router.push({ name: "IssueEdit", params: { id: issue.value.id } });
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
    margin-bottom: 1rem;
  }
  
  .issue-status {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .issue-description {
    font-size: 1rem;
    line-height: 1.5;
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
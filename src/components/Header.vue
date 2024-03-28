<!-- Header.vue -->
<template>
    <div class="container">
      <div class="project">{{ projectName }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  
  const currentRoute = useRoute();
  const projectName = ref('');
  
  onMounted(async () => {
    try {
      const response = await axios.get(`http://localhost:9500/project/${currentRoute.params.projectId}`);
      projectName.value = response.data.name;
    } catch (error) {
      console.error('Failed to fetch project name:', error);
    }
  });
  </script>

<style scoped>
.container {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin-top: 30px;
    margin-bottom: 30px;
}

.project {
    width: 30%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    border: 1px solid black;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
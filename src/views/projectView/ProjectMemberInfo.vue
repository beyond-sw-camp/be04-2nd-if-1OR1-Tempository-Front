<template>
  <div class="container">
    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="project">
        <h3>{{ project.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();
const projectId = currentRoute.params.id;
const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:9500/project/${projectId}`);
    projects.value = response.data.members;
  } catch (error) {
    console.error('데이터를 받아오는 중 에러 발생:', error);
  }
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.project {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  width: calc(50% - 10px); /* 2개의 열로 표시하기 위해 50%의 너비 설정 */
}

.project h3 {
  font-size: 18px;
  color: #333;
  margin: 0;
}
</style>

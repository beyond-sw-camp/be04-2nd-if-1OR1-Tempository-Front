<template>
  <div>
    <h4>받아온 값: {{  }}</h4>
    <div class="projects" v-for="project in projects" :key="project.id">
      <p>{{ project.id }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const projects = ref([]);

onMounted(async () => {
  // 데이터를 받아올 API 엔드포인트 URL

  try {
    // Axios를 사용하여 GET 요청 보내기
  const response = await axios.get(`http://localhost:9500/project/myproject`)

    // 요청이 성공했을 때 받은 데이터를 Vue 컴포넌트 데이터에 저장
    projects.value = response.data.projects;
  } catch (error) {
    console.error('데이터를 받아오는 중 에러 발생:', error);
  }
});
</script>

<style>
</style>
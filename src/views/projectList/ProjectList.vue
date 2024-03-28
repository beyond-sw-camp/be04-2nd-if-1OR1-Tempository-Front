<template>
    <Header/>

    <div class="container">
      <div class="projects" v-for="project in projects" :key="project.id">
        <div class="project">
          <h2>{{ project.name }}</h2>
            <p>{{ project.content }}</p>
        <button class="goProject" @click="goToProject(project.id)">Setting</button>
      </div>

    </div>
  </div>
</template>

<script setup>
  import Header from './Header.vue';
  import { useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const router = useRouter();

  function goToProject(projectId) {
    router.push(`/project/${projectId}`)
  }

const projects = ref([]);

onMounted(async () => {

  try {
    const response = await axios.get(`http://localhost:9500/project/myproject`)
    // 요청이 성공했을 때 받은 데이터를 Vue 컴포넌트 데이터에 저장
    projects.value = response.data.projects;
  } catch (error) {
    console.error('데이터를 받아오는 중 에러 발생:', error);
  }
});


</script>

<style scoped>
/* Reset CSS */
* {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* Body Styles */
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }

    /* Header Styles */
    header {
      background-color: #333;
      color: #fff;
      padding: 1rem;
      text-align: center;
    }

    header button {
      background-color: transparent;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 1rem;
      margin-right: 1rem;
    }

    /* Main Content Styles */
    .container {
      display: column;
      margin: 2rem auto;
      padding: 1rem;
      background-color: lightgray;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .project {
      border-bottom: 1px solid #ddd;
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .project:last-child {
      border-bottom: none;
    }

    .project h2 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .project p {
      margin-bottom: 0.5rem;
      color: #666;
    }

    .project button {
      background-color: #333;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
</style>

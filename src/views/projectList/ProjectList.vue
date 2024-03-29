<template>
  <Header />
  <div class="container">
    <div class="project" v-for="project in projects" :key="project.id">
      <div class="project-info">
        <RouterLink :to="{ path: `/project/${project.id}`, query: { projectName: project.name } }" active-class="active">
          <h2>{{ project.name }}</h2>
          <p>{{ project.content }}</p>
        </RouterLink>
      </div>
      <button class="goProject" @click="goToProject(project.id, project.name)">Setting</button>
    </div>
  </div>
</template>

<script setup>
  import Header from './Header.vue';
  import { useRouter,RouterLink } from 'vue-router';
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const router = useRouter();

  function goToProject(projectId,projectName) {
    router.push({ path: `/manageProject/${projectId}`, query: { projectName }});
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
// 에러 처리 함수
function handleErrorMessage(error) {
  if (error.response && error.response.status === 400) {
    const errorMessage = error.response.data.message;
    // 에러 메시지를 알림창으로 표시
    alert(errorMessage);
    // 로그인 페이지로 리다이렉트
    router.push('/signin'); // 로그인 페이지 경로로 변경해주세요
  }
}

async function fetchData() {
  try {
    const res = await axios.get('http://localhost:9500/user/who-am-i');
    user.value.name = res.data.name;
    user.value.nickname = res.data.nickname;
    user.value.email = res.data.email;
  } catch (error) {
    handleErrorMessage(error);
  }
}

onMounted(() => {
  // 페이지가 마운트되면 데이터를 가져옵니다.
  fetchData();
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
  margin: 2rem auto;
  padding: 1rem;
}

.project {
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.project-info {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dee2e6;
  padding-right: 1rem;
  margin-right: 1rem;
}

.project-info a {
  text-decoration: none;
  color: inherit;
}

.project h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem; /* 새로운 padding-bottom 추가 */
  border-bottom: 1px solid #e0e0e0; /* 새로운 border-bottom 추가 */
}

.project p {
  color: #333;
}

.project button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
}
</style>
<template>
    <Header/>

    <div class="container">
      <div class="projects" v-for="project in projects" :key="project.id">
        <div class="project">
          <RouterLink :to="{ path: `/project/${project.id}`, query: { projectName: project.name } }" active-class="active"><h2>{{ project.name }}</h2></RouterLink>
            </div>
            <div class="project">
              <RouterLink :to="{ path: `/project/${project.id}`, query: { projectName: project.name } }" active-class="active"><p>{{ project.content }}</p></RouterLink>
              <button class="goProject" @click="goToProject(project.id,project.name)">Setting</button>
            </div>
            <div class="underline"></div>
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
      display: column;
      margin: 2rem auto;
      padding: 1rem;
      background-color: lightgray;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    }

    .project {
      border-bottom: 1px solid black;
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
      color: black;
    }

    .project p {
      margin-bottom: 0.5rem;
      color: black;

      
    }

    .project button {
      background-color: #333;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }



</style>

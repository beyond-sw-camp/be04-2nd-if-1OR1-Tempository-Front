<template>
<Header><h4>{{ projectName }}</h4></Header>
<div class="project-container">
    <main>
        <div class="project-button">
          <h4><RouterLink :to="{ path: `/projectInfo/${projectId}`, query: { projectName: projectName.value } }" active-class="active">Project Info</RouterLink></h4>
          </div>
          <div class="project-button">
          <h4><RouterLink :to="{ path: `/projectMemberInfo/${projectId}`, query: { projectName: projectName.value } }" active-class="active">Project Member</RouterLink></h4>
        </div>
    </main>
    <main2>
      <div class="project">
        <RouterView/>
      </div>
    </main2>

    <footer>
      <button class="back-btn" @click="backToProjectList">Back to Project List</button>
  </footer>
</div>
  
  </template>
   
   <script setup>
  import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router';
  import Header from '../project/Header.vue';
  import axios from 'axios';
  import {onMounted } from 'vue';


  
  const router = useRouter();
  
  const currentRoute = useRoute();



  const projectId = currentRoute.params.id;
  const projectName = currentRoute.query.projectName;
  
  function backToProjectList() {
        router.push('/projectList');
       }
       

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
   .project-container {
    font-family: Arial, sans-serif;
    display: flex;
   }

   .project-button {
    border: 1px solid black;
    display: flex;
    background-color: gray;
   }
   main {
    flex-direction: column;
    margin : 5px;
   }
   h1, h2 {
    margin-top: 0;
   }
   
   .back-btn {
    display: block;
    margin: 20px auto 0;
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
   }
   
   .back-btn:hover {
    background-color: black;
   }

   .project {
    width: 1226px;
    height: 400px;
    border: 1px solid black;
    margin : 5px;
   }

   footer {
  position: absolute; 
  bottom: 30px; 
  right: 0; 
   }
   a {
    text-decoration: none;
    color: black;
   }
   

   </style>
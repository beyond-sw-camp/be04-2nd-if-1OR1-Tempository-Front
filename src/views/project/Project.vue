<template>
  <Header v-if="!loading"><h4>{{ projectName }}</h4></Header>
  <div class="project-container" v-if="!loading">
        <main>
          <div class="project-button">
              <h4><RouterLink :to="{ path: `/requirement/${projectId}`, query: { projectName } }" active-class="active">Requirement</RouterLink></h4>
              </div>
              <div class="project-button">
              <h4><RouterLink :to="{ path: `/wbs/${projectId}`, query: { projectName } }" active-class="active">WBS</RouterLink></h4>
            </div>
            <div class="project-button">
              <h4><RouterLink :to="{ path: `/table/${projectId}`, query: { projectName} }" active-class="active">Definition Of Table</RouterLink></h4>
            </div>
            <div class="project-button">
              <h4><RouterLink :to="{ path: `/testcase/${projectId}`, query: { projectName } }" active-class="active">Test Case</RouterLink></h4>
            </div>
            <div class="project-button">
              <h4><RouterLink :to="{ path: `/issue/${projectId}`, query: { projectName } }" active-class="active">Issue</RouterLink></h4>
            </div>
        </main>
        <main2>
          <div class="project">
            <h2>Description of Project</h2>
            <h3>{{ projectContent }}</h3>
            </div>
        </main2>
    
        <footer>
          <button class="back-btn" @click="manageProject">Manage Project</button>
          <button class="back-btn" @click="backToProjectList">Back to Project List</button>
        </footer>
    </div>
      
      </template>
       
       <script setup>
      import {RouterLink, useRoute,useRouter } from 'vue-router';
      import Header from './Header.vue';
      import axios from 'axios';
      import { ref, onMounted } from 'vue';
      

      

       const router = useRouter();
       const currentRoute = useRoute();

       const projectId = currentRoute.params.id;

        function manageProject() {
        router.push({ path: `/manageProject/${projectId}`, query: { projectName: projectName.value }});
       }

       function backToProjectList() {
        router.push('/projectList');
       }


       const projects = ref([]);
       const projectName = ref('');
       const projectContent = ref('');
       

        onMounted(async () => {
        
          try {
            const response = await axios.get(`http://localhost:9500/project/${projectId}`)
            // 요청이 성공했을 때 받은 데이터를 Vue 컴포넌트 데이터에 저장
            projects.value = response.data
            projectName.value = response.data.name
            projectContent.value = response.data.content;

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
       .project-container {
        font-family: Arial, sans-serif;
        display: flex;
        
       }
    
       .project-button {
        border: 1px solid black;
        display: flex;
        background-color: gray;
        justify-content: center;
        
       }
       main {
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
        width: 1200px;
        height: 400px;
        border: 1px solid black;
        margin : 5px;
        margin-right: 10px;
        
       }
    
       footer {
      position: absolute; 
      display: flex;
      bottom: 30px; 
      right: 0; 
       }
       a {
        text-decoration: none;
        color: black;
       }
       main.button {
        color : black;
       }
    
       </style>
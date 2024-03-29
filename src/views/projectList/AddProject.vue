<template>
    <Header>Add New Project</Header>
    
    <div class="container">
      <form @submit.prevent="addProject">
        <label for="projectName">Project Name:</label>
        <input type="text" id="projectName" v-model="projectName">
        <br>
        <label for="projectContent">Project Content:</label>
        <textarea id="projectContent" v-model="projectContent"></textarea>
        <br>
      </form>     
    </div>
            <div class="button">
            <button class="back-btn" @click="addProject">Save</button>
            <button class="back-btn" @click="backToProjectList">Back to Project List</button>
        </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Header from '../project/Header.vue';
  
  const router = useRouter();
  
  const projectName = ref('');
  const projectContent = ref('');
  
  async function addProject() {
    try {
      const response = await axios.post('http://localhost:9500/project/add', {
        name: projectName.value,
        content: projectContent.value,
      });
      console.log('새로운 프로젝트가 성공적으로 추가되었습니다.', response.data);
      router.push('/projectlist'); // 프로젝트 추가 후 프로젝트 리스트 페이지로 이동
    } catch (error) {
      console.error('프로젝트 추가 중 오류가 발생했습니다.', error);
    }
  }

  function backToProjectList() {
        router.push('/projectList');
       }
  </script>
  
  <style scoped>
  .Header {
    background-color: white;
  }
  .container {
    margin: 2rem auto;
    padding: 1rem;
    background-color: lightgray;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: black;
  }
  
  .container h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .container form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .container form label {
    margin-bottom: 0.5rem;
  }
  
  .container form input,
  .container form textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .container form button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  .container form button:hover {
    background-color: #555;
  }
  .container form textarea {
  height: 300px; /* 텍스트 박스의 높이를 조절합니다. */
  }
  .button {
    
    display: flex;
    justify-content: space-around;
    
  }
  .back-btn {
    background-color: black;
    color: white;
  }
  </style>
  
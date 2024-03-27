<template>
<Header></Header>
<div class="project-container">
    <main>
        <div class="project-button">
          <h2><RouterLink to="/projectInfo" active-class="active">Project Info</RouterLink></h2>
          <p>{{ projectInfo }}</p>
          </div>
          <div class="project-button">
          <h2><RouterLink to="/projectMemberInfo" active-class="active">Project Member</RouterLink></h2>
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
   import {ref} from 'vue'
  import {RouterLink, RouterView} from 'vue-router';
  import Header from './Header.vue';

  // const backToProjectList =


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
    width: 1400px;
    height: 600px;
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
<template>
    <Header></Header>
    <div class="project-container">
        <main>
            <div class="project-button">
              <h4><RouterLink to="/projectInfo" active-class="active">Requirement</RouterLink></h4>
              </div>
              <div class="project-button">
              <h4><RouterLink to="/projectMemberInfo" active-class="active">WBS</RouterLink></h4>
            </div>
            <div class="project-button">
              <h4><RouterLink to="/projectMemberInfo" active-class="active">Definition Of Table</RouterLink></h4>
            </div>
            <div class="project-button">
              <h4><RouterLink to="/projectMemberInfo" active-class="active">Test Case</RouterLink></h4>
            </div>
            <div class="project-button">
              <h4><RouterLink to="/projectMemberInfo" active-class="active">Issue</RouterLink></h4>
            </div>
        </main>
        <main2>
          <div class="project">

          </div>
        </main2>
    
        <footer>
          <button class="back-btn" @click="manageProject">Manage Project</button>
          <button class="back-btn" @click="backToProjectList">Back to Project List</button>
        </footer>
    </div>
      
      </template>
       
       <script setup>
       import {ref} from 'vue'
      import {RouterLink, RouterView} from 'vue-router';
      import Header from './Header.vue';
    
    
    
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
       
    
       </style>
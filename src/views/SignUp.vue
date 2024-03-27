<template>
  <main>
    <div class="signup">
      <h2>Sign Up Page</h2>
      <h2>currentRoute: {{ currentRoute }}</h2>
      <!-- Sign Up 폼 및 로직 -->
    </div>
  </main>
  </template>
  
  <script setup>
    import {useRoute} from "vue-router";
    const currentRoute = useRoute();
  </script>
  
  <style scoped>
  main{
    background-color: gray;
  }
  .signup {
    color: white
  }
  </style>
  
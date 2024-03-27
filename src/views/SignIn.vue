<template>
  <main>
    <div class="signin">
      <h2>Sign In Page</h2>
      <h2>currentRoute: {{ currentRoute }}</h2>
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
  .signin {
    color: white
  }
  </style>
  
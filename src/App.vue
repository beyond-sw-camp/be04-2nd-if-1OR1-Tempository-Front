<template>
  <div>
    <Header/>
    <Main>기능 또는 사진</Main>

  </div>
</template>

<script setup>
  import {RouterLink, RouterView} from 'vue-router';
  import Header from './views/main/Header.vue';
  import Main from './views/main/Main.vue';
</script>

<style scoped>

</style>
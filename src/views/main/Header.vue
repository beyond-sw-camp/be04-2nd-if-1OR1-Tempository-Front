<template>
  <header>
    <nav>
      <RouterLink to="/signup" active-class="active">Sign Up</RouterLink>
      <br>
      <RouterLink to="/signin" active-class="active">Sign In</RouterLink>
      
    </nav>
  </header>
</template>

<script setup>
  import {RouterLink} from 'vue-router';  
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  font-size: 30px;
}
.active {
  color: red;
}
header {
  text-align: center;
}
</style>
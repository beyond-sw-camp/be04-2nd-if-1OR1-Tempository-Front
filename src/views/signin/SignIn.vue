<template>

  <body>
    <div class="logo">
      <img src="@/assets/images/logo_mini.jpg">
    </div>

    <div class="signin">
      E-mail <br>
      <input type="email"><br><br><br>

      Password <br>
      <input type="password"><br><br><br>
      <button class="signin" @click="goToProjectList()">Sign In</button>
      <button class="home" @click="goToHome()">Home</button>
    </div>

    <br><br><br><br><br><br><br>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

  </body>

</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goToProjectList() {
  router.push('/projectList');
}

function goToHome() {
  router.push('/');
}
</script>

<style scoped>
body {
  background-color: rgb(82, 82, 82);
  padding-top: 200px;
  padding-left: 300px;
}

div.logo {
  float: left;
  margin-right: 100px;
}

div.signin {
  padding-top: 30px;
  font-size: 30px;
  align-items: center;
  align-self: auto;
  text-align: left;
  color: black;
  float: left;
}

div.home {
  float: left;
  margin-right: 100px;
}

button.signin {
  text-align: center;
  font-size: 20px;
  width: 80px;
  height: 4%;
  background-color: black;
  color: white;
  border: none;
  margin-right: 220px;
}
.home{
  text-align: center;
  font-size: 20px;
  width: 80px;
  height: 4%;
  background-color: black;
  color: white;
  border: none;
}
</style>
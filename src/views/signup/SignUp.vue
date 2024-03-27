<template>

  <body>
    <div class="logo">
      <img src="@/assets/images/logo_mini.jpg">
    </div>

    <div class="signup">
      Name <br>
      <input type="text" name="" id=""><br><br>

      NickName <br>
      <input type="text" name="" id=""><br><br>

      E-mail <br>
      <input type="email" name="" id=""><br><br>

      Password <br>
      <input type="password" name="" id=""><br><br><br>
      <button class="signup" @click="successSignUp()">Sign Up</button>
      <button class="home" @click="goToHome()">Home</button>
    </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

  </body>

</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function successSignUp() {
  router.push('/');
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

div.signup {
  font-size: 30px;
  align-items: center;
  align-self: auto;
  text-align: left;
  color: black;
  float: left;
}

button.signup {
  text-align: center;
  font-size: 20px;
  width: 100px;
  height: 4%;
  background-color: black;
  color: white;
  border: none;
  margin-right: 200px;
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
<template>
    <nav class="button">
      <br>
      <button class="signup" @click="goToSignUp()">Sign Up</button>
      <button class="signin" @click="goToSignIn()">Sign In</button>
      <br>
    </nav>
</template>

<script setup>
  import {useRouter} from "vue-router";
  const router = useRouter();

  function goToSignIn() {
    router.push('/signin')
  }

  function goToSignUp() {
    router.push('/signup')
  }

</script>

<style scoped>
nav {
  background-color: black;
  text-align: right;
  font-size: 15px;
  padding-bottom: 25px;
  padding-right: 30px;
}
button.signup {
  background-color: gray;
  color: azure;
  border: 4px solid black;
  padding: 15px 30px;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  shape-margin: 5%;
  
}
button.signin {
  background-color: gray;
  color: azure;
  border: 4px solid black;
  padding: 15px 30px;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  shape-margin: 5%;
}
</style>
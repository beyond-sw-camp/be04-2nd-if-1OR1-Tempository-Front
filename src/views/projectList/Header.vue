<template>
    <nav class="button">
      <br>
        <button class="mypage" @click="goToMyPage()">My Page</button>
        <button class="logout" @click="logout()">Log Out</button>
      <br>
    </nav>
</template>

<script setup>
  import {useRouter} from "vue-router";
  const router = useRouter();

  function goToMyPage() {
    router.push('/mypage')
  }

  function logout() {
    router.push('/logout')
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
button.mypage {
  background-color: gray;
  color: azure;
  border: 4px solid black;
  padding: 15px 30px;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  shape-margin: 5%;
  
}
button.logout {
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
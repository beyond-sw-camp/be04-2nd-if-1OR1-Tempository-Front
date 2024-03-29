<template>
  <br>
  <div class="container">
    <div></div>
    <div class="project">
      <h1>ProjectList</h1>
    </div>
    <div class="buttons">
      <button class="who-am-i" @click="goToMyPage()">My Page</button>
      <button class="logout" @click="logout()">Log Out</button>
      <button class="add-project" @click="goToAddProject()">Add Project</button>
    </div>
  </div>
  <br>

</template>

<script setup>
import axios from 'axios'
import { useRouter } from "vue-router";
const router = useRouter();

function goToMyPage() {
  router.push('/who-am-i')
}

async function logout() {

  await axios.get(
    `http://localhost:9500/user/logout`
  )

  router.push('/')
}


function goToAddProject() {
  router.push('/add-project'); 
}

</script>

<style scoped>
button.who-am-i {
  background-color: gray;
  color: azure;
  border: 1px solid black;
  padding: 15px 30px;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  shape-margin: 5%;

}

button.logout {
  background-color: gray;
  color: azure;
  border: 1px solid black;
  padding: 15px 30px;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  shape-margin: 5%;
}
button.add-project {
  background-color: gray;
  color: azure;
  border: 1px solid black;
  padding: 15px 30px;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  shape-margin: 5%;
}

.container {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  margin-top: 30px;
  margin-bottom: 30px;
}

.project {
  width: 30%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: 1px solid black;
  margin-left: 180px;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
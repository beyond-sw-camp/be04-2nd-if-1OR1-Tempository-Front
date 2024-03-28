<template>

    <body>
      <div class="logo">
        <img src="@/assets/images/logo_mini.jpg">
      </div>
  
      <div class="edit-my-info">
        Name <br>
        <input type="text" v-model="user.name"><br><br>
  
        NickName <br>
        <input type="text" v-model="user.nickname">
        &nbsp
        <span v-if="statusNickname === 200" class="v-symbol">V</span>
        <span v-else-if="statusNickname === 400" class="x-symbol">X</span>
        &nbsp<button class="checkExist" @click=checkNickname()>Check</button>
        <br><br>
  
        <button class="edit" @click="updateInfo()">Save</button>
        <button class="home" @click="goBack()">Back</button>
      </div>
  
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  
    </body>
  
  </template>
  
  <script setup>
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const user = {
    name: '',
    nickname: ''
  };
  const statusNickname = ref(0);

  async function updateInfo(){
    const sendData = {
      name: user.name,
      nickname: user.nickname
    }

    await axios.put(
      `http://localhost:9500/user/update-info`,
      sendData
    )

    router.push('/who-am-i');
  }

  async function checkNickname() {
  const sendData = {
    nickname: user.nickname
  }

  try {
    const response = await axios.post(
      `http://localhost:9500/user/exist`,
      sendData
    )

    statusNickname.value = response.status;
  }catch (error) {
    if (error.response) {
      statusNickname.value = error.response.status;
    }
  }
}
  
  function goBack() {
    router.push('/who-am-i');
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
  
  div.edit-my-info {
    font-size: 30px;
    align-items: center;
    align-self: auto;
    text-align: left;
    color: black;
    float: left;
  }
  
  button.edit {
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
  .checkExist{
  text-align: center;
  font-size: 20px;
  width: 120px;
  height: 4%;
  background-color: black;
  color: white;
  border: none;
}

.v-symbol {
  color: #00FF00; /* 밝은 연두색 */
  font-weight: bold;
}

.x-symbol {
  color: #FF0000; /* 빨간 색 */
  font-weight: bold;
}
  </style>
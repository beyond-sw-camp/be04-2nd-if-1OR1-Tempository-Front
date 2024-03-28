<template>

  <body>
    <div class="logo">
      <img src="@/assets/images/logo_mini.jpg">
    </div>

    <div class="signup">
      Name <br>
      <input type="text" v-model="newUser.name"><br><br>

      NickName <br>
      <input type="text" v-model="newUser.nickname">
      &nbsp
      <span v-if="statusNickname === 200" class="v-symbol">V</span>
      <span v-else-if="statusNickname === 400" class="x-symbol">X</span>
      &nbsp<button class="checkExist" @click=checkNickname()>Check</button>
      <br><br>
      

      E-mail <br>
      <input type="email" v-model="newUser.email">
      &nbsp
      <span v-if="statusEmail === 200" class="v-symbol">V</span>
      <span v-else-if="statusEmail === 400" class="x-symbol">X</span>
      &nbsp<button class="checkExist" @click=checkEmail()>Check</button>
      <br><br>

      Password <br>
      <input type="password" v-model="newUser.password"><br><br><br>

      <button class="signup" @click="successSignUp()">Sign Up</button>
      <button class="home" @click="goToHome()">Home</button>
    </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

  </body>

</template>

<script setup>
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import { useRoute, useRouter  } from 'vue-router'

  const currentRoute = useRoute();
  const router = useRouter();
  const newUser = {
    name: '',
    nickname: '',
    email: '',
    password: ''
  };
  const statusNickname = ref(0);
  const statusEmail = ref(0);

async function successSignUp() {
  const sendData = {
    name: newUser.name,
    nickname: newUser.nickname,
    email: newUser.email,
    password: newUser.password
  }

  try{
    await axios.post(
    `http://localhost:9500/user/signup`,
    sendData
  )

  router.push('/');
  } catch (error) {
    if (error.response) {
      statusNickname.value = error.response.status;
      const errorMessage = '회원 가입 실패.\n닉네임/이메일 중복 여부를 확인해주세요.';
      alert(errorMessage);
    }
  }
  
}

async function checkNickname() {
  const sendData = {
    nickname: newUser.nickname
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

async function checkEmail() {
  const sendData = {
    email: newUser.email
  }

  try {
    const response = await axios.post(
      `http://localhost:9500/user/exist`,
      sendData
    )

    statusEmail.value = response.status;
  }catch (error) {
    if (error.response) {
      statusEmail.value = error.response.status;
    }
  }
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
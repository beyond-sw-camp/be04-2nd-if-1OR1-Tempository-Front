<template>

  <body>
    <div class="logo">
      <img src="@/assets/images/logo_mini.jpg">
    </div>

    <div class="who-am-i">
      Name <br>
      <input type="text" v-model="user.name" readonly><br><br>

      NickName <br>
      <input type="text" v-model="user.nickname" readonly><br><br>

      E-mail <br>
      <input type="email" v-model="user.email" readonly><br><br>

      <button class="edit" @click=goToEditMyPage()>Edit</button>
      <button class="home" @click="goBack()">Back</button>
      <br>
      <button class="editPassword" @click=goToEditPassword()>Edit Password</button>
    </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

  </body>

</template>

<script setup>
import axios from 'axios'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const user = ref(
  {
    name: '',
    nickname: '',
    email: ''
  }
);

onMounted(async () => {
  const res = await axios.get('http://localhost:9500/user/who-am-i');
  user.value.name = res.data.name;
  user.value.nickname = res.data.nickname;
  user.value.email = res.data.email;
});

// 에러 처리 함수
function handleErrorMessage(error) {
  if (error.response && error.response.status === 400) {
    const errorMessage = error.response.data.message;
    // 에러 메시지를 알림창으로 표시
    alert(errorMessage);
    // 로그인 페이지로 리다이렉트
    router.push('/signin'); // 로그인 페이지 경로로 변경해주세요
  }
}

async function fetchData() {
  try {
    const res = await axios.get('http://localhost:9500/user/who-am-i');
    user.value.name = res.data.name;
    user.value.nickname = res.data.nickname;
    user.value.email = res.data.email;
  } catch (error) {
    handleErrorMessage(error);
  }
}

onMounted(() => {
  // 페이지가 마운트되면 데이터를 가져옵니다.
  fetchData();
});

function goToEditMyPage() {
  router.push("/edit-my-info");
}

function goBack() {
  router.push('/projectlist');
}

function goToEditPassword() {
  router.push("/edit-password");
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

div.who-am-i {
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
button.editPassword {
  text-align: center;
  font-size: 20px;
  width: 150px;
  height: 4%;
  background-color: black;
  color: white;
  border: none;
  margin-right: 200px;
}
</style>
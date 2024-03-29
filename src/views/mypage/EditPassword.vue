<template>

    <body>
      <div class="logo">
        <img src="@/assets/images/logo_mini.jpg">
      </div>
  
      <div class="edit-password">
        Before Password <br>
        <input type="password" v-model="oldPassword"><br><br>
        
        <div id="match-password" class="match-password">
            New Password <br>
            <input type="password" v-model="newPassword">
            <br><br>

            Check Password <br>
            <input type="password" v-model="checkNewPassword">
            &nbsp;
            <span v-if="checkPassword === 10" class="v-symbol">V</span>
            <span v-else-if="checkPassword === 20" class="x-symbol">X</span>
        <br><br>
        </div>
  
        <button class="edit" @click="updatePassword()">Save</button>
        <button class="home" @click="goBack()">Back</button>
      </div>
  
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  
    </body>
  
  </template>
  
  <script setup>
  import axios from 'axios'
  import { onMounted, ref, watch, createApp } from 'vue'
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const oldPassword = ref('');
  const newPassword = ref('');
  const checkNewPassword = ref('');
  const checkPassword = ref(5);

//   const user = {
//     oldPassword: '',
//     newPassword: ''
//   };
  const user = {
    name: '',
    nickname: '',
    email: ''
  }


    watch(checkNewPassword, async(newVal, oldVal) => {
        console.log(newVal);
      if(newVal === newPassword.value) {
        checkPassword.value = 10;
      } else {
        checkPassword.value = 20;
      }
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

  async function updatePassword(){
    const sendData = {
      oldPassword: oldPassword.value,
      newPassword: newPassword.value,
      checkNewPassword: checkNewPassword.value
    }

    try {
        await axios.put(
            `http://localhost:9500/user/update-password`,
            sendData
        )

        alert('비밀번호 변경 성공');

        router.push('/who-am-i');
    } catch (error) {
        if(error.response.status === 400){
            alert('비밀번호 변경 실패');
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
  
  div.edit-password {
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
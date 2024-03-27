<template>
  <div>
    <h1>받아온 값: {{ receivedValue }}</h1>
    <div class="test" v-for="user in users" :key="user.id">
      <p>{{ user.id }}</p>
      <p>{{ user.phone }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);

onMounted(async () => {
  // 데이터를 받아올 API 엔드포인트 URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  try {
    // Axios를 사용하여 GET 요청 보내기
    const response = await axios.get(apiUrl)
    // 요청이 성공했을 때 받은 데이터를 Vue 컴포넌트 데이터에 저장
    users.value = await response.data;
  } catch (error) {
    console.error('데이터를 받아오는 중 에러 발생:', error);
  }
});
</script>

<style>
</style>
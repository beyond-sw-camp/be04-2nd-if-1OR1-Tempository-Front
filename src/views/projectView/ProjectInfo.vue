<template>
  <div>
      <h2>{{ content }}</h2>
  </div>

</template>

<script setup>
import { ref, onMounted} from 'vue'
import axios from 'axios';
import {useRoute} from 'vue-router'




  const currentRoute = useRoute();
  const projectId = currentRoute.params.id;
const projects = ref([]);
const content = ref('');

onMounted(async () => {

  try {

  const response = await axios.get(`http://localhost:9500/project/${projectId}`)

    projects.value = response.data;
    content.value = response.data.content;
    console.log(projects.value)
  } catch (error) {
    console.error('데이터를 받아오는 중 에러 발생:', error);
  }
});
</script>

<style>
</style>
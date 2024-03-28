<template>
    <div class="container">
      <Header :projectName="projectName"></Header>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th v-for="field in fields" :key="field.key">{{ field.label }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in tableData" :key="row.id" @click="viewTableDetails(row.id)">
              <td>{{ row.id }}</td>
              <td>{{ row.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-between mt-3">
        <button class="btn btn-dark" @click="backToProject()">Back to Project</button>
        <button class="btn btn-dark" @click="addTable()">Add Table</button>
      </div>
    </div>
   </template>
   
   <script setup>
   import Header from './Header.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const currentRoute = useRoute();
const router = useRouter();
const tableData = ref([]);
const projectName = ref('');

// axios를 이용하여 서버와 연결
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:9500/table/${currentRoute.params.projectId}`);
    const data = await response.data;
    tableData.value = data.tableInfoList;
    console.log(tableData.value);

    // 프로젝트 정보 가져오기
    const projectResponse = await axios.get(`http://localhost:9500/project/${currentRoute.params.projectId}`);
    const projectData = await projectResponse.data;
    projectName.value = projectData.name;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
   
   const fields = ref([
    { key: 'id', label: 'Table No' },
    { key: 'name', label: 'Table Name' },
   ]);
   
   function viewTableDetails(tableNo) {
    router.push(`/table/${currentRoute.params.projectId}/${tableNo}`);
   }
   
   function addTable() {
    router.push(`/table/${currentRoute.params.projectId}/new`);
   }
   
   function backToProject() {
    router.push(`/project/${currentRoute.params.projectId}`);
   }
   </script>
   
   <style scoped>
   .table-responsive {
    overflow-x: auto; /* 가로 스크롤을 필요로 하는 경우 */
    overflow-y: auto; /* 세로 스크롤을 필요로 하는 경우 */
    max-height: 1000px; /* 원하는 높이로 설정 */
   }
   
   .table {
    width: 100%;
    cursor: pointer;
   }
   
   .table th,
   .table td {
    padding: 0.5rem;
    text-align: center;
   }
   </style>
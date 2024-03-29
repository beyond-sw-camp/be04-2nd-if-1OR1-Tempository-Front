<template>
  <div class="container">
    <h2>Edit Project</h2>
    <form @submit.prevent="editProject">
      <label for="projectName">Project Name:</label>
      <input type="text" id="projectName" v-model="editedProjectName">
      <br>
      <label for="projectContent">Project Content:</label>
      <textarea id="projectContent" v-model="editedProjectContent">{{ editedProjectName.value }}</textarea>
      <br>
      <div class="buttons">
        <button @click="editProject">Save Changes</button>
        <button @click="cancelEdit">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// URL에서 프로젝트 ID 가져오기
const projectId = router.currentRoute.value.params.id;

const project = ref([]);
const editedProjectName = ref('');
const editedProjectContent = ref('');

// 서버에서 프로젝트 정보 가져오기
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:9500/project/${projectId}`);
    project.value = response.data;
    editedProjectName.value = project.value.name;
    editedProjectContent.value = project.value.content;

    console.log(project)
    
    console.log(response.data.project)

    console.log(editedProjectName.value);
    console.log(editedProjectContent.value);
  } catch (error) {

    console.error('프로젝트 정보를 불러오는 중 에러 발생:', error);
  }
});



// 프로젝트 수정 함수
async function editProject() {
  try {
    const response = await axios.put(`http://localhost:9500/project/modify/${projectId}`, {
      name: editedProjectName.value,
      content: editedProjectContent.value,
    });
    console.log('프로젝트가 성공적으로 수정되었습니다.', response.data);
    router.push('/projectList'); // 프로젝트 목록 페이지로 이동
  } catch (error) {
    console.error('프로젝트 수정 중 에러 발생:', error);
  }
}

// 수정 취소 함수
function cancelEdit() {
  router.push('/projectlist'); // 프로젝트 목록 페이지로 이동
}
</script>

<style scoped>
.container {
  margin: 2rem auto;
  padding: 1rem;
  background-color: lightgray;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: black;
}

.container h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.container form {
  flex-direction: column;
  align-items: center;
}

.container form label {
  margin-bottom: 0.5rem;
}

.container form input,
.container form textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.container form button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.container form button:hover {
  background-color: #555;
}
</style>

<template>
  <div class="container">
    <h2>Edit Project</h2>
    <form @submit.prevent="editProject" class="form">
      <label for="projectName">Project Name:</label>
      <input type="text" id="projectName" v-model="editedProjectName" class="input-field">
      <label for="projectContent">Project Content:</label>
      <textarea id="projectContent" v-model="editedProjectContent" class="textarea-field"></textarea>
      <div class="buttons">
        <button type="submit" class="save-btn">Save Changes</button>
        <button type="button" @click="cancelEdit" class="cancel-btn">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const projectId = router.currentRoute.value.params.id;

const project = ref([]);
const editedProjectName = ref('');
const editedProjectContent = ref('');

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:9500/project/${projectId}`);
    project.value = response.data;
    editedProjectName.value = project.value.name;
    editedProjectContent.value = project.value.content;
  } catch (error) {
    console.error('Error fetching project information:', error);
  }
});

async function editProject() {
  try {
    const response = await axios.put(`http://localhost:9500/project/modify/${projectId}`, {
      name: editedProjectName.value,
      content: editedProjectContent.value,
    });
    console.log('Project successfully updated:', response.data);
    router.push('/projectList');
  } catch (error) {
    console.error('Error updating project:', error);
  }
}

function cancelEdit() {
  router.push('/projectlist');
}
</script>

<style scoped>
.container {
  margin: 2rem auto;
  padding: 1rem;
  background-color: #f8f9fa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #333;
  max-width: 600px;
  border-radius: 5px;
}

.container h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form label {
  margin-bottom: 0.5rem;
}

.input-field,
.textarea-field {
  width: calc(100% - 2rem);
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  resize: vertical;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 2rem);
}

.save-btn,
.cancel-btn {
  background-color: #343a40;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.save-btn:hover,
.cancel-btn:hover {
  background-color: #6c757d;
}
</style>

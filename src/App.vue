<template>
    <RouterView />
    <!-- <ProjectMember/> -->
    <!-- <ProjectList/> -->


</template>

<script setup>
import ProjectMember from '@/views/projectMember/ProjectMember.vue'
import { RouterView } from 'vue-router';
import ProjectList from '@/views/projectList/ProjectList.vue'
</script>

<style scoped></style>

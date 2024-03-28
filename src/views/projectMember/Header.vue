<template>
    <div class="container">
        <div class="project"><h2>{{ projectName }}</h2></div>
    </div>
</template>

<script setup>
    import {useRoute} from 'vue-router'

const currentRoute = useRoute();
const projectName = currentRoute.query.projectName;

</script>
    
<style scoped>
    .container {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .project {
        width: 30%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: white;
        border: 1px solid black;
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>
<template>
    <div class="container">
        <div class="project">project_name</div>
    </div>
</template>

<script setup>
    // 해당 프로젝트 네임 넘어올 수 있게 구현
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
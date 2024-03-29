<template>
    <div class="container">
        <div class="project"><slot></slot></div>
    </div>
</template>

<script setup>

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
        background-color: white !important
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
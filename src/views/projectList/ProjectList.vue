<template>
    <Header/>

    <div class="container">
    <div class="project">
      <div>
        <h2>Projects_Name</h2>
        <p>Project_Summarize</p>
      </div>
      <button>Setting</button>
    </div>
    <div class="project">
      <div>
        <h2>Projects_Name</h2>
        <p>Project_Summarize</p>
      </div>
      <button>Setting</button>
    </div>
    <div class="project">
      <div>
        <h2>Projects_Name</h2>
        <p>Project_Summarize</p>
      </div>
      <button>Setting</button>
    </div>
    <div class="project">
      <div>
        <h2>Projects_Name</h2>
        <p>Project_Summarize</p>
      </div>
      <button>Setting</button>
    </div>
    <div class="project">
      <div>
        <h2>Projects_Name</h2>
        <p>Project_Summarize</p>
      </div>
      <button>Setting</button>
    </div>
  </div>
</template>

<script setup>
  import Header from './Header.vue';
</script>

<style scoped>
/* Reset CSS */
* {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* Body Styles */
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }

    /* Header Styles */
    header {
      background-color: #333;
      color: #fff;
      padding: 1rem;
      text-align: center;
    }

    header button {
      background-color: transparent;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 1rem;
      margin-right: 1rem;
    }

    /* Main Content Styles */
    .container {
      display: column;
      margin: 2rem auto;
      padding: 1rem;
      background-color: lightgray;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .project {
      border-bottom: 1px solid #ddd;
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .project:last-child {
      border-bottom: none;
    }

    .project h2 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .project p {
      margin-bottom: 0.5rem;
      color: #666;
    }

    .project button {
      background-color: #333;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
</style>

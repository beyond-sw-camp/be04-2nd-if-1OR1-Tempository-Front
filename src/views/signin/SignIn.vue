<template>

    <body>
      <div class="logo" float="left">
        <img src="@/assets/images/logo_mini.jpg">
      </div>
  
      <div class="signin">
        E-mail <br>
        <input type="email" name="" id=""><br><br><br>
  
        Password <br> 
        <input type="password" name="" id=""><br><br><br>
        <button class="signin" @click="goToProjectList()">Sign In</button>
      </div>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br>
    </body>
    
    </template>
    
    <script setup>
    </script>
    
    <style scoped>
    body{
      background-color: rgb(82, 82, 82);
      padding-top: 200px;
      padding-left: 300px;
    }
    div.logo {
      float: left;
      margin-right: 100px;
    }
    div.signin {
      padding-top: 30px;
      font-size: 30px;
      align-items: center;
      align-self: auto;
      text-align: left;
      color: black;
      float: left;
    }
    button.signin {
      text-align: center;
      font-size: 20px;
      width: 80px;
      height: 4%;
      background-color: black;
      color: white;
      border: none;
    }
  
    </style>
    
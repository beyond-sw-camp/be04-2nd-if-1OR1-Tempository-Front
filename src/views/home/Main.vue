<template>

  <body>
    <div class="fistview">
      <section class="logo">
        <img src="@/assets/images/logo.jpg">
      </section>

      <section class="message">
        <h1>Start Project With Your Team!</h1>
        <br>
      </section>
    </div>

    <br>

    <div class="secondview">
      <section class="introduction">
        <br><br>
        <h1>Service introduction</h1>
        <br><br>
      </section>
    </div>

    <br>

    <div class="thirdview">
      <section class="introductionimg">
        <img src="@/assets/images/service_info.png">
        <br><br>
        <img src="@/assets/images/detail.png">
        <br><br>
        <img src="@/assets/images/member.png">
        <br><br>
        <img src="@/assets/images/footer.png">
      </section>
    </div>

  </body>

</template>

<script setup>
</script>

<style scoped>
div.fistview,
div.secondview {
  background-color: black;
  color: white;
  text-align: center;
}

div.secondview {
  font-size: 40px;
}

div.thirdview {
  text-align: center;
}
</style>
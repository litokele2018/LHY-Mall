<template>
  <div class="back-to-top">
    <img src="~assets/img/home/backToTop.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "backToTop"
  }
</script>

<style scoped>
  .back-to-top{
    position: fixed;
    bottom: 15%;
    right: 7%;
  }
  .back-to-top>img{
    width: 35px;
    height: 35px;
    background-color: rgba(255, 129, 243, 0.3);
    border-radius: 50%;
  }
</style>

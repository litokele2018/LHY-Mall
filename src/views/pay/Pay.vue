<template>
  <div class="pay">
    <h1 @click="back">BACK</h1>
    <img src="./}B2]{HSU49)D_OAO1RRY33L.jpg" alt="">
    <h1>？？？？？？？？？？？？？？？？？？？？？？？？？？？？？</h1>
    <h1>？？？？？？？？？？？？？？？？？？？？？？？？？？？？？</h1>
    <img src="./$@]@UFOBGNJR]ZQ{1SY3W29.png" alt="">
    <h1>？？？？？？？？？？？？？？？？？？？？？？？？？？？？？</h1>
    <h1>？？？？？？？？？？？？？？？？？？？？？？？？？？？？？</h1>
    <h1>？？？？？？？？？？？？？？？？？？？？？？？？？？？？？</h1>
    <h1>？？？？？？？？？？？？？？？？？？？？？？？？？？？？？</h1>
  </div>
</template>

<script>
export default {
  name: "Pay",
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style>
  .pay{
    position: fixed;
    text-align: center;
    height: 100vh;
    width: 100%;
    z-index: 30;
    background-color: #fff;
    overflow: hidden;
  }
  .pay>img {
    width: 150px;
  }
</style>
<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"/>
    </div>
    <div class="center">
      <slot name="center"/>
    </div>
    <div class="right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .navbar{
    width: 100%;
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    z-index: 6;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>

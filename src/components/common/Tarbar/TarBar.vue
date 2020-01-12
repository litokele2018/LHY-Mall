<template>
  <div id="tar-bar">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "TarBar",
  }
</script>

<style scoped>
  #tar-bar{
    display: flex;
    width: 100%;
    background-color: rgb(239, 237, 239);
    position: fixed;
    bottom: 0;
    box-shadow: 0 -10px 10px rgb(239, 237, 239);
  }
</style>

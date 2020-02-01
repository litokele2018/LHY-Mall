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
    z-index: 7;
    width: 100%;
    background-color: rgb(239, 237, 239);
    position: fixed;
    bottom: 0;
    box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.3);
  }
</style>

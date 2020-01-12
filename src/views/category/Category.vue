<template>
  <div>
    <nav-bar class="category-nav">
      <div slot="center">nihao</div>
    </nav-bar>
    <div>
      分类
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/NavBar/NavBar"

  export default {
    name: "Category",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .category-nav {
    background-color: deeppink;
  }
</style>

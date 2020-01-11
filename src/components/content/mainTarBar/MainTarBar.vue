<template>
  <div>
    <tar-bar>
      <tar-bar-item path="/home">
        <img slot="img1" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="img2" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/category">
        <img slot="img1" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="img2" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="text">分类</div>

      </tar-bar-item>
      <tar-bar-item path="/cart">
        <img slot="img1" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="img2" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="text">购物车</div>

      </tar-bar-item>
      <tar-bar-item path="/profile">
        <img slot="img1" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="img2" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="text">我的</div>
      </tar-bar-item>
    </tar-bar>
  </div>
</template>

<script>
  import TarBar from "components/common/Tarbar/TarBar"
  import TarBarItem from "components/common/Tarbar/TarBarItem"
  export default {
    name: "MainTarBar",
    components: {
      TarBarItem,
      TarBar
    }
  }
</script>

<style scoped>

</style>

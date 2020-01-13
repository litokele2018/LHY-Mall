<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <main-swiper :list="list"/>
    <home-recommend-view :recommends="recommend"/>
    <feature/>
    <div>
      首页
    </div>
  </div>
</template>

<script>
  import {getHomeMultidata} from "../../network/home"

  import NavBar from "../../components/common/NavBar/NavBar"
  import MainSwiper from "./childComps/mainSwiper/MainSwiper"
  import HomeRecommendView from "./childComps/homeRecommendView/HomeRecommendView"
  import Feature from "./childComps/feature/Feature";
  export default {
    name: "Home",
    components: {
      NavBar,
      MainSwiper,
      HomeRecommendView,
      Feature
    },
    data() {
      return {
        list: [],
        recommend: []
      }
    },
    created() {
      //  组件创建
      //  请求多个数据
      getHomeMultidata().then(res => {
        console.log(res)
        this.list = res.data.data.banner.list
        console.log(this.list)
        this.recommend = res.data.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>

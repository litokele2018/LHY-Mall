<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                 class="tab-control" ref="tabControl1"
                 @showTypeFunc="showTypeFunc"
                 @recorrectCurrentIndex="recorrectCurrentIndex"
                  v-show="showTab1"/>
    <scroll class="scroll" ref="scroll"
            @scroll="scrolling" :probe-type="3"
            @pullingUp="getMoreGoods" :tabOffsetTop="tabOffsetTop"
            @showTab1="showFirstTab"
            @removeTab1="removeFirstTab">
      <main-swiper :list="list" @swiperImgLoad="swiperImgLoad"/>
      <home-recommend-view :recommends="recommend"/>
      <feature/>
      <tab-control :titles="['流行', '新款', '精选']"
                   ref="tabControl2"
                   @showTypeFunc="showTypeFunc"
                   @recorrectCurrentIndex="recorrectCurrentIndex"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <!-- 监听组件时，需要使用修饰符 .native   -->
    <back-to-top @click.native="back" v-show="showBackToTop"/>
  </div>
</template>

<script>
  import {getHomeMultidata, getHomeGoods} from "../../network/home"
  import {debounce} from "../../common/utils"

  import NavBar from "../../components/common/NavBar/NavBar"
  import MainSwiper from "./childComps/mainSwiper/MainSwiper"
  import HomeRecommendView from "./childComps/homeRecommendView/HomeRecommendView"
  import Feature from "./childComps/feature/Feature";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goodsList/GoodsList"
  import Scroll from "../../components/common/scroll/Scroll"

  import {backTopMixin} from "../../common/mixin"

  export default {
    name: "Home",
    components: {
      NavBar,
      MainSwiper,
      HomeRecommendView,
      Feature,
      TabControl,
      GoodsList,
      Scroll,
    },
    mixins: [backTopMixin],
    data() {
      return {
        list: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        showType: 'pop',
        tabOffsetTop: 0,
        showTab1: false,
        scrollY: 0,
        swiperImgLoadCount: 0
      }
    },
    created() {
      //  组件创建
      //  请求多个数据
      this.getHomeMultiData()
      //请求goods
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    computed: {
      showGoods() {
        return this.goods[this.showType]
      }
    },
    watch: {
    },
    activated() {
      // 一开始时默认0
      // console.log(this.tabOffsetTop)
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.scrollY, 0)
    },
    deactivated() {
      this.scrollY = this.$refs.scroll.getScrollY()
    },
    mounted() {
      //封装防抖函数 效果
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      //  监听事件总线
        //goodsitem中的img
      this.$bus.$on('imgLoad', () => {
        //结局图片加载时 better-scroll中 scroll Height 问题导致滚动时卡顿
        refresh()
      })
    },

    methods: {
      /*
      * 网络请求 相关
      * */
      getHomeMultiData() {
        getHomeMultidata().then(res => {
          this.list = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        })
      },
      getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      },
      getTabOffsetTop() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      /*
      * 事件监听的方法
      * */
      showTypeFunc(showType) {
        this.showType = showType
      },
      scrolling(position) {
        this.showBackToTop = Math.abs(position.y) > 1000
        //tabControl1的显示和隐藏
        if(this.tabOffsetTop<Math.abs(position.y)){
          this.$refs.tabControl1.$el.style.opacity = 1
        }else{
          this.$refs.tabControl1.$el.style.opacity = 0
        }
      },
      swiperImgLoad() {
        //轮播图的图片加载完进行 计算 offsetTop
        if(this.list.length === ++this.swiperImgLoadCount){
          // console.log(1)
          this.getTabOffsetTop()
        }
      },
      getMoreGoods() {
        this.getHomeGoods(this.showType)
      },
      showFirstTab() {
        this.showTab1 = true
      },
      removeFirstTab() {
        this.showTab1 = false
      },
      //让两个tabcontrol的currentIndex保持一致
      recorrectCurrentIndex(index) {
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    font-size: 18px;
    color: white;
  }
  .tab-control{
    position: relative;
  }
  .scroll{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>

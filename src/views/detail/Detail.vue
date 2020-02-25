<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"
                    ref="dNavBar"
                    @titleClick="titleClick"/>
    <scroll class="d-scroll" :probe-type="3" ref="dScroll" @scroll="detailScrolling">
      <detail-swiper :topImage="topImage"/>
      <detail-info :goods="goods"/>
      <detail-shop :shop="shop"/>
      <detail-products :info="info" @dpImgLoad="dpImgLoad"/>
      <detail-params :iparams="iparams" ref="dParams"/>
      <detail-comment ref="dComments"
                      :comments="comments" @commentImgRefresh="commentImgRefresh"/>
      <div class="pop-recomments" ref="dRecommends">热门推荐</div>
      <goods-list :goods="goodsList.pop"/>
    </scroll>
    <back-to-top @click.native="back" v-show="showBackToTop"/>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
  import {getDetail, getDetailGoods, Goods, Shop, itemParams, userComment} from "../../network/detail"
  import {debounce} from "../../common/utils"

  import Scroll from "../../components/common/scroll/Scroll"

  import {backTopMixin} from "../../common/mixin"

  import DetailNavBar from "./childComponents/DetailNavBar"
  import DetailSwiper from "./childComponents/DetailSwiper"
  import DetailInfo from "./childComponents/DetailInfo"
  import DetailShop from "./childComponents/DetailShop"
  import DetailProducts from "./childComponents/DetailProducts"
  import DetailParams from "./childComponents/DetailParams"
  import DetailComment from "./childComponents/DetailComment"
  import GoodsList from "../../components/content/goodsList/GoodsList"
  import DetailBottomBar from "./childComponents/DetailBottomBar"

  export default {
    name: "Detail",
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailInfo,
      DetailShop,
      DetailProducts,
      DetailParams,
      DetailComment,
      GoodsList,
      DetailBottomBar,
    },
    mixins: [backTopMixin],
    data() {
      return {
        iid: null,
        topImage: [],
        goods: {},
        shop: {},
        info: {},
        dpImgLoadFunc: '',
        iparams: {},
        comments: {},
        goodsList: {
          'pop': {page: 0, list: []},
        },
        productsOffsetTop: 0,
        commentsOffsetTop: 0,
        recommendsOffsetTop: 0,
        // offsetTopArray: [],
      }
    },
    created() {
      //1.保存iid
      this.iid = this.$route.query.iid
      // 2 发送请求获取数据
      getDetail(this.iid).then(res => {
        console.log(res)
        this.topImage = res.data.result.itemInfo.topImages
        this.goods = new Goods(res.data.result.columns,
          res.data.result.itemInfo, res.data.result.shopInfo.services)
        this.shop = new Shop(res.data.result.shopInfo)
        this.info = res.data.result.detailInfo
        this.iparams = new itemParams(res.data.result.itemParams)
        this.comments = new userComment(res.data.result.rate)
      })
      //3 发送goods请求
      this.getDetailGoods('pop')
    },
    mounted() {
      this.dpImgLoadFunc = debounce(this.$refs.dScroll.refresh, 200)
      //一开始 评论的可见度为 0
      this.$refs.dComments.$el.style.opacity = 0
    },
    methods: {
      //商品 中的img
      dpImgLoad() {
        this.$refs.dScroll.refresh()
        //图片加载完后 修改评论的可见度为 1
        this.$refs.dComments.$el.style.opacity = 1

        this.productsOffsetTop = this.$refs.dParams.$el.offsetTop
        this.commentsOffsetTop = this.$refs.dComments.$el.offsetTop
        this.recommendsOffsetTop = this.$refs.dRecommends.offsetTop
      },
      //评论中带的img
      commentImgRefresh() {
        this.$refs.dScroll.refresh()
      },
      getDetailGoods(type) {
        this.goodsList[type]['page'] += 1
        getDetailGoods(type, this.goodsList[type]['page']).then((res) => {
          console.log(res)
          this.goodsList[type]['list'].push(...res.data.data.list)
        })
      },
      titleClick(index) {
        switch (index) {
          case 0:
            this.$refs.dScroll.scrollTo(0, 0, 0)
            break
          case 1:
            this.$refs.dScroll.scrollTo(0, -this.productsOffsetTop, 0)
            break
          case 2:
            this.$refs.dScroll.scrollTo(0, -this.commentsOffsetTop, 0)
            break
          case 3:
            this.$refs.dScroll.scrollTo(0, -this.recommendsOffsetTop, 0)
        }
      },
      // 监听detail 的滚动
      detailScrolling(position) {
        // 回到顶部条件
        this.showBackToTop = Math.abs(position.y) > 1000
        /*// 方法1
         let POSITIONY = Math.abs(position.y)
         let length = this.offsetTopArray.length
         //先判断区间
         for(let i = 0; i < length -1; i ++ ) {
           //优化 只在currentIndex和i 不同时 调用
           if( this.currentIndex !== i && (POSITIONY >= this.offsetTopArray[i] && POSITIONY < this.offsetTopArray[i+1])) {
             console.log(i)
             this.$refs.dNavBar.currentIndex = i
             this.currentIndex = i
           }
         }*/


        if (position.y <= (-this.recommendsOffsetTop)) {
          //在推荐中
          this.$refs.dNavBar.currentIndex = 3
        } else if (position.y > (-this.recommendsOffsetTop) && position.y <= (-this.commentsOffsetTop)) {
          //在评论中
          this.$refs.dNavBar.currentIndex = 2
        } else if (position.y > (-this.commentsOffsetTop) && position.y <= (-this.productsOffsetTop)) {
          //产品介绍中
          this.$refs.dNavBar.currentIndex = 1
        } else {
          //商品中
          this.$refs.dNavBar.currentIndex = 0
        }
      },
      back() {
        this.$refs.dScroll.scrollTo(0, 0, 200)
      },
      addToCart() {
        let product = {}
        product.title = this.goods.title
        product.img = this.goods.topImage
        product.price = this.goods.lowNowPrice
        product.iid = this.iid
        product.count = 1
        product.shopName = this.shop.name
        console.log(product)
        this.$store.dispatch('addCartProducts', product)
            .then(res => {
              console.log(res)
              this.$toast.show(res)
            })
      }
    },

  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 10;
    height: 100vh;
    background-color: #ffffff;
  }

  .d-scroll {
    position: absolute;
    top: 44px;
    bottom: 40px;
    left: 0;
    right: 0;
  }

  .pop-recomments {
    height: 50px;
    line-height: 50px;
    color: coral;
  }
</style>

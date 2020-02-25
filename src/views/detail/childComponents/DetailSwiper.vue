<template>
  <swiper>
    <swiper-item v-for="(item, index) in topImage" class="item" :ref="'item' + index" :key="index">
      <img :src="item" alt="" @click="showBigImg(index)">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImage: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isShow: false,
        currentIndex: 0
      }
    },
    methods: {
      showBigImg(index) {
        this.currentIndex = index
        // console.log(this.currentIndex)
        if (!this.isShow) {
          this.$refs['item' + index][0].$el.style.height = '100vh'
          this.isShow = true
        } else {
          this.$refs['item' + index][0].$el.style.height = '300px'
          this.isShow = false
        }
      }
    }
  }
</script>

<style scoped>
  .item {
    height: 300px;
    overflow: hidden;
  }
</style>

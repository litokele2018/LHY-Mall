<template>
  <div id="swiper">
    <swiper @transitionEnd="litokele">
      <swiper-item v-for="(item, index) in list" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="index" @load="swiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from '../../../../components/common/swiper'

  export default {
    name: "MainSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      list: Array
    },
    methods: {
      litokele(data) {
      //  swiper里面图片移动完一次后的回调
      },
      swiperImgLoad() {
        this.$emit('swiperImgLoad')
      }
    }
  }
</script>

<style scoped>
</style>

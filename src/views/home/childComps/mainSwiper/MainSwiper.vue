<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in list" :key="index">
        <a :href="item.link">
          <img :src="item.image">
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
  }
</script>

<style scoped>

</style>

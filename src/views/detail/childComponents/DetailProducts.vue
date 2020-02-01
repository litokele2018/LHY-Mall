<template>
  <div id="d-products" v-if="Object.keys(info).length!==0">
    <div v-for="(item, index) in info.detailImage[0].list" :key="index">
      <img :src="'http://'+item" alt=""
                class="d-p-img" @load="dpImgLoad(index)">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailProducts",
    props: {
      info: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      dpImgLoad(index) {
        //图片加载完需要刷新计算的值
        //这里也可以通过 count 来 检查img 最后一次才发送
        this.$emit('dpImgLoad')
      }
    }
  }
</script>

<style scoped>
  #d-products{
    padding-bottom: 40px;
  }
  .d-p-img{
    width: 100%;
  }
</style>

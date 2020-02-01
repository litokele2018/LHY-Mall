<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="dt-img" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="index"
             class="title-item"
             :class="{'active': index === currentIndex}"
             @click="handleClick(index)">{{item}} </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/NavBar/NavBar"
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评价', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      handleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  #detail-nav-bar{
    border-bottom: 2px solid rgb(249, 248, 249);
    font-size: 13px;
  }
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
  }
  .dt-img{
    margin-top: 8px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>

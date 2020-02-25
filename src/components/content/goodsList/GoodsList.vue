<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods.list" :item="item" :key="index"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem"
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: row;
    padding-bottom: 20px;
  }
</style>

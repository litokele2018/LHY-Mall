<template>
  <div class="goods-list-item" @click="handleItemClick">
    <img :src="item.show.img" alt="" @load="imgLoad">
    <p>{{item.title}}</p>
    <span class="price">{{item.orgPrice}}</span>
    <span class="collect">{{item.cfav}}</span>
  </div>
</template>

<script>

  export default {
    name: "GoodsListItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        iid: null
      }
    },
    created() {
      this.iid = this.item.iid
    },
    methods: {
      imgLoad() {
        //这里通过原型上的Vue实例来发射，同时 用它来监听
        this.$bus.$emit('imgLoad')
      },
      handleItemClick() {
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-list-item{
    display: inline-block;
    width: 48%;
    padding: 2px;
    font-size: 12px;
    text-align: center;
  }
  .goods-list-item p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-list-item .price{
    color: var(--color-high-text);
    margin-right: 17px;
  }
  .goods-list-item .collect{
    position: relative;
  }
  .goods-list-item .collect::before{
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    top: -1px;
    left: -15px;
    background: url("~assets/img/common/collect.svg") 0 0/14px;
  }
</style>

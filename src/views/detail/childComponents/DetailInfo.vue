<template>
  <div id="detail-info" v-if="Object.keys(goods).length!==0">
    <p class="detail-info-title">{{goods.title}}</p>
    <div>
      <span class="price">{{goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discountDesc"
            :style="{'backgroundColor': goods.discountDesc ? '#f13e3a' : 'white'}">{{goods.discountDesc}}</span>
    </div>
    <div class="info">
      <div class="sell">{{goods.sellNum}}</div>
      <div class="fav">{{goods.fav}}</div>
      <div class="serviceInfo">{{goods.serviceInfo}}</div>
    </div>
    <div class="services">
      <span v-for="i in goods.services.length-1">
        <img :src="'http://'+goods.services[i].icon" alt="">
        {{goods.services[i].name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  #detail-info{
    padding-bottom: 8px;
  }
  #detail-info>p{
    margin: 7px;
    margin-top: 10px;
    color: black;
    font-size: 18px;
  }
  .price{
    color: var(--color-high-text);
    font-size: 30px;
    margin: 7px;
    margin-top: 12px;
  }
  .old-price{
    text-decoration: line-through;
    color: #999999;
    margin-right: 5px;
  }
  .discountDesc{
    position: relative;
    top: -10px;
    padding: 3px;
    border-radius: 10px;
    color: white;
  }
  .info{
    display: flex;
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 5px;
    justify-content: space-between;
    font-size: 16px;
    color: #999999;
    padding-bottom: 3px;
    border-bottom: 3px solid rgba(250,250,249,1);
  }
  .info>div{
    flex: 1;
  }
  .info>.sell{
    text-align: left;
  }
  .info>.fav{
    text-align: center;
  }
  .info>.serviceInfo{
    text-align: right;
  }
  .services{
    display: flex;
    color: black;
    margin-top: 15px;
    padding-bottom: 15px;
    border-bottom: 5px solid rgba(250,250,249,1);
    font-size: 12px;
    justify-content: space-evenly;
  }
  .services>span{
    flex: 1;
  }
  .services>span>img{
    width: 12px;
  }
  .services>span:last-child {
    text-align: right;
    flex: 0.9;
  }
</style>

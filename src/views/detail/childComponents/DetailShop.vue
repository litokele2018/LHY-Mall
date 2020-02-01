<template>
  <div id="detail-shop" v-if="Object.keys(shop).length!==0">
    <div class="detail-shop-title">
      <img :src="shop.shopLogo" alt="">
      <div>{{shop.name}}</div>
    </div>
    <div class="d-sell-num-info">
      <table class="d-table-1">
        <tr>
          <td>
            <div>{{shop.cSells}}</div>
          </td>
          <td>
            <div>{{shop.cGoods}}</div>
          </td>
        </tr>
        <tr>
          <td>总销量</td>
          <td>全部宝贝</td>
        </tr>
      </table>
      <table class="d-table-2">
        <tr v-for="i in shop.score.length">
          <td>{{shop.score[i-1].name}}</td>
          <td :style="{'color' : shop.score[i-1].isBetter ? 'red' : 'green'}">{{shop.score[i-1].score}}</td>
          <td :style="{'color' : 'white', 'backgroundColor': shop.score[i-1].isBetter ? 'red' : 'green'}">{{shop.score[i-1].isBetter | highOrLow}}</td>
        </tr>
      </table>
      <div class="shopInput clearfix">
        <div><a :href="shop.shopUrl">进店逛逛</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShop",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
      }
    },
    created() {
    },
    filters: {
      highOrLow(isBetter) {
        let hRL = ''
        if (isBetter) hRL = '高'
        else hRL = '低'
        return hRL
      }
    }
  }
</script>

<style scoped>
  #detail-shop{
    position: relative;
  }
  .detail-shop-title{
    padding-top: 20px;
    padding-left: 10px;
  }
  .detail-shop-title>img{
    width: 50px;
  }
  .detail-shop-title>div{
    position: relative;
    top: -15px;
    left: 10px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    font-size: 25px;
  }
  .d-table-1{
    display: inline-table;
    width: 50%;
    border-spacing: 10px;
    text-align: center;
    border-right: 1px solid black;
    vertical-align: middle;
  }
  .d-table-2{
    margin-left: 20px;
    display: inline-table;
    text-align: left;
    border-spacing: 10px;
    vertical-align: middle;
  }
  .green{
    color: green;
  }
  .red{
    color: red;
  }
  .shopInput{
    position: relative;
    height: 50px;
    margin-top: 20px;
    width: 100%;
  }
  .shopInput>div{
    position: absolute;
    width: 200px;
    height: 30px;
    line-height: 30px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    background-color: rgb(243, 246, 252);
    border: 1px solid white;
    border-radius: 10px;
  }
  .clearfix{
    zoom: 1
  }
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
</style>

<template>
  <div class="cart-info">
    <div class="nav-bar" ref="NavBar">
      <span>购物车</span>
      <span>管理</span>
    </div>
    <scroll class="cart-scroll" ref="cartscroll" :probe-type="3" @scroll="scrolling">
      <div class="top-info">
        <div class="title">购物车</div>
        <div class="admin">管理</div>
        <div>共{{$store.state.cartList.length}}件宝贝</div>
      </div>
      <div class="cart-products" v-if="$store.state.cartList.length !== 0">
        <div class="products-items" v-for="(item, index) in $store.state.cartList" :key="index">
          <div class="shop-name">
            {{item.shopName}}
          </div>
          <div>
            <label>
              <input type="checkbox" @click="checkItem(index, item.price*item.count)" :ref="'litokele'+index">
              <img class="item-img" :src="'https:'+item.img" alt="">
            </label>
          </div>
          <div class="cart-p-title">
            <span>{{item.title}}</span>
            <div>
              <span>现货;邮费默认到付</span>
            </div>
            <div class="item-price">
              <div>
                ￥ {{item.price}}
                <div class="btn-count">
                  <button @click="decrement(index, item)">-</button>
                  {{item.count}}
                  <button @click="increment(index, item)">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else style="color: black;text-align: center;padding-top: 10px;padding-bottom: 50px">
        <img src="~assets/img/1.jpg" alt="" width="100%">
        <h2 style="padding-bottom: 10px">购物车竟然是空的</h2>
        <h3>再忙，也要记得买点什么犒赏自己</h3>
      </div>
      <div>
        <div style="text-align: center;padding-bottom: 10px">
          <h2 style="color: #ff5000">你可能还喜欢</h2>
        </div>
        <goods-list class="goods-list" :goods="goodsList.pop"/>
      </div>
    </scroll>
    <div class="cart-bottom-bar">
      <label>
        <input type="checkbox" @click="allCheck" ref="allCheck">
        <span>全选</span>
      </label>
      <div class="sum-price">
        <span>合计: ￥ {{sumPrice | saveTwoNum}}</span>
        <div class="pay" @click="toPayMoney">结算({{checkedCount}})</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll"
  import GoodsList from "../../../components/content/goodsList/GoodsList"
  import {getDetailGoods, itemParams} from "../../../network/detail"
  export default {
    name: "CartInfo",
    components: {
      Scroll,
      GoodsList
    },
    data() {
      return {
        sumPrice: 0,
        allSumPrice: 0,
        checkedCount: 0,
        goodsList: {
          'pop': {page: 0, list: []},
        },
      }
    },
    created() {
      this.getDetailGoods('pop')
    },
    mounted() {
      this.$refs.cartscroll.refresh()
    },
    activated() {
      this.$refs.cartscroll && this.$refs.cartscroll.refresh()
    },
    filters: {
      saveTwoNum(value) {
        return value.toFixed(2)
      }
    },
    computed: {
      watchCount() {
        return this.$store.state.cartList.map(item => item.count)
      },
    },
    watch: {
      watchCount(value) {
        console.log(value)//是一个数组
        let length = this.$store.state.cartList.length //避免获取不到出现报错
        if(value) {
          this.sumPrice = 0
          for(let i = 0 ; i < length; i ++) {
            if(this.$refs['litokele' + i] && this.$refs['litokele' + i][0].checked === true) {
              this.sumPrice += this.$store.state.cartList[i].price * value[i]
            }
          }
        }
      }
    },
    methods: {
      toPayMoney() {
        if(this.checkedCount === 0) {
          this.$toast.show('请选择或添加商品')
        }else {
          this.$toast.show('正在前往付款的路上')
          setTimeout(() => {
            console.log(this.$router)
            this.$router.push('/pay')
          }, 500)
        }
      },
      checkItem(index, value) {
        if(this.$refs['litokele'+index][0].checked === true) {
          this.sumPrice += value
        }else {
          this.sumPrice -= value
          if(this.sumPrice < 0) {
            this.sumPrice = 0
          }
        }
        //判断是否全选
        if(this.$refs['litokele'+ index ][0].checked === true) {
          this.checkedCount += 1
          if(this.checkedCount === this.$store.state.cartList.length) {
            this.$refs.allCheck.checked = true
          }
        }else {
          this.$refs.allCheck.checked = false
          this.checkedCount -= 1
        }
      },
      allCheck(e) {
        console.log(e)
        //点击全选时， 重新计算价格
        this.allSumPrice = 0
        this.$store.state.cartList.forEach(item => {
          this.allSumPrice += item.count * item.price
        })
        if(this.sumPrice !== this.allSumPrice && e.target.checked === true) {
          this.sumPrice = this.allSumPrice
          this.checkedCount = this.$store.state.cartList.length
          for(let i = 0; i < this.$store.state.cartList.length; i ++) {
            this.$refs['litokele' + i][0].checked = true
          }
        }else {
          this.sumPrice = 0
          this.checkedCount = 0
          for(let i = 0; i < this.$store.state.cartList.length; i ++) {
            this.$refs['litokele' + i][0].checked = false
          }
        }
      },
      decrement(index, item) {
        this.$store.commit('decCount', index)
      },
      increment(index, item) {
        this.$store.commit('addCount', index)
      },
      scrolling(position) {
        if (position.y > 0) {
          this.$refs.NavBar.style.opacity = 0
        }
        if(position.y < 0) {
          this.$refs.NavBar.style.opacity = Math.abs(position.y/50)
        }
      },
      getDetailGoods(type) {
        this.goodsList[type]['page'] += 1
        getDetailGoods(type, this.goodsList[type]['page']).then((res) => {
          console.log(res)
          this.goodsList[type]['list'].push(...res.data.data.list)
        })
      },
    },
  }
</script>

<style scoped>
  .goods-list{
    color: black;
  }
  .nav-bar span:last-child{
    position: absolute;
    right: 10px;
    font-size: 14px;
  }
  .nav-bar{
    position: relative;
    z-index: 10;
    height: 35px;
    line-height: 35px;
    opacity: 0;
    background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
    color: white;
    text-align: center;
    font-size: 20px;
  }
  .cart-scroll{
    position: fixed;
    bottom: 97px;
    left: 0;
    right: 0;
    top: 0;
  }
  .pay{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 80px;
    text-align: center;
    background-color: #ff5000;
    color: white;
    border-radius: 10px;
    margin-top: 5px;
    margin-left: 5px;
  }
  .sum-price{
    position: absolute;
    top: 0;
    right: 5px;
  }
  .cart-bottom-bar{
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 47px;
    color: #666666;
    height: 49px;
    line-height: 49px;
    background-color: white;
  }
  .cart-bottom-bar input{
    vertical-align: middle;
    margin-left: 10px;
  }
  .cart-bottom-bar span{
    margin-left: 2px;
    vertical-align: middle;
  }
  .cart-info{
    position: relative;
    color: white;
    height: 100vh;
    font-size: 12px;
    background-color: #f4f4f4;
  }
  .title{
    font-size: 18px;
    line-height: 25px;
  }
  .admin{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 14px;
  }
  .top-info{
    background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
    width: 100%;
    padding-left: 5px;
    padding-bottom: 40px;
  }
  .cart-products{
    color: black;
    margin: 5px;
    margin-top: -25px;
  }
  .products-items{
    position: relative;
    vertical-align: middle;
    line-height: 20px;
    padding-top: 5px;
    padding-bottom: 15px;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 500;
    background-color: white;
    border-radius: 10px;
  }
  .products-items input{
    margin: 6px;
    vertical-align: middle;
  }
  .item-img{
    width: 100px;
    height: 100px;
    vertical-align: middle;
    border-radius: 3px;
  }
  .cart-p-title{
    position: absolute;
    top: 30px;
    margin-left: 160px;
    margin-right: 10px;
    font-size: 12px;
  }
  .cart-p-title>div{
    color: #999999;
    margin-top: 5px;
    margin-left: 2px;
  }
  .item-price>div{
    position: relative;
    margin-top: 10px;
    color: #ff5000;
    font-size: 15px;
    font-weight: bold;
  }
  .btn-count{
    display: inline-block;
    position: absolute;
    color: #666666;
    font-size: 12px;
    font-weight: 100;
    right: 5px;
    bottom: 5px;
    border: 1px solid #f4f4f4;
    border-radius: 3px;
  }
  .btn-count>button{
    width: 20px;
    color: #999999;
    background-color: white;
    border: 0 solid white;
  }
  .shop-name{
    padding-left: 25px;
    padding-bottom: 10px;
  }
</style>

<template>
  <div id="d-comments">
    <div class="d-c-title">
      <div class="user-comments">用户评价</div>
      <a href="#">更多<img class="d-comments-img" src="~assets/img/common/back.svg" alt=""></a>
    </div>
    <div class="d-c-content">
      <img class="d-c-avatar" :src="comments.userAvatar" alt="">
      <span>{{comments.userName}}</span>
      <div class="comments-content">
        {{comments.content}}
      </div>
      <div class="d-c-time-style">
        {{new Date(comments.createdTime*1000).toLocaleDateString()}}
        {{comments.style}}
      </div>
      <img class="d-c-img" v-for="item in comments.imgs" :src="'http:'+item"
           @load="loadRefresh" alt="">
    </div>
    <div>
      i Have nothing
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailComment",
    props: {
      comments: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      loadRefresh() {
        this.$emit('commentImgRefresh')
      }
    }
  }
</script>

<style scoped>
  #d-comments{
    position: relative;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 5px solid #f2f5f8;
  }
  .user-comments{
    display: inline-block;
  }
  #d-comments a{
    position: absolute;
    vertical-align: middle;
    right: 10px;
    font-size: 14px;
  }
  .d-comments-img{
    transform: rotate(180deg);
    position: relative;
    top: -2px;
    width: 15px;
    vertical-align: middle;
  }
  .d-c-title{
    height: 40px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #999999;
  }
  .d-c-avatar{
    width: 50px;
    margin: 10px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .d-c-content>span{
    font-size: 18px;
    vertical-align: middle;
  }
  .comments-content{
    margin: 5px;
    font-size: 14px;
    line-height: 18px;
  }
  .d-c-time-style{
    font-size: 12px;
    margin: 10px;
    color: #999999;
  }
  .d-c-img{
    width: 70px;
    margin-left: 10px;
    margin-top: 5px;
  }
</style>

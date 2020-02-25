<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
         class="tab-control-item"
         :class="{'active': currentIndex === index}" @click="handleClick(index)"
         :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
        showType: '',
      }
    },
    methods: {
      handleClick(index) {
        this.currentIndex = index
        if(this.currentIndex === 0){
          this.showType = 'pop'
        }else if(this.currentIndex === 1) {
          this.showType = 'new'
        }else{
          this.showType = 'sell'
        }
        this.$emit('recorrectCurrentIndex', this.currentIndex)
        this.$emit('showTypeFunc', this.showType)
      }
    },
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 44px;
    line-height: 44px;
    z-index: 6;
    background-color: white;
  }
  .tab-control-item{
    flex: 1;
  }
  .active span{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
    padding: 5px;
  }
</style>

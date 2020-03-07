<template>
  <div class="left-tab-list">
    <div v-for="(item, index) in titleList" 
          :key="item + index" 
          class="list-item"
          :class="{'active': currentIndex === index? true: false}"
          @click='handleClick(index)'>
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftTabList",
  components: {

  },
  props: {
    titleList: Array
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index 
      this.$emit('clickMnue', index)
    }
  }
}
</script>

<style>
  .left-tab-list{
    width: 100px;
    background-color: transparent;
  }
  .list-item {
    width: 100%;
    color: var(--color-text);
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .active{
    color: var(--color-high-text);
    border-left: 3px solid var(--color-high-text);
    box-sizing: border-box; 
    background-color: #fff;
  }
</style>
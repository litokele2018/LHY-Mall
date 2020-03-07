<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridView',//自定义栅格
  props: {
    verticalMargin: {//垂直方向margin
      type: Number,
      default: 8
    },
    horizonMargin: {
      type: Number,
      default: 8
    },
    cols: { //需要分布为几列
      type: Number,
      default: 2
    },
    itemSpace: { //元素间的间距
      type: Number,
      default: 8
    },
    lineSpace: { //行间距
      type: Number,
      default: 8
    }
  },
  create() {
  },
  mounted() {
    this.autoLayOut()
  },
  updated() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      this.autoLayOut()
    })
  },
  methods: {
    autoLayOut() { //自动布局
      const grid = this.$refs.gridView
      // 获取grid中的每一个小的item
      const children = grid.children

      // 这里设置grid 的内边距 就不用设置item的margin了
      grid.style.padding = `${this.verticalMargin}px ${this.horizonMargin}px` // 上下  左右
      let itemWidth = (grid.clientWidth - 2 * this.horizonMargin - (this.cols - 1) * this.itemSpace) / this.cols
      // console.log(itemWidth)
      for (let i = 0; i < children.length; i ++) {
        const item = children[i]
        item.style.width = itemWidth + 'px'
        // console.log(item.style.width)
        if ((i + 1) % this.cols !== 0) { //排除 一排中的  最后一个 
          item.style.marginRight = this.itemSpace + 'px'
        }
        if (i >= this.cols) {
          item.style.marginTop = this.lineSpace + 'px'
        }
      }

    }
  }
}
</script>

<style>
  .grid-view{
    display: flex;
    flex-wrap: wrap;
  }
</style>
<template>
  <div class="wrapper" ref="wrap">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      // pullUpLoad: {
      //   type: Boolean,
      //   default: false
      // }
      tabOffsetTop: {
        type: Number,
        default: 0
      },
    },
    data() {
      return {
        bScroll: null,
      }
    },
    mounted() {
      this.bScroll = new BScroll(this.$refs.wrap, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: {
          threshold: 90
        }
      })
      this.bScroll.on('scroll', (position) => {
        if(this.tabOffsetTop < Math.abs(position.y)){
          this.$emit('showTab1')
        }else {
          this.$emit('removeTab1')
        }
        this.$emit('scroll', position)
      })
      this.bScroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    created() {
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.bScroll && this.bScroll.scrollTo(x, y, time)
      },
      refresh() {
        this.bScroll && this.bScroll.refresh()
      },
      finishPullUp() {
        this.bScroll && this.bScroll.finishPullUp()
      },
      getScrollY() {
        if(this.bScroll) return this.bScroll.y
      },
    }
  }
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
  }
</style>

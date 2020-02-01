import backToTop from "../components/content/backtoTop/backToTop"

export const litokeleMixins = {
  //  这里面写共同的代码
  data() {
    return {}
  },
  create() {

  }
}
// 回到顶部
export const backTopMixin = {
  components: {
    backToTop,
  },
  data() {
    return {
      showBackToTop: false,
    }
  },
  methods: {
    back() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}

<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    
  },
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='hello -- test', duration=2000) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
  .toast{
    z-index: 20;
    position: absolute;
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.74);
    top: 40%;
    left: calc((100vw - 200px)/2);
    border-radius: 7px;
    border: 1px solid black;
  }
</style>

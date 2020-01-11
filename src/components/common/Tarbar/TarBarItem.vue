<template>
  <div class="tar-bar-item" @click="handleClick">
    <div v-if="isActive">
      <slot name="img1" />
    </div>
    <div v-else>
      <slot name="img2" />
    </div>
    <div :style="{'color': !isActive ? 'rgb(255, 87, 119)' : 'black'}"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TarBarItem",
    props:{
      path: String
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path !== this.path
      }
    },
    methods: {
      handleClick() {
        this.$router.push(this.path)
      }
    },
  }
</script>

<style scoped>
  .tar-bar-item{
    flex: 1;
    text-align: center;
  }
  .tar-bar-item>div>img{
    height: 29px;
    margin-bottom: -3px;
    text-align: center;
  }

</style>

<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tar-bar/>
  </div>
</template>

<script>
import MainTarBar from "components/content/mainTarBar/MainTarBar"

import store from "./store"
import router from "./router"
export default {
  name: 'app',
  store,
  router,
  components: {
    MainTarBar,
  },
  beforeMount() {
    // console.log(this)
  },
}
</script>

<style>
  @import "assets/css/base.css";
</style>

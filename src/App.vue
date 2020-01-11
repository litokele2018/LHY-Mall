<template>
  <div id="app">
    <router-view/>
    <main-tar-bar/>
  </div>
</template>

<script>
import MainTarBar from "./components/content/mainTarBar/MainTarBar"

import router from "./router"
export default {
  name: 'app',
  router,
  components: {
    MainTarBar,
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>

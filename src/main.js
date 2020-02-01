import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//事件总线   可以在上面调用$emit $on
Vue.prototype.$bus = new Vue()


new Vue({
  render: h => h(App),
}).$mount('#app')

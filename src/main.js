import Vue from 'vue'
import App from './App.vue'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
//事件总线   可以在上面调用$emit $on
Vue.prototype.$bus = new Vue()

//封装toast 安装插件
Vue.use(toast)

//解决移动端点击300ms延迟
FastClick.attach(document.body)

//vue-lazyload 图片懒加载
Vue.use(LazyLoad, {
  loading: require('./assets/img/placeholder.png')
})

new Vue({
  render: h => h(App),
}).$mount('#app')

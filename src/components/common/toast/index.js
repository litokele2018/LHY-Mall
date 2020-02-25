import Toast from './Toast.vue'
const obj = {}


// 对于 使用 Vue.use  后会执行该对象的install方法 全局插件
obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 2.new 的方式 创建一个组件对象
  const toast = new toastConstructor()
  // 3.将组件对象手动挂载到某一元素
  toast.$mount(document.createElement('div'))
  // 4.获取toast.$el并添加到document中
  document.body.appendChild(toast.$el)

  // 5.在Vue原型上添加组件对象 
  Vue.prototype.$toast = toast
}
export default obj
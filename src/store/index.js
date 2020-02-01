import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCartProducts(state, payload) {
      let beforeLoad = false
      //map是遍历修改 返回修改后的数组
      //forEach 仅仅是遍历
      state.cartList && state.cartList.forEach(item => {
        if(item.iid === payload.iid) {
          item.count ++
          beforeLoad = true
        }
      })
      if(!beforeLoad){
        state.cartList.push(payload)
      }
    }
  }
})

export default store

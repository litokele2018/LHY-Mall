export const mutations = {
  addCount(state, index) {
    state.cartList[index].count++
  },
  decCount(state, index) {
    state.cartList[index].count--
    if (state.cartList[index].count < 0) {
      window.confirm('are you sure to delete this item ?')
      state.cartList[index].count = 0
    }
  },
  pushItem(state, item) {
    state.cartList.push(item)
  },
  pushIid(state, iid) {
    state.existIid.push(iid)
  },
}
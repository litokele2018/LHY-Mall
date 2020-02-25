export const actions = {
  addCartProducts(context, payload) {
    return new Promise(resolve => {
      if (!context.state.cartList || context.state.existIid.indexOf(payload.iid) === (-1)) {
        context.commit('pushIid', payload.iid)
        context.commit('pushItem', payload)
        resolve('成功添加新商品')
      }else {
        context.state.cartList.forEach((item, index) => {
          if (item.iid === payload.iid) {
            context.commit('addCount', index)
            resolve('商品数量+1')
          }
        })
      }
    })
  },
}
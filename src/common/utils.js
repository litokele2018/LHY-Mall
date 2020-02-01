//防抖函数
export function debounce(func, delay) {
  let timer = null
  return (...args) => {
    //这里是闭包， timer并不会被垃圾回收
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      //这里解决传参问题
      func.apply(this, args)
    }, delay)
  }
}

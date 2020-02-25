module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // options 该插件可以将 px 转化为 vm 适配移动端不同机型的屏幕大小
      unitToConvert: 'px', 
      viewportWidth: 375, //视口宽度
      unitPrecision: 5, //结果保留几位小数
      propList: ['*'],  //设置哪些能被转化  通配符 全选
      viewportUnit: 'vw', //expected unit
      fontViewportUnit: 'vw',// expected unit for font
      selectorBlackList: [], //The selectors to ignore and leave as px 忽略列表
      minPixelValue: 1, //当小于1px时不进行转换
      mediaQuery: false, //是否修改媒体查询中的
      replace: true,
      exclude: [],
      landscape: false, //Adds @media (orientation: landscape) with values converted via landscapeWidth
      landscapeUnit: 'vw',
      landscapeWidth: 568
    }
  }
}
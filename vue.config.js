module.exports = {
  configureWebpack: {
    resolve: {
    // 与路径相关
      alias: {
        // '@': 'src' 默认配置 别名
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'components': '@/components',
        'views': '@/views'
      }
    }
  }
}
// const proxy = require('http-proxy-middleware')

// module.export = function(app){
//   app.use(
//     // 代理api 下面再把 /api 替换为空字符串 因为路径里面没有 /api
//     proxy('/api', {  // 遇见 /api1 前缀的请求 就会触发该代理配置
//       target: 'http://localhost:3000', // 请求转发给谁
//       changeOrigin: true, // 控制服务器接收到的请求头Host的值 
//       // 重新请求路径 把 /api1 替换为空字符串 必须加
//       pathRewrite:{'^/api' : ''} 
//     }),
//     // proxy('/api2', { // 遇见 /api2前缀的请求 就会触发该代理配置
//     //   target: 'http://localhost:5001',
//     //   changeOrigin: true,
//     //   // 把api 替换为空字符串
//     //   pathRewrite:{'^/api2' : ''}
//     // }),
//   )
// }

const { createProxyMiddleware } = require('http-proxy-middleware')

module.export = function(app){
  app.use(
    // 代理api 下面再把 /api 替换为空字符串 因为路径里面没有 /api
    createProxyMiddleware('/api', {  // 遇见 /api1 前缀的请求 就会触发该代理配置
      target: 'http://localhost:3000', // 请求转发给谁
      changeOrigin: true, // 控制服务器接收到的请求头Host的值 
      // 重新请求路径 把 /api1 替换为空字符串 必须加
      pathRewrite:{'^/api' : ''} 
    }),
    // createProxyMiddleware('/api2', { // 遇见 /api2前缀的请求 就会触发该代理配置
    //   target: 'http://localhost:5001',
    //   changeOrigin: true,
    //   // 把api 替换为空字符串
    //   pathRewrite:{'^/api2' : ''}
    // }),
  )
}
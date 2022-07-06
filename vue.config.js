const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    
}) 

//  代理跨域 
 module.exports={
  publicPath:'./',
  assetsDir: 'static', 
    parallel: false,
  productionSourceMap:false,
  //  关闭eslink
  lintOnSave:false,  
    devServer:{
  proxy:{ 
     '/api':{
      target:'http://gmall-h5-api.atguigu.cn/api',
      ws: true, // 是否跨域
                changeOrigin: true,
                secure: false,
                // 重写地址
                pathRewrite: {
                    '^/api': ''
                }
    }
  }
}
 }


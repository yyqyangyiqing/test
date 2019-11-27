// const proxy = require('http-proxy-middleware');

// module.exports = (app)=>{

//   app.use(proxy('/api',{
//     target:'http://localhost:3000',
//     changeOrigin:true
//   }));

//   app.use(proxy('/v2',{
//     target:'https://douban.uieee.com',
//     changeOrigin:true
//   }));

//   app.use(proxy('/mock',{
//     target:'http://localhost:3333',
//     changeOrigin:true
//   }));
// };





module.exports={
    lintOnSave:false, //避免elint报错
    devServer: {

        proxy:{//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
          '/api':{//axios访问 /api ==  target + /api  
            target:'http://localhost:3000',
            changeOrigin:true,//创建虚拟服务器 
          },
          //https://douban.uieee.com/v2/movie/xxxxxxx
          '/douban':{// axios 访问 /douban == target + '/douban'
            target:'https://douban.uieee.com',
            changeOrigin:true,
            pathRewrite:{//路径替换
              '^/douban':'',// axios 访问/douban/v2 == target + "" + /v2
            }
          },
          '/mock':{//axios访问 /api ==  target + /api  
            target:'http://localhost:3333',
            changeOrigin:true,//创建虚拟服务器 
          },

        }
      },
}
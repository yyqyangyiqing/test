const jsonServer = require('json-server');//在node里面使用json-server包
const db = require('./db.js');//引入mockjs配置模块
const path = require('path');
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

const server = jsonServer.create();//创建jsonserver 服务对象
const router = jsonServer.router(db);//创建路由对象
const middlewares = jsonServer.defaults({
  static:path.join(__dirname, '/public'),//静态资源托管

});

let mock='/mock';//创建根api名 这里的 /mock 如同 后端真实/api

//路由自定义
const rewriter = jsonServer.rewriter({
  [mock+"/*"]: "/$1",

  "/product\\?dataName=:dataName": "/:dataName",
  "/banner\\?dataName=:dataName": "/:dataName",
  "/detail\\?dataName=:dataName&id=:id": "/:dataName/:id",

  // "/product/del\\?dataName=:dataName&id=:id": "/:dataName/:id",
  // "/product/add\\?dataName=:dataName": "/:dataName",
  // "/product/check\\?dataName=:dataName&id=:id": "/:dataName/:id"
});

server.use(middlewares);

server.use((request, res, next) => {//可选 统一修改请求方式
  // console.log(1)
  // request.method = 'GET';
  next();
});

server.use(jsonServer.bodyParser);//抓取body数据使用json-server中间件

//模拟校验
server.post(mock+'/login', (req, res) => {
  console.log(req.query, req.body);//抓取提交过来的query和body
  let username=req.body.username;
  let password=req.body.password;
  (username === 'aa' && password === 'aa123')?
    res.jsonp({
      "err": 0,
      "msg": "登录成功",
      "data": {
        "follow": mr.integer(0,10000),
        "fans": mr.integer(0,100000),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(1553425967486,1576475967486)
      }
    }) :
    res.jsonp({
      "err": 1,
      "msg": "登录失败",
    })

});
server.post(mock+'/reg', (req, res) => {
  let username=req.body.username;
  console.log(req.body);
  (username == 'aa') ?
    res.jsonp({
      "err": 0,
      "msg": "注册成功",
      "data": {
        "follow": mr.integer(0,10000),
        "fans": mr.integer(0,100000),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }) :
    res.jsonp({
      "err": 1,
      "msg": "注册失败",
    })

});
server.get(mock+'/user', (req, res) => {
  // console.log(req.query, req.body);//抓取提交过来的query和body
   Math.random()>0.01 ? 
    res.jsonp({
      "err": 0,
     
     "data": {
      " msg":"算你运气好,登陆了",
      "follow": mr.integer(0,10000),
      "fans": mr.integer(0,100000),
      "nikename": mr.cname(),
      "icon": mr.image('20x20',mr.color(),mr.cword(1)),
      "time": mr.integer(1553425967486,1576475967486)
    }
 
    }) :
    res.jsonp({
      "err": 1,
      "msg": "没登录",
    })

});




//自定义返回内容
router.render = (req, res) => {
  let len = Object.keys(res.locals.data).length; //判断数据是不是空数组和空对象
  // console.log(len);

  setTimeout(()=>{
    res.jsonp({
      err: len !== 0 ? 0 : 1,
      msg: len !== 0 ? '成功' : '失败',
      data: res.locals.data
    })
  },1000)

  // res.jsonp(res.locals.data)

};
server.use(rewriter);//路由重写
server.use(router);//路由响应

//开启jsonserver服务
server.listen(3333, () => {
  console.log('mock server is running')
});
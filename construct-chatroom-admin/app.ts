import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './routes'
import koaStatic from 'koa-static'
import mount from 'koa-mount'
import excepition from './exception'

// 创建app应用对象
const app = new Koa()
// 监听端口号, 启动服务器
const server = app.listen(3001, () =>
  console.log('服务器启动成功, 地址: http://localhost:3001/')
)

app
  // 错误处理
  .use(excepition())
  // 请求体参数处理
  .use(bodyParser())
  // 路由请求
  .use(router.routes())
  // 路由错误处理
  .use(router.allowedMethods())
  // 挂载静态资源
  .use(mount('/public', koaStatic(__dirname + '/public')))

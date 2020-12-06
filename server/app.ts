import Koa from 'koa'
import router from './routes'
// 创建app应用对象
const app = new Koa()

app.use(router.routes()).use(router.allowedMethods())

// 监听端口号, 启动服务器
app.listen(3001, () =>
  console.log('服务器启动成功, 地址: http://localhost:3001/')
)

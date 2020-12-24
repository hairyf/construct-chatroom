/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-24 09:58:31
 * @Description: 后台应用出口
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import koajwt from 'koa-jwt'
import koaStatic from 'koa-static'
import mount from 'koa-mount'
import router from './routes'
import graphql from './graphql'
import excepition from './exception'
import { SECRET } from './config'
import { useSocket } from './socket.io'

// 创建app应用对象
const app = new Koa()
// 监听端口号, 启动服务器
const server = app.listen(3001, () =>
  console.log('服务器启动成功, 地址: http://localhost:3001/')
)
useSocket(server)
app
  .use(excepition())
  .use(bodyParser())
  .use(mount('/public', koaStatic(__dirname + '/public')))
  .use(
    koajwt({ secret: SECRET }).unless({
      path: [/\/public/, /\/login/, /\/register/, /\/common/]
    })
  )
  .use(router.routes())
  .use(router.allowedMethods())
  .use(graphql())

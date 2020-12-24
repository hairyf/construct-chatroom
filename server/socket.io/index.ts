/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-22 10:21:53
 * @LastEditTime: 2020-12-24 17:19:09
 * @Description: socket.io 入口文件
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import SocketIO from 'socket.io'
import jwt from 'jsonwebtoken'
import { Server } from 'http'
import { SECRET } from '../config'
import { ChatModel, UserModel } from '../db'
// 消息队列
const socketQueues: Record<string, SocketIO.Namespace> = {}

// 监听单连接事件
const socketEventMonitor = (socket: SocketIO.Namespace) => {
  socket.on('client-login', (userid) => (socketQueues[userid] = socket))
  socket.on('client-send-user', async (params) => {
    // 校验用户是否合法
    const authorization = params.authorization.replace('Bearer ', '')
    const state = jwt.verify(authorization, SECRET) as { _id: string }
    const userInfo = await UserModel.findById(state._id)
    if (!userInfo) {
      return socket.emit('server-error', '当前用户不合法')
    }
    // 创建消息记录
    const chatDoc = await ChatModel.create({
      chat_id: [params.from, params.to].sort().join('_'),
      content: params.content,
      to: params.to,
      from: params.from,
      type: params.type
    } as any)
    // 发送对应用户消息
    socketQueues[params.to].emit('server-send', chatDoc)
  })
}

// 引入并连接 socket
export const useSocket = (server: Server) => {
  const io = new SocketIO.Server(server)
  io.on('connection', (socket: SocketIO.Namespace) => {
    socketEventMonitor(socket)
  })
  return server
}

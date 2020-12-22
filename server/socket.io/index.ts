/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-22 10:21:53
 * @LastEditTime: 2020-12-22 13:51:13
 * @Description: socket.io 入口文件
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import SocketIO from 'socket.io'
import { Server } from 'http'
export const useSocket = (server: Server) => {
  const io = new SocketIO.Server(server)
  io.on('connection', (socket: SocketIO.Namespace) => {
    socket.emit('init', '服务端建立连接, 当前时间为' + new Date())
    setInterval(() => {
      socket.emit('init', '服务端建立连接, 当前时间为' + new Date())
    }, 5000)
  })
  return server
}

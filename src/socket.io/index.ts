/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-22 11:31:14
 * @LastEditTime: 2020-12-24 13:12:38
 * @Description: socket.io 入口
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { io } from 'socket.io-client'
// 连接服务器, 得到代表连接的 socket 对象
const socket = io()

export { socket }

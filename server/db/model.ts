/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-08 12:48:35
 * @Description: 多个数据库模块
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { createModel } from './connect'

export const UserModel = createModel({
  avatar: { type: String, required: true },
  username: { type: String, required: true, minlength: 3, maxlength: 15 },
  password: { type: String, required: true },
  gender: { type: String, required: true, match: /^women|men$/ },
  nickname: { type: String },
  autograph: { type: String },
  createtime: { type: Date, default: Date.now }
})('user')

/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-07 23:10:40
 * @Description: 多个数据库模块
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { createModel } from './connect'

export const UserModel = createModel({
  avatar: { type: String, required: true },
  nickname: { type: String },
  username: { type: String, required: true },
  password: { type: String, required: true, minlength: 6, maxlength: 20 },
  autograph: { type: String },
  createtime: { type: Date, default: Date.now }
})('user')

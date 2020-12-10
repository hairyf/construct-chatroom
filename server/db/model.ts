/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-10 23:58:34
 * @Description: 多个数据库模块
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { createModel } from './connect'

/** 用户数据表 */
export const UserModel = createModel({
  avatar: { type: String, required: true, maxlength: 250 },
  username: { type: String, required: true, minlength: 3, maxlength: 15 },
  password: { type: String, required: true },
  gender: { type: String, required: true, match: /^women|men$/ },
  nickname: {
    type: String,
    default: '暂无名称...',
    minlength: 3,
    maxlength: 15
  },
  autograph: {
    type: String,
    default: '这个人很懒，什么都没有留下',
    maxlength: 250
  },
  createtime: { type: Date, default: Date.now }
})('user')

/** 消息群表 */
export const GroupModel = createModel({
  groupname: { type: String, required: true, minlength: 3, maxlength: 15 },
  avatar: { type: String, required: true, maxlength: 250 },
  founder: { type: String, required: true },
  members: {
    type: [
      {
        user_id: { type: String, required: true },
        createtime: { type: Date, default: Date.now }
      }
    ]
  },
  autograph: { type: String, default: '欢迎大家入群交流~', maxlength: 250 },
  createtime: { type: Date, default: Date.now }
})('group')
/** 消息数据表 */

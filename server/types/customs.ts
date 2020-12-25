/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-10 23:32:54
 * @LastEditTime: 2020-12-25 11:28:36
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { Document } from 'mongoose'
interface BaseDb extends Document {
  _id: string
  __v: number
}
export interface GroupModelType extends BaseDb {
  groupname: string
  avatar: string
  founder: string
  members: {
    user_id: string
    createtime: number
  }[]
  autograph: string
  createtime: number
}

export interface UserModelType extends BaseDb {
  avatar: string
  username: string
  password: string
  gender: 'women' | 'men'
  nickname: string
  autograph: string
  createtime: number
}
export interface ChatModelType extends BaseDb {
  type: 'user' | 'group'
  from: string
  to: string
  chat_id: string
  content: string
  read: boolean
  createtime: number
  readCount: number
}
export interface ContactModelType extends BaseDb {
  uid: string
  fid: string
}

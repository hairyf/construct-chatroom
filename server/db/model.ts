/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-29 00:42:22
 * @Description: 多个数据库模块
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { createModel } from './connect'
import { UserModelType, GroupModelType, ChatModelType } from '../types/customs'
/** 用户数据表 */
export const UserModel = createModel<UserModelType>({
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

/** 联系人表 */
export const ContactModel = createModel({
  uid: { type: String, required: true },
  fid: { type: String, required: true },
  createtime: { type: Date, default: Date.now }
})('contact')

/** 消息群表 */
export const GroupModel = createModel<GroupModelType>({
  // 群名称
  groupname: { type: String, required: true, minlength: 3, maxlength: 15 },
  // 群头像
  avatar: { type: String, required: true, maxlength: 250 },
  // 群主 ID
  founder: { type: String, required: true },
  // 群成员
  members: {
    type: [
      {
        uid: { type: String, required: true },
        createtime: { type: Date, default: Date.now }
      }
    ]
  },
  // 群简介
  autograph: { type: String, default: '欢迎大家入群交流~', maxlength: 250 },
  // 创建时间
  createtime: { type: Date, default: Date.now }
})('group')

/** 用户|群聊天记录表 */
export const ChatModel = createModel<ChatModelType>({
  // 消息类型用户|群
  type: { type: String, required: true, match: /^user|group$/ },
  // 发送用户|群的 id
  from: { type: String, required: true },
  // 接收用户|群的 id
  to: { type: String, required: true },
  // from 和 to 组成的聊天标识
  chat_id: { type: String, required: true },
  // 聊天记录表
  image: { type: String, required: true },
  // 一条消息的内容
  content: { type: String, required: true },
  // 标识是否已读(只有接受者才需要的数据)
  read: { type: Boolean, default: false },
  // 创建这条聊天的时间
  createtime: { type: Date, default: Date.now }
})('chat')

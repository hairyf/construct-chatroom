/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-24 13:29:53
 * @LastEditTime: 2020-12-24 17:17:51
 * @Description: 聊天信息请求模块
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Router from 'koa-router'
import { ChatModel } from '../db/model'
import { ChatModelType } from '../types/customs'
const chat = new Router()

// 获取消息列表
chat.get('/message', async (ctx) => {
  const _id: string = ctx.state._id
  const chatDocs = await ChatModel.find({ $or: [{ to: _id }, { from: _id }] })
  // 当前用户聊天信息进行时间升序(升序)
  const chatsTimeAscending = chatDocs.sort(
    (chat_a, chat_b) => chat_a.createtime - chat_b.createtime
  )
  // 过滤聊天信息为chat_id:{...}, 进行统计对方发给我的未读数量
  const chatsfilterObjs = chatsTimeAscending.reduce((total, item) => {
    const unReadCount = +(item.from == _id && !item.read)
    // 继承先前统计, 合并消息
    if (typeof total[item.chat_id] === 'undefined') {
      total[item.chat_id] = item
    } else {
      item.readCount = total[item.chat_id].readCount
      total[item.chat_id] = item
    }
    // 进行统计对方发给我的未读数量
    if (typeof total[item.chat_id].readCount === 'undefined') {
      total[item.chat_id].readCount = unReadCount
    } else {
      total[item.chat_id].readCount += unReadCount
    }
    return total
  }, {} as Record<string, ChatModelType>)
  // 返回数据
  ctx.body = Object.values(chatsfilterObjs)
})

export default chat

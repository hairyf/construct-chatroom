/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-10 23:14:01
 * @LastEditTime: 2020-12-19 17:26:32
 * @Description: 群路由接口
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import '../types/customs'
import Router from 'koa-router'
import { UserModel, GroupModel } from '../db'
const group = new Router()

/** 创建群聊 */
group.post('/create', async (ctx) => {
  const { _id } = (await GroupModel.create(ctx.request.body)).toObject()
  ctx.body = _id
})

/** 群聊详情 */
group.get('/detail', async (ctx) => {
  const groupInfo: GroupModelType = (await GroupModel.findOne({
    _id: ctx.request.body.id
  })) as any
  const user_ids = groupInfo.members.map((item) => ({ _id: item.user_id }))
  const members = (await UserModel.find({ $or: user_ids })) as any[]
  groupInfo.members = members
  ctx.body = groupInfo
})

export default group

/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 14:39:50
 * @LastEditTime: 2020-12-07 18:00:48
 * @Description: 用户路由接口
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Router from 'koa-router'
import vlr from 'validator'
import { UserModel } from '../db'
const router = new Router()
/**
 * 用户注册
 *
 */
router.post('/register', async (ctx) => {
  const body = ctx.request.body
  const findDoc = await UserModel.findOne({
    username: ctx.request.body.username
  })
  if (findDoc) ctx.throw(401, '该用户已存在')
  if (vlr.isEmpty(body.avatar || '')) ctx.throw(401, '头像为空')
  if (vlr.isEmpty(body.username || '')) ctx.throw(401, '账号为空')
  if (vlr.isEmpty(body.password || '')) ctx.throw(401, '密码为空')
  if (vlr.isLength(body.password || '', { min: 6, max: 20 }))
    ctx.throw(401, '密码为空, 或小于6-20的数量')
  const createDoc = await UserModel.create(body)
  ctx.body = createDoc.toObject()
})

router.get('/login', async (ctx) => {
  ctx.body = { code: 1, msg: '登录成功!' }
})
export default router

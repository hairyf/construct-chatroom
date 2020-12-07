/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 14:39:50
 * @LastEditTime: 2020-12-07 23:48:21
 * @Description: 用户路由接口
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Router from 'koa-router'
import jsonwebtoken from 'jsonwebtoken'
import { UserModel } from '../db'
const router = new Router()

router.post('/register', async (ctx) => {
  const body = ctx.request.body
  const findDoc = await UserModel.findOne({
    username: ctx.request.body.username
  })
  if (findDoc) ctx.throw(401, '该用户已存在')
  const userInfo = await UserModel.create(body)
  ctx.body = {
    ...userInfo
  }
})

router.get('/login', async (ctx) => {
  ctx.body = { code: 1, msg: '登录成功!' }
})
export default router

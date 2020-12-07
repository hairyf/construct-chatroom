/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 14:39:50
 * @LastEditTime: 2020-12-08 00:59:45
 * @Description: 用户路由接口
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Router from 'koa-router'
import { Document } from 'mongoose'
import jwt from 'jsonwebtoken'
import { UserModel } from '../db'
import { SECRET } from '../config'
const router = new Router()

router.post('/register', async (ctx) => {
  const body = ctx.request.body
  const findDoc = await UserModel.findOne({ username: body.username })
  if (findDoc) ctx.throw(401, '该用户已存在')
  const userInfo = (await UserModel.create(body)).toObject()
  ctx.body = Object.assign(userInfo, {
    token: jwt.sign(userInfo._id, SECRET, { expiresIn: '1h' })
  })
})

router.get('/login', async (ctx) => {
  const params = ctx.params
  const headers = ctx.headers
  // 查询账号是否存在
  const isEmpty = !(await UserModel.findOne({
    username: params.username
  }))
  if (isEmpty) ctx.throw(403, '该账号不存在')
  // 这里判断是使用token解析的 _id 还是使用账号与密码
  let findDoc = null as null | Document
  if (headers.authorization) {
    const _id = jwt.verify(headers.authorization, SECRET)
    findDoc = await UserModel.findById(_id)
    if (!findDoc) {
      return ctx.throw(403, '登录状态已过期')
    }
  } else {
    findDoc = await UserModel.findOne({
      username: params.username,
      password: params.password
    })
    if (!findDoc) {
      return ctx.throw(403, '账号密码不正确')
    }
  }
  const userInfo = findDoc && findDoc.toObject()
  ctx.body = Object.assign(userInfo, {
    token: jwt.sign(userInfo._id, SECRET, { expiresIn: '1h' })
  })
})
export default router

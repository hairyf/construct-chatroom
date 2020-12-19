/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 14:39:50
 * @LastEditTime: 2020-12-19 17:18:00
 * @Description: 用户路由接口
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Router from 'koa-router'
import { Document } from 'mongoose'
import jwt from 'jsonwebtoken'
import md5 from 'md5'
import { UserModel } from '../db'
import { SECRET } from '../config'
const user = new Router()

/** 进行注册 */
user.post('/register', async (ctx) => {
  const body = ctx.request.body
  const findDoc = await UserModel.findOne({ username: body.username })
  if (findDoc) return ctx.throw(403, '该用户已存在')
  body.password = body.password ? md5(body.password) : null
  const userInfo = (await UserModel.create(body)).toObject()
  ctx.body = Object.assign(userInfo, {
    token: jwt.sign({ _id: userInfo._id }, SECRET, { expiresIn: '1h' })
  })
})
/** 进行登录(token|账号密码) */
user.post('/login', async (ctx) => {
  const body = ctx.request.body
  const headers = ctx.headers
  // 这里判断是使用token解析的 _id 还是使用账号与密码
  let findDoc = null as null | Document
  if (headers.authorization) {
    const state = jwt.verify(headers.authorization, SECRET) as { _id: string }
    findDoc = await UserModel.findById(state._id)
    if (!findDoc) return ctx.throw(403, '登录状态已过期')
  } else {
    const isEmpty = !(await UserModel.findOne({
      username: body.username
    }))
    if (isEmpty) return ctx.throw(403, '该账号不存在')
    findDoc = await UserModel.findOne({
      username: body.username,
      password: body.password ? md5(body.password) : ''
    })
    if (!findDoc) return ctx.throw(403, '账号密码不正确')
  }
  const userInfo = findDoc && findDoc.toObject()
  ctx.body = Object.assign(userInfo, {
    token: jwt.sign({ _id: userInfo._id }, SECRET, { expiresIn: '1h' })
  })
})

export default user

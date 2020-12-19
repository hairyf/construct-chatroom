/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-19 22:09:56
 * @Description: 全局路由出口
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Router from 'koa-router'
import user from './user'
import group from './group'
import common from './common'
const router = new Router()

router.use('/user', user.routes(), user.allowedMethods())
router.use('/group', group.routes(), group.allowedMethods())
router.use('/common', common.routes(), common.allowedMethods())

export default router

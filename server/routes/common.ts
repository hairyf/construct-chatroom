/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-19 17:15:14
 * @LastEditTime: 2020-12-19 23:39:55
 * @Description: 共用请求模块
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Router from 'koa-router'
import { BASE_URL } from '../config'
import { useImageMulter } from '../utils'
const common = new Router()
const uploadImage = useImageMulter()

/** 上传单文件 */
common.post('/upload_image', uploadImage.single('file'), (ctx) => {
  ctx.body = `${BASE_URL}/public/${ctx.file.filename}`
})

/** 上传多文件 */
common.post('/upload_images', uploadImage.array('files', 6), (ctx) => {})

export default common

import Router from 'koa-router'
const router = new Router()
// 创建一个get请求, 路径是/search
router.get('/search', async (ctx) => {
  //处理并返回数据.....
  ctx.body = { code: 1, msg: '请求成功' }
})
// 创建一个post请求, 路径是/search
router.post('login', async (ctx) => {
  //处理并返回数据.....
  ctx.body = { code: 1, msg: '请求成功' }
})

export default router

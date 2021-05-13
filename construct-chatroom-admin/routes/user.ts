import { UserModel } from '../db'
import KoaRouter from 'koa-router'
const user = new KoaRouter()

user.get('/api', async (ctx) => {
  ctx.throw(403, '不够权限')
})

export default user
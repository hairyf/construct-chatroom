import KoaRouter from 'koa-router'
import common from './common'
import user from './user'

const router = new KoaRouter()

router.use('/user', user.routes(), user.allowedMethods())
router.use('/common', common.routes(), common.allowedMethods())

export default router
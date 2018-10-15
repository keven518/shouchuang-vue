const Router = require('koa-router')

let router = new Router()
router.get('/', async(ctx) => {
  ctx.body = '首页接口'
})

router.get('/register', async(ctx) => {
  ctx.body = '首页用户注册接口'
})

module.exports = router
const Router = require('koa-router')

let router = new Router()
router.get('/', async(ctx) => {
  ctx.body = 'keven router'
})

router.get('/register', async(ctx) => {
  ctx.body = '用户注册接口'
})

router.post('/register', async(ctx) => {

  console.log('register: ', ctx.request.body)
  ctx.body = ctx.request.body

})

module.exports = router
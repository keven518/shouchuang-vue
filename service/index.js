const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const Router = require('koa-router')

app.use(bodyParser())
app.use(cors())

let user = require('./appApi/user.js')

// 装载所有子路由
let router = new Router()
router.use('/user', user.routes())
// 实例化或者使用router
app.use(router.routes())
app.use(router.allowedMethods())

app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
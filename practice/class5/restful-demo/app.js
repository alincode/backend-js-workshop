const Koa = require('koa')

// https://github.com/koajs/router/blob/HEAD/API.md
const Router = require('@koa/router')
// https://www.npmjs.com/package/koa-bodyparser
const bodyParser = require('koa-bodyparser')
const hostname = '127.0.0.1'
const port = 3000

const postData = require('./post.json')

const app = new Koa()
const router = new Router()

router.get('/posts/:id', (ctx, next) => {
  const { id } = ctx.params
  ctx.body = postData[id - 1]
})

router.patch('/posts/:id', (ctx, next) => {
  const { id } = ctx.params
  const { body } = ctx.request
  const oldData = postData[id - 1]
  const newData = { ...oldData }
  newData.title = body.title
  ctx.body = newData
})

router.get('/posts', (ctx, next) => {
  ctx.body = postData
})

router.post('/posts', (ctx, next) => {
  // const body = ctx.request.body
  const { body } = ctx.request
  // console.log('body', body)
  ctx.status = 201
  ctx.body = { id: postData.length + 1 }
})

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))

module.exports = app

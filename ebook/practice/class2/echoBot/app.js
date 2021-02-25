const Koa = require('koa')
const app = new Koa()
const hostname = '127.0.0.1'
const port = 3000
app.use(async (ctx) => {
  const { message } = ctx.request.query
  ctx.body = { message, reply: message }
})
app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))

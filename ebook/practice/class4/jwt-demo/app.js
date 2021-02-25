const Koa = require('koa')
const jwt = require('koa-jwt')

const app = new Koa()
const hostname = '127.0.0.1'
const port = 3000

app.use(jwt({ secret: 'shared-secret' }).unless({ path: [/^\/public/] }))

app.use(function(ctx, next) {
  if (ctx.url.match(/^\/public/)) {
    ctx.body = 'unprotected\n'
  } else {
    return next()
  }
})

app.use(function(ctx) {
  if (ctx.url.match(/^\/api/)) {
    ctx.body = 'protected\n'
  }
})

app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))

module.exports = app

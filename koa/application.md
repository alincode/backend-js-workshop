# Application

<!--
## Cascading

```js
const Koa = require('koa')
const app = new Koa()

// logger
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// response
app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

app.listen(3000)
```
-->

## 設定 (Settings)

`app.env` defaulting to the `NODE_ENV` or "development"

## ❗app.listen(...)

A Koa application is not a 1-to-1 representation of an HTTP server. One or more Koa applications may be mounted together to form larger applications with a single HTTP server.

```js
const http = require('http')
const https = require('https')
const Koa = require('koa')
const app = new Koa()
http.createServer(app.callback()).listen(3000)
https.createServer(app.callback()).listen(3001)
```

## app.callback()

Return a callback function suitable for the http.createServer() method to handle a request. You may also use this callback function to mount your Koa app in a Connect/Express app.

## ❗app.use(function)

Add the given middleware function to this application. See Middleware for more information.

## ❗app.context

```js
app.context.db = db()

app.use(async (ctx) => {
  console.log(ctx.db)
})
```

## 錯誤處理 (Error Handling)

```js
app.on('error', (err) => {
  log.error('server error', err)
})
```

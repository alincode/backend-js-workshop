# Koa VS Express

### Koa

- 支援 async & await
- 可自由挑選各種組件

**執行**

```
npm init -y
npm i koa -S
npm i @koa/router -S
node app.js
```

**app.js 檔案**

```js
const Koa = require('koa')
const Router = require('@koa/router')

const app = new Koa()
const router = new Router()

const hostname = '127.0.0.1'
const port = 3000

router.get('/', (ctx, next) => {
  ctx.body = 'Hello world'
})

app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))
```

### Express

<https://expressjs.com/>

- 有預設的 router 模組
- 有預設的 body parse 模組

**執行**

```
npm init -y
npm i express -S
node app.js
```

**app.js 檔案**

```js
const express = require('express')
const app = express()
const hostname = '127.0.0.1'
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World'))
}
app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))
```

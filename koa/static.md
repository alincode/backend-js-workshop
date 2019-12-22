# 靜態檔案 (static)

```
npm i koa
npm i koa-static
node app.js
```

app.js 檔

```js
const Koa = require('koa')
const path = require('path')
const serve = require('koa-static')

const app = new Koa()

const hostname = '127.0.0.1'
const port = 3000

const staticMiddleware = serve(path.join(__dirname))

app.use(staticMiddleware)
app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))
```

# 介紹 Koa

![](../assets/koa.png)

- 必須要使用 **node v7.6.0** 上以的版本，for ES2015 and async function support.

### 優點

- 預設使用 async
- 沒有預設任何 middleware，自由選配
- 非常輕量，使用的資源是最少的。

### 缺點

- 如果使用在低於 node v7.6.0 的版本，需要轉擋。

### 新增 `app.js` 檔案

```js
const Koa = require('koa')
const app = new Koa()
const hostname = '127.0.0.1'
const port = 3000

app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))
```

### 執行

```sh
npm init -y
npm i koa -S
node app.js
```

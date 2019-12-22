# 自訂模組

定義模組

```js
function hello() {
  console.log('Hello World')
}

function bye() {
  console.log('bye')
}

module.exports = {
  hello,
}
```

呼叫模組

```js
const m = require('./my-module')

m.hello()
```

### 自己開發的模組

- <https://www.npmjs.com/package/youtube-playlist-cli>
- <https://www.npmjs.com/package/koa-gcs>

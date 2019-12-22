# 路由 (router)

<https://github.com/koajs/router/blob/master/API.md>

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

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))
```

### router.get|put|post|patch|delete|del ⇒ Router

```js
router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!'
  })
  .post('/users', (ctx, next) => {
    // ...
  })
  .put('/users/:id', (ctx, next) => {
    // ...
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })
  .all('/users/:id', (ctx, next) => {
    // ...
  })
```

### Multiple middleware

```js
router.get(
  '/users/:id',
  async (ctx, next) => {
    const user = await User.findOne(ctx.params.id)
    ctx.user = user
    next()
  },
  async (ctx) => {
    console.log(ctx.user)
    // => { id: 17, name: "Alex" }
  }
)
```

### 巢狀路由 (Nested routers)

```js
const forums = new Router();
const posts = new Router();

posts.get('/', (ctx, next) => {...});
posts.get('/:pid', (ctx, next) => {...});
forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());

// responds to "/forums/123/posts" and "/forums/123/posts/123"
app.use(forums.routes());
```

### 路由前置詞 (Router prefixes)

```js
const router = new Router({
  prefix: '/users'
});

router.get('/', ...); // responds to "/users"
router.get('/:id', ...); // responds to "/users/:id"
```

### URL parameters / Path parameters

```js
router.get('/:category/:title', (ctx, next) => {
  console.log(ctx.params)
  // => { category: 'programming', title: 'how-to-node' }
})
```

### 延伸閱讀

- [Path-to-RegExp](https://github.com/pillarjs/path-to-regexp)

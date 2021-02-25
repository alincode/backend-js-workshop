const koa = require('koa')
const Router = require('@koa/router')
const hbs = require('koa-hbs')
const faker = require('faker')

const hostname = '127.0.0.1'
const port = 3000
const app = new koa()
const router = new Router()

app.use(
  hbs.middleware({
    viewPath: __dirname + '/views',
  })
)

router.get('/', async (ctx) => {
  console.log(ctx.url)
  const user = { firstName: 'AILIN', lastName: 'LIOU', email: 'alin.code@gmail.com' }
  const data = { title: 'Welcome', display: true, user }
  await ctx.render('index', data)
})

router.get('/users', async (ctx) => {
  let users = []
  for (let i = 0; i < 10; i++) {
    users.push({ firstName: faker.name.firstName, lastName: faker.name.lastName, email: faker.internet.email() })
  }

  const data = { users }
  await ctx.render('user', data)
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))

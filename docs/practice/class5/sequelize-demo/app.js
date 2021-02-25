const koa = require('koa')
const Router = require('@koa/router')
const faker = require('faker')
const db = require('./models')

const hostname = '127.0.0.1'
const port = 3000

const app = new koa()
const router = new Router()

app.context.db = db

router.get('/createUser', async (ctx) => {
  let newUser = new ctx.db.User()
  newUser.firstName = faker.name.firstName()
  newUser.lastName = faker.name.lastName()
  newUser.email = faker.internet.email()
  await newUser.save()
  ctx.body = 'OK'
})

router.get('/', async (ctx) => {
  let users = await ctx.db.User.findAll()
  ctx.body = users
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))

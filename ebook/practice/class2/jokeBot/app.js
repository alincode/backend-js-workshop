const randomInt = require('random-int')
const Koa = require('koa')
const app = new Koa()
const hostname = '127.0.0.1'
const port = 3000

const questionBank = [
  '為什麼放連假的時候不能去工作？.....因為會變成連假勞工',
  '哈利波特裡面誰最有主見？.....佛地魔，因為他不會被牽著鼻子走',
  '哪個女藝人不能代言電鍋?.....范冰冰(飯冰冰)',
]
app.use(async (ctx) => {
  const { message } = ctx.request.query
  let reply
  if (message != 'joke') {
    reply = '我聽不懂，你在說什麼'
  } else {
    reply = questionBank[randomInt(questionBank.length - 1)]
  }
  ctx.body = { message, reply: reply }
})
app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))

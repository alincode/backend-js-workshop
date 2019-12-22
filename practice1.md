# 第一週 - 練習題

### Echo Bot

1. 透過傳給 message 參數值給 Server 來詢問 Bot 一個問題，Bot 會回覆一樣的內容。
2. 回應的格式要符合以下規則

```json
{
  "message": "hi",
  "reply": "hi"
}
```

[解答](https://github.com/alincode/2019-fcu-backend-dev/tree/master/practice/class2/echoBot)

### Joke Bot

1. 透過傳給 message 參數值給 Server 來詢問 Bot 一個問題，如果 message 值是給 joke，Server 會回應一個隨機產生的笑話，如果 message 值是亂填的，Bot 則回應「我聽不懂，你在說什麼」。
2. 回應的格式要符合以下規則

```json
{
  "message": "joke",
  "reply": "從前從前有個..."
}
```

```json
{
  "message": "hi",
  "reply": "我聽不懂，你在說什麼"
}
```

[解答](https://github.com/alincode/2019-fcu-backend-dev/tree/master/practice/class2/jokeBot)

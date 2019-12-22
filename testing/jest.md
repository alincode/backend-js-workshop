# Jest

- <https://jestjs.io/>
- <https://jestjs.io/docs/en/getting-started>
- <https://devhints.io/jest>

![](https://jestjs.io/img/content/matchers/equals.png)

### 單元測試

```
npm install --save-dev jest
```

sum.js 檔

```js
function sum(a, b) {
  return a + b
}
module.exports = sum
```

sum.test.js 檔

```js
const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

package.json 檔

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### 整合測試

參考練習題

### 延伸閱讀

- [Delightful JavaScript Testing with Jest - YouTube](https://www.youtube.com/watch?v=cAKYQpTC7MA)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

# 套件管理

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "nodemon": "^1.11.0"
  },
  "devDependencies": {
    "mocha": "^1.11.0"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "alincode <alincode@gmail.com>",
  "license": "ISC"
}
```

### 安裝套件

- [install | npm Documentation](https://docs.npmjs.com/cli/install)
- 別名 i
  <!-- - 補充：[nodemon](https://nodemon.io/) -->

**參數**

- -g：表示全域安裝
- --save：production，縮寫 `-S`
- --save-dev：development (預設)，縮寫 `-D`
- 什麼都沒加的情況

**安裝專案下所有的套件**

```sh
cd your-project-folder

npm install

// 或

npm install --production

// 或

NODE_ENV=production npm install
```

**安裝指定套件到全域**

- 常用於安裝工具型套件

```
npm install -g nodemon
```

**安裝到專案，並將依賴寫入 package.json 的 dependencies**

```
npm install --save koa
npm install -S koa
```

**安裝到專案，並將依賴寫入 package.json 的 devDependencies**

```
npm install --save-dev nodemon
npm install --D nodemon
```

**安裝指定版本或 指定 tag 的套件**

- @latest：表示最新 ​​ 版本

```
npm install npm@latest -g
npm i nodemon@1.6.0
```

### 移除套件

```
npm uninstall -g nodemon
npm uninstall --save nodemon
npm uninstall --dev-save nodemon
```

- [uninstall | npm Documentation](https://docs.npmjs.com/cli/uninstall)
- 別名：remove、rm、r、un、unlink

### 更新套件

```
npm update
npm update nodemon
```

- 它會先到 remote repo 確認最新版本，然後確認 local 版本，如果 local 版本不存在，或 remote repo 版本較新，就會開始安裝套件。

### 查看套件詳細資訊

- [view | nam Documentation](https://docs.npmjs.com/cli/view)
- 別名有 info, show, v

**範例**

```
npm view color
npm view color name version engines description license keywords author maintainers homepage repository
```

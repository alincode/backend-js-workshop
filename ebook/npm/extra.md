# NPM 額外補充

**安裝沒有 release 到 NPM，但原始碼放在 github 的套件**

```
npm i https://github.com/expressjs/express.git
```

### 查看所有套件

**查看專案下安裝的套件**

```
npm list
```

**查看全域下安裝的套件**

```
npm list -global
```

**查看專案下指定安裝的套件**

```
npm list underscore
```

### 連結套件

- 使用情境：安裝放在 local 的套件

```
npm link sandbox /Users/ailinliu/sandbox-module
```

## config

```
npm help config
```

- 當執行 set 和 get 時，config 關鍵字可省略。

**語法**

```
npm config set <key> <value> [-g|--global]
npm config get <key>
npm config delete <key>
```

**設定 config 值範例**

```
npm config set init-author-name 'alincode'
npm config set init-author-email 'alincode@gmail.com'
npm config set init-author-url 'http://yourdomain.com'
npm config set init-license 'MIT'

npm config set save-prefix='~'
// 預設每次安裝都用精確版號
npm config set save-exact true
// 自訂變數
npm config set demo:port 80
```

```
{
  "name":"demo",
  "config":{ "port" : "8080" }
}
```

**讀取 config 值範例**

```
npm config get init-author-name
```

```
console.log(process.env.npm_package_name);
console.log(process.env.npm_package_version);
console.log(process.env.npm_package_config_port);
```

**刪除 config 值範例**

```
npm config delete init-author-name
```

**查看 config 列表**

```
// 全域 config
npm config list -l

// 使用者 config
npm config list
```

**在編輯器開啟設定檔**

```
npm config edit
npm config edit -g
```

## 其他常用指令

**查看 NPM 使用說明**

```
npm help
```

**查看各個命令的簡單用法**

```
npm -l
```

**查看 NPM 的版本**

```
npm -v
```

**前往套件的官網**

```
npm home jquery
```

**前往套件的 repo**

```
npm repo jquery
```

**前往套件的 bug issue 列表**

```
npm bug jquery
```

**搜尋套件**

- [search | nam Documentation](https://docs.npmjs.com/cli/search)
- 別名有 s, se, find
- 可用正則表達式

```
npm search express
```

### 解決全域安裝權限問題

- 檢查 prefix 指定的位置：`npm config list -l`
- 編輯設定檔，更改 prefile 指定的位置：`npm config edit`
- 將 prefile 指定的位置，改到使用者具有足夠權限的資料夾。

```
prefix = "/Users/ailinliu/.nvm/versions/node/v6.9.4"
```

### 上線前鎖死版號

```
npm shrinkwrap
```

### 檢查過期的相依模組

![](assets/outdate.png)

[outdated | nam Documentation](https://docs.npmjs.com/cli/outdated)

```
npm outdated
```

# 資料庫

### SQL 風格

```js
var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'mydb',
})

con.connect(function(err) {
  if (err) throw err
  console.log('Connected!')
  var sql = "INSERT INTO users (firstName, lastName) VALUES ('AILIN', 'LIOU')"
  con.query(sql, function(err, result) {
    if (err) throw err
    console.log('1 record inserted')
  })
})
```

### ORM 風格

ORM (Object-relational mapping)

```js
// sequelize
let user = await User.create({ firstName: 'AILIN', lastName: 'LIOU' })
```

- [ORM 介紹及 ORM 優點、缺點 – Bryce'S Note](http://blog.twbryce.com/what-is-orm/)

### 資料庫

- SQLite
- RDBMS：MySQL / MariaDB, PostgreSQL, Microsoft SQL Server

### 選用哪一個模組

- Sequelize：支援 PostgreSQL, MySQL, MariaDB, SQLite and Microsoft SQL Server 資料庫
- Mongoose：支援 MongoDB

## 延伸閱讀

- [Node.js MySQL](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
- [Node.js MongoDB](https://www.w3schools.com/nodejs/nodejs_mongodb.asp)
- [SQLite Node.js](https://www.sqlitetutorial.net/sqlite-nodejs/)

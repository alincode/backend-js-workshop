# model

models/user.js 檔

```js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {}
  )
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
```

## CRUD

新增

```js
User user = new User();
user.firstName = 'AILIN'
user.lastName = 'LIOU'
user.email = 'alin.code@gmail.com'

await user.save()
```

```js
User.bulkCreate([
  { username: 'barfooz', isAdmin: true },
  { username: 'foo', isAdmin: true },
  { username: 'bar', isAdmin: false },
])
  .then(() => {
    return User.findAll()
  })
  .then((users) => {
    console.log(users)
  })
```

修改

```js
await user.update({ firstName: 'AI-LIN' })
```

刪除

```js
await user.destroy()
```

讀取

```js
await User.findAll()
```

## 關聯 (associations)

<https://sequelize.org/master/manual/associations.html>

```
- BelongsTo
- HasOne
- HasMany
- BelongsToMany
```

```js
const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: 'user' }
)

sequelize
  .sync()
  .then(() =>
    User.create({
      username: 'janedoe',
      birthday: new Date(1980, 6, 20),
    })
  )
  .then((jane) => {
    console.log(jane.toJSON())
  })
```

https://sequelize.org/master/manual/associations.html

### 一對一 (One to One)

```js
class Player extends Model {}
Player.init(
  {
    /* attributes */
  },
  { sequelize, modelName: 'player' }
)
class Team extends Model {}
Team.init(
  {
    /* attributes */
  },
  { sequelize, modelName: 'team' }
)

Player.belongsTo(Team) // Will add a teamId attribute to Player to hold the primary key value for Team
```

### 一對多 (One to Many)

One-To-Many associations (hasMany)

```js
class Task extends Model {}
Task.init({ title: Sequelize.STRING }, { sequelize, modelName: 'task' })

class User extends Model {}
User.init({ username: Sequelize.STRING }, { sequelize, modelName: 'user' })

User.hasMany(Task) // Will add userId to Task model
Task.belongsTo(User) // Will also add userId to Task model 屬於
```

### 多對多 (Many to Many)

```js
class ItemTag extends Model {}
ItemTag.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tagId: {
      type: Sequelize.INTEGER,
      unique: 'item_tag_taggable',
    },
    taggable: {
      type: Sequelize.STRING,
      unique: 'item_tag_taggable',
    },
    taggableId: {
      type: Sequelize.INTEGER,
      unique: 'item_tag_taggable',
      references: null,
    },
  },
  { sequelize, modelName: 'item_tag' }
)

class Tag extends Model {}
Tag.init(
  {
    name: Sequelize.STRING,
    status: Sequelize.STRING,
  },
  { sequelize, modelName: 'tag' }
)

Post.belongsToMany(Tag, {
  through: {
    model: ItemTag,
    unique: false,
    scope: {
      taggable: 'post',
    },
  },
  foreignKey: 'taggableId',
  constraints: false,
})

Tag.belongsToMany(Post, {
  through: {
    model: ItemTag,
    unique: false,
  },
  foreignKey: 'tagId',
  constraints: false,
})
```

## DataType

- Sequelize.STRING
- Sequelize.INTEGER
- DataTypes.DATE

## 延伸閱讀

- [Sequelize 中文文档及 sequelize 模块的一些说明](https://itbilu.com/nodejs/npm/N1yrA4HQW.html)
- 廖雪峰
  - [使用 Sequelize](https://www.liaoxuefeng.com/wiki/1022910821149312/1101571555324224)
  - [建立 Model](https://www.liaoxuefeng.com/wiki/1022910821149312/1102265871746784)

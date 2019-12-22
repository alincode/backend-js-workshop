# 安裝 & 初始化

```
npm init -y
npm install sequelize -S
npm install mysql2 -S

# npm install --save sqlite3
npm install sequelize-cli -g
sequelize init
```

```
.
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
├── package-lock.json
└── seeders
```

- <https://github.com/sequelize/cli>

## 常用指令

```
# 新增資料庫
sequelize db:create

# 執行 migrate
sequelize db:migrate

# 還原 migrate
sequelize db:migrate:undo:all

# 新增空白的 migrate 檔案
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

# 新增空白的 seed 檔案
sequelize seed:generate --name data
```

## 所有指令

```
Sequelize CLI [Node: 10.15.0, CLI: 5.5.0, ORM: 5.11.0]

npx sequelize [command]

Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file       [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration  [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file            [aliases: seed:create]

Options:
  --version  Show version number                                         [boolean]
  --help     Show help                                                   [boolean]
```

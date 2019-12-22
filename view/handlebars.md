# handlebars.js 語法

- <https://github.com/koajs/koa-hbs/tree/next>
- handlebars.js: <https://handlebarsjs.com/>
- <https://www.npmjs.com/package/faker>

```
npm init -y
npm i koa -S

# 一定要安裝 next 版本的才支援 koa 2.x
npm i koa-hbs@next -S
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <h2>{{ title }},</h2>
    <h3>1. {{ user.firstName }} {{ user.lastName }}</h3>

    {{#with user}} 2. {{firstName}} {{lastName}} {{/with}}

    <div class="entry">
      {{#if display}}
      <h3>3. {{user.firstName}} {{user.lastName}}</h3>
      {{else}}
      <h3>Unknown User</h3>
      {{/if}}
    </div>
  </body>
</html>
```

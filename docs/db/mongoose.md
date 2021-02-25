# Mongoose

<https://www.npmjs.com/package/mongoose>

```
npm install mongoose
```

```js
const mongoose = require('mongoose')
await mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Post = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date,
})

const post = new Post()

// create a comment
post.comments.push({ title: 'My comment' })

await post.save()
```

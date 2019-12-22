# 常見核心模組

```js
const EventEmitter = require('events')
const fs = require('fs')
const http = require('http')
const crypto = require('crypto')

const path = require('path')
const url = require('url')
const querystring = require('querystring')
const util = require('util')
```

- [Events](https://nodejs.org/api/events.html)
- [HTTP](https://nodejs.org/api/http.html)
- [Path](https://nodejs.org/api/path.html)
- [Query String](https://nodejs.org/api/querystring.html)
- [Modules](https://nodejs.org/api/modules.html)
- [Timers](https://nodejs.org/api/timers.html)
- [Util](https://nodejs.org/api/util.html)

### Node 程式是怎麼執行的

```js
// Import events module
var events = require('events')
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter()

// Create an event handler as follows
var connectHandler = function connected() {
  console.log('connection succesful.')

  // Fire the data_received event
  eventEmitter.emit('data_received')
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler)

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
  console.log('data received succesfully.')
})

// Fire the connection event
eventEmitter.emit('connection')

console.log('Program Ended.')
```

輸出的結果

```
connection succesful.
data received succesfully.
Program Ended.
```

```js
var fs = require('fs')

fs.readFile('input.txt', function(err, data) {
  if (err) {
    console.log(err.stack)
    return
  }
  console.log(data.toString())
})
console.log('Program Ended')
```

```
Program Ended
Yiibai Point is giving self learning content
to teach the world in simple and easy way!!!!!
```

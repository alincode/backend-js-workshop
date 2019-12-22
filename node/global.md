# Global Objects

<https://nodejs.org/api/globals.html>

```js
console.log(__dirname)
console.log(__filename)
```

- process
- exports
- module
- require()

## Console

<https://nodejs.org/api/console.html>

> Warning: The global console object's methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the note on process I/O for more information.

```js
console.log('hello world')
// Prints: hello world, to stdout

console.log('hello %s', 'world')
// Prints: hello world, to stdout

console.error(new Error('Whoops, something bad happened'))
// Prints: [Error: Whoops, something bad happened], to stderr

const name = 'Will Robinson'
console.warn(`Danger ${name}! Danger!`)
// Prints: Danger Will Robinson! Danger!, to stderr
```

console.assert(value[, ...message])

```js
console.assert(true, 'does nothing')
// OK
console.assert(false, 'Whoops %s work', "didn't")
// Assertion failed: Whoops didn't work
```

console.dir(obj[, options])

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

```
console.time([label])
console.timeEnd([label])
```

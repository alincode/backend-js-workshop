# 上下文 (Context)

```js
app.use(async (ctx) => {
  ctx // is the Context
  ctx.request // is a Koa Request
  ctx.response // is a Koa Response
})
```

## API

Context specific methods and accessors.

**ctx.req**

Node's request object.

**ctx.res**

Node's response object.

Bypassing Koa's response handling is **not supported**. Avoid using the following node properties:

- res.statusCode
- res.writeHead()
- res.write()
- res.end()

**❗ctx.request**

A Koa Request object.

**❗ctx.response**

A Koa Response object.

**❗ctx.state**

The recommended namespace for passing information through middleware and to your frontend views.

```
ctx.state.user = await User.find(id);
```

**ctx.app**

Application instance reference.

**ctx.app.emit**

Koa applications extend an internal EventEmitter. ctx.app.emit emits an event with a type, defined by the first argument. For each event you can hook up "listeners", which is a function that is called when the event is emitted. Consult the error handling docs for more information.

**ctx.cookies.get(name, [options])**

Get cookie name with options:

signed the cookie requested should be signed
Koa uses the cookies module where options are simply passed.

**ctx.cookies.set(name, value, [options])**

Set cookie name to value with options:

- maxAge a number representing the milliseconds from Date.now() for expiry
- signed sign the cookie value
- expires a Date for cookie expiration
- path cookie path, /' by default
- domain cookie domain
- secure secure cookie
- httpOnly server-accessible cookie, true by default
- overwrite a boolean indicating whether to overwrite previously set cookies of the same name (false by default). If this is true, all cookies set during the same request with the same name (regardless of path or domain) are filtered out of the Set-Cookie header when setting this cookie.

Koa uses the cookies module where options are simply passed.

**❗ctx.throw([status], [msg], [properties])**

Helper method to throw an error with a .status property defaulting to 500 that will allow Koa to respond appropriately. The following combinations are allowed:

```js
ctx.throw(400)
ctx.throw(400, 'name required')
ctx.throw(400, 'name required', { user: user })
```

For example ctx.throw(400, 'name required') is equivalent to:

```js
const err = new Error('name required')
err.status = 400
err.expose = true
throw err
```

Note that these are user-level errors and are flagged with err.expose meaning the messages are appropriate for client responses, which is typically not the case for error messages since you do not want to leak failure details.

You may optionally pass a properties object which is merged into the error as-is, useful for decorating machine-friendly errors which are reported to the requester upstream.

```js
ctx.throw(401, 'access_denied', { user: user })
```

Koa uses http-errors to create errors. status should only be passed as the first parameter.

**ctx.assert(value, [status], [msg], [properties])**

Helper method to throw an error similar to .throw() when !value. Similar to node's assert() method.

```js
ctx.assert(ctx.state.user, 401, 'User not found. Please login!')
```

Koa uses http-assert for assertions.

**ctx.respond**

To bypass Koa's built-in response handling, you may explicitly set ctx.respond = false;. Use this if you want to write to the raw res object instead of letting Koa handle the response for you.

Note that using this is not supported by Koa. This may break intended functionality of Koa middleware and Koa itself. Using this property is considered a hack and is only a convenience to those wishing to use traditional fn(req, res) functions and middleware within Koa.

## 別名 (aliases)

### Request aliases

```
ctx.header
ctx.headers
ctx.method
ctx.method=
ctx.url
ctx.url=
ctx.originalUrl
ctx.origin
ctx.href
ctx.path
ctx.path=
ctx.query
ctx.query=
ctx.querystring
ctx.querystring=
ctx.host
ctx.hostname
ctx.fresh
ctx.stale
ctx.socket
ctx.protocol
ctx.secure
ctx.ip
ctx.ips
ctx.subdomains
ctx.is()
ctx.accepts()
ctx.acceptsEncodings()
ctx.acceptsCharsets()
ctx.acceptsLanguages()
ctx.get()
```

### Response aliases

```
ctx.body
ctx.body=
ctx.status
ctx.status=
ctx.message
ctx.message=
ctx.length=
ctx.length
ctx.type=
ctx.type
ctx.headerSent
ctx.redirect()
ctx.attachment()
ctx.set()
ctx.append()
ctx.remove()
ctx.lastModified=
ctx.etag=
```

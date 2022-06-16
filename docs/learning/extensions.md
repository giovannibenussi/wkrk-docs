---
sidebar_position: 1
---

# Extensions to req and res

`wkrk` offers a few handy methods to allow you to compose responses in an easy
way. Also, we offer you with some new methods to get data from the current
request object.

## Extension to the Response Object

### error

Sets the status code to `500` and sends the provided parameter as the response body.

```js
res.error('There has been an error')
```

It calls [.send](#send) internally, so it follows the same serialization rules.

### get
 
Returns the associated header from the response object:

```js
res.set("Content-Type", "text/png")
res.get("Content-Type") // "text/png"
```

### json

Created a response with the json format and headers:

```js
res.json({ username: "giovannibenussi" });
```

The code above sets the `Content-Type` automatically to `application/json` and
transform que provided parameter to a JSON string.

It will consider any previous state set to the response object:

```js
res.set('x-debug', 'abcdefghijklm')
res.status(200).json({ username: "giovannibenussi" });
```

### redirect

Redirects the request to the specified URL:

```js
res.redirect('https://www.giovannibenussi.com/')
```

The default status code for this method is `307` ([temporary redirect](https://stackoverflow.com/questions/2068418/whats-the-difference-between-a-302-and-a-307-redirect)). However, it also accepts a custom status code as a second parameter:

```js
res.redirect('https://www.giovannibenussi.com/', 308)
```


As opposed to [`Response.redirect`](https://developer.mozilla.org/en-US/docs/Web/API/Response/redirect), it accepts relative paths:

```js
res.redirect('/welcome')
res.redirect('./posts')
res.redirect('../users')
```

### send

Creates a response with the provided parameter as the response body:

```js
res.send('hello world');
```

Parameters are converted to their JSON representation (except for strings) prior returning a response, so you can provide any serializable parameter:

```js
res.send({ hello: 'world' }); // object
res.send([1, 2, 3, 4]); // array 
res.send(1); // number 
```

This method automatically sets the `Content-Type` header if not present depending on its type according to the following rules:

- **string**: `Content-Type` is set to `text/html`.
- **serializable object**: `Content-Type` is set to `application/json`.

### set
 
Sets the associated header for the response object:

```js
res.set("Content-Type", "text/png")
res.get("Content-Type") // "text/png"
```

You can also provide an object to set multiple headers at once:

```js
res.set({
  'Content-Disposition', 'inline; filename="image.png"',
  'Content-Type', 'text/png'
})
```

### status

Sets the response status code:

```js
res.status(200).json({ username: "giovannibenussi" });
```

### statusCode

Returns the status code of the response object:

```js
res.status(500)
res.statusCode // 500
```

### type

Sets the `Content-Type` associated with the provided name, extension, or filename:

```js
res.type("json") // application/json
res.type(".md") // text/markdown
res.type("static/index.html") // text/html
```

Type mapping is provided by the [mime/lite](https://www.npmjs.com/package/mime)
package.

## How Extensions Work

We have custom wrappers for the `req` and `res` objects. We provide methods like
`json` and `send` that generates a native `Response` object so you can return
those in your handlers.

`req` and `res` are instances of `ExtendedRequest` and `ExtendedResponse` from
our library `wkrk-extended`:

```js
req.constructor.class // ExtendedRequest
res.constructor.class // ExtendedResponse
```

In the real world, you'll call methods on this objects that returns a native
`Request` object:

```js
// both return an instance of the native `Response` object
res.json({ username: "giovannibenussi" });
res.send('hello world');
```

This allows you to use this objects in your handlers seamlessly:

```js
export default {
  get(req, res) {
    return res.status(200).json({ name: "Giovanni" });
  },
  post(req, res) {
    return res.status(200).json({ success: true });
  }
};
```


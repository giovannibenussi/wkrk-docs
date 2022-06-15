---
sidebar_position: 1
---

# Extensions to req and res

`wkrk` offers a few handy methods to allow you to compose responses in an easy
way. Also, we offer you with some new methods to get data from the current
request object.

## Extension to the Response Object

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

## How the Extensions Work

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


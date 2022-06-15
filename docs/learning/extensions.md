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

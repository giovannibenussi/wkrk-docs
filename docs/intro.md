---
title: Introduction
sidebar_position: 1
---

# Introduction

👩‍🚒 `wkrk` helps you to build websites using [Cloudflare Workers](https://developers.cloudflare.com/workers) faster.

`wkrk` let's you focus on what's important: your content. Here's how:

- ✍️ Concise, declarative API.
- ⛱ Offers handy helpers like `res.redirect` and `res.status`.
- 🔵 TypeScript first-class support.
- ⚡️ No build tools required, just simple and concise abstractions.

## Fast Track ⏱️

Get started by **creating a new site**.
To get started, call the wkrk function with your route defitions. Let's start with a route that responds to the /users path:

```js title='index.js'
import { wkrk } from "wkrk";
import users from "./api/users";

const routes = { "/users": users };

export default wkrk(routes);
```

Then define a handler for GET requests:

```js
// api/users.js
export default {
  get(req, res) {
    return res.status(200).json({ name: "Giovanni" });
  }
};
```

You can also define everything in a single file:

```js
import { wkrk } from 'wkrk'

const routes = {
  '/users': {
    get(req, res) {
      return res.status(200).json({ name: 'Giovanni' })
    },
  },
}

export default wkrk(routes)
```

## Handling HTTP Methods

You can add the following functions to your routes:

- `get`: Handles `GET` requests.
- `post`: Handles `POST` requests.
- `put`: Handles `PUT` requests.
- `delete`: Handles `DELETE` requests.
- `handler`: Handles all requests that aren't defined by any function above.

You can combine handler with the other functions.  An example of this is shown below:

```js
export default {
  get(req, res) {
    return res.status(200).json({ name: "Giovanni" });
  },
  handler(req, res) {
    return res.status(200).send('I match everything else.');
  }
};
```

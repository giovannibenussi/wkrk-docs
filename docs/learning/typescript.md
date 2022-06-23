---
sidebar_position: 2
---

# TypeScript

`wkrk` offers first-class `TypeScript` support.

## Type Safety for Route Files
If you want type safety for routes, you can use the `WKRKRoute` type:

```js
const route: WKRKRoute = {
  get({ res }) {
    return res.json({ name: "Hello World" });
  }
};
```

You can also provide a type for the `env` object to `WKRKRoute`:

```js
type EnvType = {
  TEST_VARIABLE: string;
};

const route: WKRKRoute<EnvType> = {
  get({ res, env }) {
    return res.json({ name: `Environment variable value: ${env.TEST_VARIABLE}` });
  }
};
```

## Provide Type Definitions for Environment Variables

If you want, you can provide type safety for the envionment variables used in your projects by providing a type variable to the `wkrk` function:

```js
type EnvType = {
  TEST_VARIABLE: string;
};

const routes = wkrk<EnvType>({
  "/test": {
    get({ res, env }) {
      // ✅
      return res.json({ name: `Environment variable value: ${env.TEST_VARIABLE}` });
      // 🚫 Property 'EST_VARIABLE' does not exist on type 'EnvType'. Did you mean 'TEST_VARIABLE'?
      return res.json({ name: `Environment variable value: ${env.EST_VARIABLE}` });
    }
  }
});
```

In the previous example, we specified that the `env` variable has the shape of the `EnvType` type.

You can also provide type definitions on a per-route basis. In this case, we
provide the `WKRKRoute` type. 

```js
const route: WKRKRoute<EnvType> = {
  get({ res, env }) {
    return res.json({ name: `Environment variable value: ${env.TEST_VARIABLE}` });
  }
};
```

By default, and to provide some flexibility, the type of the `env` object is `any`.

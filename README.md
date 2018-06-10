# Redirect

Middleware for Dylan which enables a 301 redirects table.

## Install

`npm install @dylan/redirect`

## Usage

``` js
const dylan = require('dylan');
const redirect = require('@dylan/redirect');
const app = dylan();
app.use(redirect({
  '/foo': '/boo'
}));
```

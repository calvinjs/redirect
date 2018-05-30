# Redirect

Middleware for Dylan which enables a 301 redirects table.

## Install

`npm install @dylanjs/redirect`

## Usage

``` js
const dylan = require('dylan');
const redirect = require('@dylanjs/redirect');
const app = dylan();
app.use(redirect({
  '/foo': '/boo'
}));
```

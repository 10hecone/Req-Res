req-uri is a package to facilitate the use of requests and responses.

## Description

```js
This package facilitates the handling of requests and responses

req-uri 1.0.6 is the stable release.
```

## Installation
  
```js

npm  install  req-uri

```

## Importer

```js
// ES6
import * as req from 'req-uri';
// Commonjs
const req = require('req-uri');
```

## Examples

```js
import { req } from  'req-uri';

const var = new req()
   var.open('https://google.com')
      (await var.get()).<options>
      await var.checkStatus()
      await var.fetchStatus()
```

## Creator

# Hecone
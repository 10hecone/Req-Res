req-uri est un package permettant de faciliter l'utilisation des requetes et des reponses.

## Description

```js
Ce package permet de faciliter la manipulation des requetes et reponses

req-uri 0.1.0 est la version stable.
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

![Hecone](https://media.discordapp.net/attachments/747623504681238528/999718283831947365/unknown.png)
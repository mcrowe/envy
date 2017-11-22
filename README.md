# envy

Typesafe environment variable tools for node.

## Usage

> npm install @mcrowe/envy --save


```js
import envy from '@mcrowe/envy'

const port = envy.int('PORT', 'Port to listen on')
const DB_URL = env.string('DB_URL', 'Database connection URL')
// ...
```

## Development

Install npm modules:

> npm install

Run tests:

> npm test

## Release

Release a new version:

> bin/release.sh

This will publish a new version to npm, as well as push a new tag up to github.

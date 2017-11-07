# Brand Search

Source code for [brand.sh](https://brand.sh/) website.

## Development

Rename `.env.example` to `.env`. Then:

```sh
# install dependencies
$ yarn

# serve with hot reload
$ yarn build:watch
# or
$ yarn dev

# serve with hot reload and inspect webpack dev server
# https://nodejs.org/api/debugger.html#debugger_v8_inspector_integration_for_node_js
$ yarn dev:inspect

# build for production with minification
$ yarn build

# run tests
$ yarn test

# run tests and watch
$ yarn test:watch

# run test coverage report
$ yarn test:coverage
```

### Troubleshooting

* `Module build failed: Error: ENOENT: no such file or directory, scandir`

Rebuild node-sass

```sh
$ npm rebuild node-sass
```

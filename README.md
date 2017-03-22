# [node-protoc-plugin](https://www.npmjs.com/package/protoc-plugin)

Create protoc code-generation plugins easily in nodejs


## installation

`npm i -S protoc-plugin`


## usage

You can checkout the code in the `example/` dir, but here is a quick example:

```js
#! /usr/bin/env node
const protocPlugin = require('protoc-plugin')

protocPlugin(protos => {
  // do stuff here with protos
  // return array like [{name: 'filename', content: 'CONTENTS'}]
})
```

Make sure not to output anything to `stdout` (for example with `console.log`) because protoc uses `stdout`. I use `console.error` to output stuff to the user.

Since it's a promise, you can `throw` or just return `Promise.reject('reason')`, and you can do async stuff with promises.

Once you have made your plugin, save it as `protoc-gen-NAME`, give it executable permissions, then run it like this:

```sh
protoc --plugin=protoc-gen-NAME --NAME_out=generated yourfile.proto
```

If you put it in your path, you don't need the `--plugin=protoc-gen-NAME` part.

> **PRO TIP** - use [npm's `bin`](https://docs.npmjs.com/files/package.json#bin) in your package.json to get your plugin script installed, cross-platform, in the user's path.

## advanced usage

If you need more from the incoming stdin `CodeGeneratorRequest` have a look at `example/protoc-gen-extendedlogger`.

### extensions

I am currently including `google/api/annotations` proto file, so gRPC-annotions will work out of the box (for example see `proto/helloworld.proto`) For any other extensions, you will need to generate the `google-protobuf` representation, and require it before parsing. You can easily generate them with a command like this:

```sh
protoc --js_out=import_style=commonjs,binary:YOURDIR/ -I PROTODIR/ PROTODIR/YOURFILE.proto
```

then require like this:

```js
require('./NAMESPACE_pb')
```

You can see how I have done this with [`google/api/annotations_pb` in `index.js`](https://github.com/konsumer/node-protoc-plugin/blob/master/src/index.js#L6).

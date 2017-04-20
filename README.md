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

## `findCommentByPath`

There is a utility included for finding comments in various places in the protobuf file. It's a lil obtuse, but you can look in [the spec](https://github.com/google/protobuf/blob/master/src/google/protobuf/descriptor.proto#L720-L799) for more info.

Here are some `locationList` addresses I use a lot in protoc plugins:

```
 * [4, m] - message comments
 * [4, m, 2, f] - field comments in message
 * [6, s] - service comments
 * [6, s, 2, r] - rpc comments in service
```

where:

* `m` - the method count in the proto, from index 0
* `f` - the field-count in the method, from index 0
* `s` - the service definition in the proto, from index 0
* `r` - the RPC definition in the service, from index 0

like this:

```proto
// [4, 0] is right here 
message MyMessage {
  // [4, 0, 2, 0] is right here
  int32 field1 = 1;
}

// [6, 0] is right here
service MyService {
  // [6, 0, 2, 0] is here!
  rpc (MyMessage) returns (MyMessage);
}
```

There are more addresses, but you will have to look at the [the spec](https://github.com/google/protobuf/blob/master/src/google/protobuf/descriptor.proto#L720-L799) to figure it out.

### usage

```js
const protocPlugin = require('protoc-plugin')
const findCommentByPath = protocPlugin.findCommentByPath

// output comments for services & messages to stderr
protocPlugin(protos => {
  protos.forEach(proto => {
    proto.serviceList.forEach((service, s) => {
      console.error('SERVICE', service.name, findCommentByPath([6, s], proto.sourceCodeInfo.locationList))
      service.methodList.forEach((rpc, r) => {
        console.error('RPC', rpc.name, findCommentByPath([6, s, 2, r], proto.sourceCodeInfo.locationList))
      })
    })
    proto.messageList.forEach((message, m) => {
      console.error('MESSAGE', message.name, findCommentByPath([4, m], proto.sourceCodeInfo.locationList))
      message.fieldList.forEach((field, f) => {
        console.error('FIELD', field.name, findCommentByPath([4, m, 2, f], proto.sourceCodeInfo.locationList))
      })
    })
  })
  
  // no files written
  return []
})

```


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

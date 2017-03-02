const streamToPromise = require('stream-to-promise')
const tou8 = require('buffer-to-uint8array')
const pluginPb = require('./google/protobuf/compiler/plugin_pb')

// extensions must be required before parsing
require('./google/api/annotations_pb')

const CodeGeneratorRequest = (stdin = process.stdin) => (
  streamToPromise(stdin)
    .then(buffer => pluginPb.CodeGeneratorRequest.deserializeBinary(tou8(buffer)))
)

const CodeGeneratorResponse = (stdout = process.stdout) => (files) => {
  const out = new pluginPb.CodeGeneratorResponse()
  files.forEach((f, i) => {
    const file = new pluginPb.CodeGeneratorResponse.File()
    f.name && file.setName(f.name)
    f.content && file.setContent(f.content)
    f.insertion_point && file.setInsertionPoint(f.insertion_point)
    out.addFile(file)
  })
  stdout.write(new Buffer(out.serializeBinary()))
}

const CodeGeneratorResponseError = (stdout = process.stdout) => (err) => {
  const out = new pluginPb.CodeGeneratorResponse()
  out.setError(err)
  stdout.write(out.serializeBinary())
}

module.exports = { CodeGeneratorRequest, CodeGeneratorResponse, CodeGeneratorResponseError }

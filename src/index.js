const streamToPromise = require('stream-to-promise')
const tou8 = require('buffer-to-uint8array')
const pluginPb = require('./google/protobuf/compiler/plugin_pb')

// extensions must be required before parsing
require('./google/api/annotations_pb')

/**
 * Promise for incoming request, as CodeGeneratorRequest from google-protobuf
 * @param  {stream} stdin Incoming stream, default: process.stdin
 * @return {Promise}      Resolves to CodeGeneratorRequest from google-protobuf
 */
const CodeGeneratorRequest = (stdin = process.stdin) => (
  streamToPromise(stdin)
    .then(buffer => pluginPb.CodeGeneratorRequest.deserializeBinary(tou8(buffer)))
)

/**
 * Promise for outgoing response, as CodeGeneratorResponse from google-protobuf
 * @param  {stream} stdout Outgoing stream, default: process.stdout
 */
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

/**
 * Convenience function for error-handlers
 * @param  {stream} stdout Outgoing stream, default: process.stdout
 * @return {function}     Error-handler that puts error into error-field of CodeGeneratorResponse and sends to stdout
 */
const CodeGeneratorResponseError = (stdout = process.stdout) => (err) => {
  const out = new pluginPb.CodeGeneratorResponse()
  out.setError(err)
  stdout.write(out.serializeBinary())
}

/**
 * Construct a simple protoc plugin from a promise
 * @param  {Function} cb A function that returns a promise or value
 * @return {promise}     Resolves on success
 */
const simplePlugin = (cb) => CodeGeneratorRequest()
  .then(r => {
    const req = r.toObject()
    return req.protoFileList.filter(p => req.fileToGenerateList.indexOf(p.name) !== -1)
  })
  .then(cb)
  .then(CodeGeneratorResponse())
  .catch(CodeGeneratorResponseError())

module.exports = simplePlugin
module.exports.CodeGeneratorRequest = CodeGeneratorRequest
module.exports.CodeGeneratorResponse = CodeGeneratorResponse
module.exports.CodeGeneratorResponseError = CodeGeneratorResponseError

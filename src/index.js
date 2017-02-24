const { google: { protobuf: { compiler: { CodeGeneratorRequest, CodeGeneratorResponse } } } } = require('./plugin_pb.js')

module.exports = {
  CodeGeneratorRequest: CodeGeneratorRequest.decode,
  CodeGeneratorResponse: data => CodeGeneratorResponse.encode(data).finish()
}

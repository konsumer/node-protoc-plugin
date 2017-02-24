/* eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins */
'use strict'

var $protobuf = require('protobufjs')

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util

var $lazyTypes = []

var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

$root.google = (function () {
  var google = {}

  google.protobuf = (function () {
    var protobuf = {}

    protobuf.compiler = (function () {
      var compiler = {}

      compiler.Version = (function () {
        function Version (properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
              this[keys[i]] = properties[keys[i]]
            }
          }
        }

        Version.prototype.major = 0
        Version.prototype.minor = 0
        Version.prototype.patch = 0
        Version.prototype.suffix = ''

        Version.encode = function encode (m, w) {
          if (!w) {
            w = $Writer.create()
          }
          if (m.major !== undefined && m.hasOwnProperty('major')) {
            w.uint32(8).int32(m.major)
          }
          if (m.minor !== undefined && m.hasOwnProperty('minor')) {
            w.uint32(16).int32(m.minor)
          }
          if (m.patch !== undefined && m.hasOwnProperty('patch')) {
            w.uint32(24).int32(m.patch)
          }
          if (m.suffix !== undefined && m.hasOwnProperty('suffix')) {
            w.uint32(34).string(m.suffix)
          }
          return w
        }

        Version.decode = function decode (r, l) {
          if (!(r instanceof $Reader)) { r = $Reader.create(r) }
          var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.compiler.Version()
          while (r.pos < c) {
            var t = r.uint32()
            switch (t >>> 3) {
              case 1:
                m.major = r.int32()
                break
              case 2:
                m.minor = r.int32()
                break
              case 3:
                m.patch = r.int32()
                break
              case 4:
                m.suffix = r.string()
                break
              default:
                r.skipType(t & 7)
                break
            }
          }
          return m
        }

        return Version
      })()

      compiler.CodeGeneratorRequest = (function () {
        function CodeGeneratorRequest (properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
              this[keys[i]] = properties[keys[i]]
            }
          }
        }

        CodeGeneratorRequest.prototype.file_to_generate = $util.emptyArray
        CodeGeneratorRequest.prototype.parameter = ''
        CodeGeneratorRequest.prototype.proto_file = $util.emptyArray
        CodeGeneratorRequest.prototype.compiler_version = null

        var $types = {
          2: 'google.protobuf.FileDescriptorProto',
          3: 'google.protobuf.compiler.Version'
        }; $lazyTypes.push($types)

        CodeGeneratorRequest.encode = function encode (m, w) {
          if (!w) {
            w = $Writer.create()
          }
          if (m.file_to_generate !== undefined && m.hasOwnProperty('file_to_generate')) {
            for (var i = 0; i < m.file_to_generate.length; ++i) {
              w.uint32(10).string(m.file_to_generate[i])
            }
          }
          if (m.parameter !== undefined && m.hasOwnProperty('parameter')) {
            w.uint32(18).string(m.parameter)
          }
          if (m.proto_file !== undefined && m.hasOwnProperty('proto_file')) {
            for (var i = 0; i < m.proto_file.length; ++i) {
              $types[2].encode(m.proto_file[i], w.uint32(122).fork()).ldelim()
            }
          }
          if (m.compiler_version && m.hasOwnProperty('compiler_version')) {
            $types[3].encode(m.compiler_version, w.uint32(26).fork()).ldelim()
          }
          return w
        }

        CodeGeneratorRequest.decode = function decode (r, l) {
          if (!(r instanceof $Reader)) { r = $Reader.create(r) }
          var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.compiler.CodeGeneratorRequest()
          while (r.pos < c) {
            var t = r.uint32()
            switch (t >>> 3) {
              case 1:
                if (!(m.file_to_generate && m.file_to_generate.length)) {
                  m.file_to_generate = []
                }
                m.file_to_generate.push(r.string())
                break
              case 2:
                m.parameter = r.string()
                break
              case 15:
                if (!(m.proto_file && m.proto_file.length)) {
                  m.proto_file = []
                }
                m.proto_file.push($types[2].decode(r, r.uint32()))
                break
              case 3:
                m.compiler_version = $types[3].decode(r, r.uint32())
                break
              default:
                r.skipType(t & 7)
                break
            }
          }
          return m
        }

        return CodeGeneratorRequest
      })()

      compiler.CodeGeneratorResponse = (function () {
        function CodeGeneratorResponse (properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) { this[keys[i]] = properties[keys[i]] }
          }
        }

        CodeGeneratorResponse.prototype.error = ''
        CodeGeneratorResponse.prototype.file = $util.emptyArray

        var $types = {
          1: 'google.protobuf.compiler.CodeGeneratorResponse.File'
        }; $lazyTypes.push($types)

        CodeGeneratorResponse.encode = function encode (m, w) {
          if (!w) {
            w = $Writer.create()
          }
          if (m.error !== undefined && m.hasOwnProperty('error')) { w.uint32(10).string(m.error) }
          if (m.file !== undefined && m.hasOwnProperty('file')) {
            for (var i = 0; i < m.file.length; ++i) {
              $types[1].encode(m.file[i], w.uint32(122).fork()).ldelim()
            }
          }
          return w
        }

        CodeGeneratorResponse.decode = function decode (r, l) {
          if (!(r instanceof $Reader)) {
            r = $Reader.create(r)
          }
          var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.compiler.CodeGeneratorResponse()
          while (r.pos < c) {
            var t = r.uint32()
            switch (t >>> 3) {
              case 1:
                m.error = r.string()
                break
              case 15:
                if (!(m.file && m.file.length)) {
                  m.file = []
                }
                m.file.push($types[1].decode(r, r.uint32()))
                break
              default:
                r.skipType(t & 7)
                break
            }
          }
          return m
        }

        CodeGeneratorResponse.File = (function () {
          function File (properties) {
            if (properties) {
              for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                this[keys[i]] = properties[keys[i]]
              }
            }
          }

          File.prototype.name = ''
          File.prototype.insertion_point = ''
          File.prototype.content = ''

          File.encode = function encode (m, w) {
            if (!w) {
              w = $Writer.create()
            }
            if (m.name !== undefined && m.hasOwnProperty('name')) {
              w.uint32(10).string(m.name)
            }
            if (m.insertion_point !== undefined && m.hasOwnProperty('insertion_point')) {
              w.uint32(18).string(m.insertion_point)
            }
            if (m.content !== undefined && m.hasOwnProperty('content')) {
              w.uint32(122).string(m.content)
            }
            return w
          }

          File.decode = function decode (r, l) {
            if (!(r instanceof $Reader)) {
              r = $Reader.create(r)
            }
            var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.compiler.CodeGeneratorResponse.File()
            while (r.pos < c) {
              var t = r.uint32()
              switch (t >>> 3) {
                case 1:
                  m.name = r.string()
                  break
                case 2:
                  m.insertion_point = r.string()
                  break
                case 15:
                  m.content = r.string()
                  break
                default:
                  r.skipType(t & 7)
                  break
              }
            }
            return m
          }

          return File
        })()

        return CodeGeneratorResponse
      })()

      return compiler
    })()

    protobuf.FileDescriptorSet = (function () {
      function FileDescriptorSet (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      FileDescriptorSet.prototype.file = $util.emptyArray

      var $types = {
        0: 'google.protobuf.FileDescriptorProto'
      }; $lazyTypes.push($types)

      FileDescriptorSet.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.file !== undefined && m.hasOwnProperty('file')) {
          for (var i = 0; i < m.file.length; ++i) {
            $types[0].encode(m.file[i], w.uint32(10).fork()).ldelim()
          }
        }
        return w
      }

      FileDescriptorSet.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.FileDescriptorSet()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              if (!(m.file && m.file.length)) {
                m.file = []
              }
              m.file.push($types[0].decode(r, r.uint32()))
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return FileDescriptorSet
    })()

    protobuf.FileDescriptorProto = (function () {
      function FileDescriptorProto (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      FileDescriptorProto.prototype.name = ''
      FileDescriptorProto.prototype['package'] = ''
      FileDescriptorProto.prototype.dependency = $util.emptyArray
      FileDescriptorProto.prototype.public_dependency = $util.emptyArray
      FileDescriptorProto.prototype.weak_dependency = $util.emptyArray
      FileDescriptorProto.prototype.message_type = $util.emptyArray
      FileDescriptorProto.prototype.enum_type = $util.emptyArray
      FileDescriptorProto.prototype.service = $util.emptyArray
      FileDescriptorProto.prototype.extension = $util.emptyArray
      FileDescriptorProto.prototype.options = null
      FileDescriptorProto.prototype.source_code_info = null
      FileDescriptorProto.prototype.syntax = ''

      var $types = {
        5: 'google.protobuf.DescriptorProto',
        6: 'google.protobuf.EnumDescriptorProto',
        7: 'google.protobuf.ServiceDescriptorProto',
        8: 'google.protobuf.FieldDescriptorProto',
        9: 'google.protobuf.FileOptions',
        10: 'google.protobuf.SourceCodeInfo'
      }; $lazyTypes.push($types)

      FileDescriptorProto.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.name !== undefined && m.hasOwnProperty('name')) {
          w.uint32(10).string(m.name)
        }
        if (m['package'] !== undefined && m.hasOwnProperty('package')) {
          w.uint32(18).string(m['package'])
        }
        if (m.dependency !== undefined && m.hasOwnProperty('dependency')) {
          for (var i = 0; i < m.dependency.length; ++i) {
            w.uint32(26).string(m.dependency[i])
          }
        }
        if (m.public_dependency !== undefined && m.hasOwnProperty('public_dependency')) {
          for (var i = 0; i < m.public_dependency.length; ++i) { w.uint32(80).int32(m.public_dependency[i]) }
        }
        if (m.weak_dependency !== undefined && m.hasOwnProperty('weak_dependency')) {
          for (var i = 0; i < m.weak_dependency.length; ++i) {
            w.uint32(88).int32(m.weak_dependency[i])
          }
        }
        if (m.message_type !== undefined && m.hasOwnProperty('message_type')) {
          for (var i = 0; i < m.message_type.length; ++i) {
            $types[5].encode(m.message_type[i], w.uint32(34).fork()).ldelim()
          }
        }
        if (m.enum_type !== undefined && m.hasOwnProperty('enum_type')) {
          for (var i = 0; i < m.enum_type.length; ++i) {
            $types[6].encode(m.enum_type[i], w.uint32(42).fork()).ldelim()
          }
        }
        if (m.service !== undefined && m.hasOwnProperty('service')) {
          for (var i = 0; i < m.service.length; ++i) {
            $types[7].encode(m.service[i], w.uint32(50).fork()).ldelim()
          }
        }
        if (m.extension !== undefined && m.hasOwnProperty('extension')) {
          for (var i = 0; i < m.extension.length; ++i) {
            $types[8].encode(m.extension[i], w.uint32(58).fork()).ldelim()
          }
        }
        if (m.options && m.hasOwnProperty('options')) { $types[9].encode(m.options, w.uint32(66).fork()).ldelim() }
        if (m.source_code_info && m.hasOwnProperty('source_code_info')) {
          $types[10].encode(m.source_code_info, w.uint32(74).fork()).ldelim()
        }
        if (m.syntax !== undefined && m.hasOwnProperty('syntax')) {
          w.uint32(98).string(m.syntax)
        }
        return w
      }

      FileDescriptorProto.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.FileDescriptorProto()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.name = r.string()
              break
            case 2:
              m['package'] = r.string()
              break
            case 3:
              if (!(m.dependency && m.dependency.length)) { m.dependency = [] }
              m.dependency.push(r.string())
              break
            case 10:
              if (!(m.public_dependency && m.public_dependency.length)) {
                m.public_dependency = []
              }
              if ((t & 7) === 2) {
                var c2 = r.uint32() + r.pos
                while (r.pos < c2) {
                  m.public_dependency.push(r.int32())
                }
              } else {
                m.public_dependency.push(r.int32())
              }
              break
            case 11:
              if (!(m.weak_dependency && m.weak_dependency.length)) {
                m.weak_dependency = []
              }
              if ((t & 7) === 2) {
                var c2 = r.uint32() + r.pos
                while (r.pos < c2) {
                  m.weak_dependency.push(r.int32())
                }
              } else { m.weak_dependency.push(r.int32()) }
              break
            case 4:
              if (!(m.message_type && m.message_type.length)) { m.message_type = [] }
              m.message_type.push($types[5].decode(r, r.uint32()))
              break
            case 5:
              if (!(m.enum_type && m.enum_type.length)) { m.enum_type = [] }
              m.enum_type.push($types[6].decode(r, r.uint32()))
              break
            case 6:
              if (!(m.service && m.service.length)) {
                m.service = []
              }
              m.service.push($types[7].decode(r, r.uint32()))
              break
            case 7:
              if (!(m.extension && m.extension.length)) {
                m.extension = []
              }
              m.extension.push($types[8].decode(r, r.uint32()))
              break
            case 8:
              m.options = $types[9].decode(r, r.uint32())
              break
            case 9:
              m.source_code_info = $types[10].decode(r, r.uint32())
              break
            case 12:
              m.syntax = r.string()
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return FileDescriptorProto
    })()

    protobuf.DescriptorProto = (function () {
      function DescriptorProto (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      DescriptorProto.prototype.name = ''
      DescriptorProto.prototype.field = $util.emptyArray
      DescriptorProto.prototype.extension = $util.emptyArray
      DescriptorProto.prototype.nested_type = $util.emptyArray
      DescriptorProto.prototype.enum_type = $util.emptyArray
      DescriptorProto.prototype.extension_range = $util.emptyArray
      DescriptorProto.prototype.oneof_decl = $util.emptyArray
      DescriptorProto.prototype.options = null
      DescriptorProto.prototype.reserved_range = $util.emptyArray
      DescriptorProto.prototype.reserved_name = $util.emptyArray

      var $types = {
        1: 'google.protobuf.FieldDescriptorProto',
        2: 'google.protobuf.FieldDescriptorProto',
        3: 'google.protobuf.DescriptorProto',
        4: 'google.protobuf.EnumDescriptorProto',
        5: 'google.protobuf.DescriptorProto.ExtensionRange',
        6: 'google.protobuf.OneofDescriptorProto',
        7: 'google.protobuf.MessageOptions',
        8: 'google.protobuf.DescriptorProto.ReservedRange'
      }; $lazyTypes.push($types)

      DescriptorProto.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.name !== undefined && m.hasOwnProperty('name')) {
          w.uint32(10).string(m.name)
        }
        if (m.field !== undefined && m.hasOwnProperty('field')) {
          for (var i = 0; i < m.field.length; ++i) {
            $types[1].encode(m.field[i], w.uint32(18).fork()).ldelim()
          }
        }
        if (m.extension !== undefined && m.hasOwnProperty('extension')) {
          for (var i = 0; i < m.extension.length; ++i) {
            $types[2].encode(m.extension[i], w.uint32(50).fork()).ldelim()
          }
        }
        if (m.nested_type !== undefined && m.hasOwnProperty('nested_type')) {
          for (var i = 0; i < m.nested_type.length; ++i) {
            $types[3].encode(m.nested_type[i], w.uint32(26).fork()).ldelim()
          }
        }
        if (m.enum_type !== undefined && m.hasOwnProperty('enum_type')) {
          for (var i = 0; i < m.enum_type.length; ++i) {
            $types[4].encode(m.enum_type[i], w.uint32(34).fork()).ldelim()
          }
        }
        if (m.extension_range !== undefined && m.hasOwnProperty('extension_range')) {
          for (var i = 0; i < m.extension_range.length; ++i) {
            $types[5].encode(m.extension_range[i], w.uint32(42).fork()).ldelim()
          }
        }
        if (m.oneof_decl !== undefined && m.hasOwnProperty('oneof_decl')) {
          for (var i = 0; i < m.oneof_decl.length; ++i) { $types[6].encode(m.oneof_decl[i], w.uint32(66).fork()).ldelim() }
        }
        if (m.options && m.hasOwnProperty('options')) {
          $types[7].encode(m.options, w.uint32(58).fork()).ldelim()
        }
        if (m.reserved_range !== undefined && m.hasOwnProperty('reserved_range')) {
          for (var i = 0; i < m.reserved_range.length; ++i) { $types[8].encode(m.reserved_range[i], w.uint32(74).fork()).ldelim() }
        }
        if (m.reserved_name !== undefined && m.hasOwnProperty('reserved_name')) {
          for (var i = 0; i < m.reserved_name.length; ++i) { w.uint32(82).string(m.reserved_name[i]) }
        }
        return w
      }

      DescriptorProto.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.DescriptorProto()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.name = r.string()
              break
            case 2:
              if (!(m.field && m.field.length)) { m.field = [] }
              m.field.push($types[1].decode(r, r.uint32()))
              break
            case 6:
              if (!(m.extension && m.extension.length)) {
                m.extension = []
              }
              m.extension.push($types[2].decode(r, r.uint32()))
              break
            case 3:
              if (!(m.nested_type && m.nested_type.length)) {
                m.nested_type = []
              }
              m.nested_type.push($types[3].decode(r, r.uint32()))
              break
            case 4:
              if (!(m.enum_type && m.enum_type.length)) {
                m.enum_type = []
              }
              m.enum_type.push($types[4].decode(r, r.uint32()))
              break
            case 5:
              if (!(m.extension_range && m.extension_range.length)) {
                m.extension_range = []
              }
              m.extension_range.push($types[5].decode(r, r.uint32()))
              break
            case 8:
              if (!(m.oneof_decl && m.oneof_decl.length)) { m.oneof_decl = [] }
              m.oneof_decl.push($types[6].decode(r, r.uint32()))
              break
            case 7:
              m.options = $types[7].decode(r, r.uint32())
              break
            case 9:
              if (!(m.reserved_range && m.reserved_range.length)) {
                m.reserved_range = []
              }
              m.reserved_range.push($types[8].decode(r, r.uint32()))
              break
            case 10:
              if (!(m.reserved_name && m.reserved_name.length)) {
                m.reserved_name = []
              }
              m.reserved_name.push(r.string())
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      DescriptorProto.ExtensionRange = (function () {
        function ExtensionRange (properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
              this[keys[i]] = properties[keys[i]]
            }
          }
        }

        ExtensionRange.prototype.start = 0
        ExtensionRange.prototype.end = 0

        ExtensionRange.encode = function encode (m, w) {
          if (!w) {
            w = $Writer.create()
          }
          if (m.start !== undefined && m.hasOwnProperty('start')) {
            w.uint32(8).int32(m.start)
          }
          if (m.end !== undefined && m.hasOwnProperty('end')) {
            w.uint32(16).int32(m.end)
          }
          return w
        }

        ExtensionRange.decode = function decode (r, l) {
          if (!(r instanceof $Reader)) {
            r = $Reader.create(r)
          }
          var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.DescriptorProto.ExtensionRange()
          while (r.pos < c) {
            var t = r.uint32()
            switch (t >>> 3) {
              case 1:
                m.start = r.int32()
                break
              case 2:
                m.end = r.int32()
                break
              default:
                r.skipType(t & 7)
                break
            }
          }
          return m
        }

        return ExtensionRange
      })()

      DescriptorProto.ReservedRange = (function () {
        function ReservedRange (properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
              this[keys[i]] = properties[keys[i]]
            }
          }
        }

        ReservedRange.prototype.start = 0
        ReservedRange.prototype.end = 0

        ReservedRange.encode = function encode (m, w) {
          if (!w) { w = $Writer.create() }
          if (m.start !== undefined && m.hasOwnProperty('start')) {
            w.uint32(8).int32(m.start)
          }
          if (m.end !== undefined && m.hasOwnProperty('end')) { w.uint32(16).int32(m.end) }
          return w
        }

        ReservedRange.decode = function decode (r, l) {
          if (!(r instanceof $Reader)) {
            r = $Reader.create(r)
          }
          var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.DescriptorProto.ReservedRange()
          while (r.pos < c) {
            var t = r.uint32()
            switch (t >>> 3) {
              case 1:
                m.start = r.int32()
                break
              case 2:
                m.end = r.int32()
                break
              default:
                r.skipType(t & 7)
                break
            }
          }
          return m
        }

        return ReservedRange
      })()

      return DescriptorProto
    })()

    protobuf.FieldDescriptorProto = (function () {
      function FieldDescriptorProto (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      FieldDescriptorProto.prototype.name = ''
      FieldDescriptorProto.prototype.number = 0
      FieldDescriptorProto.prototype.label = 1
      FieldDescriptorProto.prototype.type = 1
      FieldDescriptorProto.prototype.type_name = ''
      FieldDescriptorProto.prototype.extendee = ''
      FieldDescriptorProto.prototype.default_value = ''
      FieldDescriptorProto.prototype.oneof_index = 0
      FieldDescriptorProto.prototype.json_name = ''
      FieldDescriptorProto.prototype.options = null

      var $types = {
        2: 'google.protobuf.FieldDescriptorProto.Label',
        3: 'google.protobuf.FieldDescriptorProto.Type',
        9: 'google.protobuf.FieldOptions'
      }; $lazyTypes.push($types)

      FieldDescriptorProto.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.name !== undefined && m.hasOwnProperty('name')) {
          w.uint32(10).string(m.name)
        }
        if (m.number !== undefined && m.hasOwnProperty('number')) { w.uint32(24).int32(m.number) }
        if (m.label !== undefined && m.hasOwnProperty('label')) { w.uint32(32).uint32(m.label) }
        if (m.type !== undefined && m.hasOwnProperty('type')) { w.uint32(40).uint32(m.type) }
        if (m.type_name !== undefined && m.hasOwnProperty('type_name')) {
          w.uint32(50).string(m.type_name)
        }
        if (m.extendee !== undefined && m.hasOwnProperty('extendee')) {
          w.uint32(18).string(m.extendee)
        }
        if (m.default_value !== undefined && m.hasOwnProperty('default_value')) {
          w.uint32(58).string(m.default_value)
        }
        if (m.oneof_index !== undefined && m.hasOwnProperty('oneof_index')) { w.uint32(72).int32(m.oneof_index) }
        if (m.json_name !== undefined && m.hasOwnProperty('json_name')) { w.uint32(82).string(m.json_name) }
        if (m.options && m.hasOwnProperty('options')) {
          $types[9].encode(m.options, w.uint32(66).fork()).ldelim()
        }
        return w
      }

      FieldDescriptorProto.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.FieldDescriptorProto()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.name = r.string()
              break
            case 3:
              m.number = r.int32()
              break
            case 4:
              m.label = r.uint32()
              break
            case 5:
              m.type = r.uint32()
              break
            case 6:
              m.type_name = r.string()
              break
            case 2:
              m.extendee = r.string()
              break
            case 7:
              m.default_value = r.string()
              break
            case 9:
              m.oneof_index = r.int32()
              break
            case 10:
              m.json_name = r.string()
              break
            case 8:
              m.options = $types[9].decode(r, r.uint32())
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      FieldDescriptorProto.Type = (function () {
        var valuesById = {}, values = Object.create(valuesById)
        values[valuesById[1] = 'TYPE_DOUBLE'] = 1
        values[valuesById[2] = 'TYPE_FLOAT'] = 2
        values[valuesById[3] = 'TYPE_INT64'] = 3
        values[valuesById[4] = 'TYPE_UINT64'] = 4
        values[valuesById[5] = 'TYPE_INT32'] = 5
        values[valuesById[6] = 'TYPE_FIXED64'] = 6
        values[valuesById[7] = 'TYPE_FIXED32'] = 7
        values[valuesById[8] = 'TYPE_BOOL'] = 8
        values[valuesById[9] = 'TYPE_STRING'] = 9
        values[valuesById[10] = 'TYPE_GROUP'] = 10
        values[valuesById[11] = 'TYPE_MESSAGE'] = 11
        values[valuesById[12] = 'TYPE_BYTES'] = 12
        values[valuesById[13] = 'TYPE_UINT32'] = 13
        values[valuesById[14] = 'TYPE_ENUM'] = 14
        values[valuesById[15] = 'TYPE_SFIXED32'] = 15
        values[valuesById[16] = 'TYPE_SFIXED64'] = 16
        values[valuesById[17] = 'TYPE_SINT32'] = 17
        values[valuesById[18] = 'TYPE_SINT64'] = 18
        return values
      })()

      FieldDescriptorProto.Label = (function () {
        var valuesById = {}, values = Object.create(valuesById)
        values[valuesById[1] = 'LABEL_OPTIONAL'] = 1
        values[valuesById[2] = 'LABEL_REQUIRED'] = 2
        values[valuesById[3] = 'LABEL_REPEATED'] = 3
        return values
      })()

      return FieldDescriptorProto
    })()

    protobuf.OneofDescriptorProto = (function () {
      function OneofDescriptorProto (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      OneofDescriptorProto.prototype.name = ''
      OneofDescriptorProto.prototype.options = null

      var $types = {
        1: 'google.protobuf.OneofOptions'
      }; $lazyTypes.push($types)

      OneofDescriptorProto.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.name !== undefined && m.hasOwnProperty('name')) {
          w.uint32(10).string(m.name)
        }
        if (m.options && m.hasOwnProperty('options')) {
          $types[1].encode(m.options, w.uint32(18).fork()).ldelim()
        }
        return w
      }

      OneofDescriptorProto.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.OneofDescriptorProto()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.name = r.string()
              break
            case 2:
              m.options = $types[1].decode(r, r.uint32())
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return OneofDescriptorProto
    })()

    protobuf.EnumDescriptorProto = (function () {
      function EnumDescriptorProto (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) { this[keys[i]] = properties[keys[i]] }
        }
      }

      EnumDescriptorProto.prototype.name = ''
      EnumDescriptorProto.prototype.value = $util.emptyArray
      EnumDescriptorProto.prototype.options = null

      var $types = {
        1: 'google.protobuf.EnumValueDescriptorProto',
        2: 'google.protobuf.EnumOptions'
      }; $lazyTypes.push($types)

      EnumDescriptorProto.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.name !== undefined && m.hasOwnProperty('name')) {
          w.uint32(10).string(m.name)
        }
        if (m.value !== undefined && m.hasOwnProperty('value')) {
          for (var i = 0; i < m.value.length; ++i) {
            $types[1].encode(m.value[i], w.uint32(18).fork()).ldelim()
          }
        }
        if (m.options && m.hasOwnProperty('options')) {
          $types[2].encode(m.options, w.uint32(26).fork()).ldelim()
        }
        return w
      }

      EnumDescriptorProto.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.EnumDescriptorProto()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.name = r.string()
              break
            case 2:
              if (!(m.value && m.value.length)) { m.value = [] }
              m.value.push($types[1].decode(r, r.uint32()))
              break
            case 3:
              m.options = $types[2].decode(r, r.uint32())
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return EnumDescriptorProto
    })()

    protobuf.EnumValueDescriptorProto = (function () {
      function EnumValueDescriptorProto (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) { this[keys[i]] = properties[keys[i]] }
        }
      }

      EnumValueDescriptorProto.prototype.name = ''
      EnumValueDescriptorProto.prototype.number = 0
      EnumValueDescriptorProto.prototype.options = null

      var $types = {
        2: 'google.protobuf.EnumValueOptions'
      }; $lazyTypes.push($types)

      EnumValueDescriptorProto.encode = function encode (m, w) {
        if (!w) { w = $Writer.create() }
        if (m.name !== undefined && m.hasOwnProperty('name')) { w.uint32(10).string(m.name) }
        if (m.number !== undefined && m.hasOwnProperty('number')) {
          w.uint32(16).int32(m.number)
        }
        if (m.options && m.hasOwnProperty('options')) {
          $types[2].encode(m.options, w.uint32(26).fork()).ldelim()
        }
        return w
      }

      EnumValueDescriptorProto.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.EnumValueDescriptorProto()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.name = r.string()
              break
            case 2:
              m.number = r.int32()
              break
            case 3:
              m.options = $types[2].decode(r, r.uint32())
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return EnumValueDescriptorProto
    })()

    protobuf.ServiceDescriptorProto = (function () {
      function ServiceDescriptorProto (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      ServiceDescriptorProto.prototype.name = ''
      ServiceDescriptorProto.prototype.method = $util.emptyArray
      ServiceDescriptorProto.prototype.options = null

      var $types = {
        1: 'google.protobuf.MethodDescriptorProto',
        2: 'google.protobuf.ServiceOptions'
      }; $lazyTypes.push($types)

      ServiceDescriptorProto.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.name !== undefined && m.hasOwnProperty('name')) {
          w.uint32(10).string(m.name)
        }
        if (m.method !== undefined && m.hasOwnProperty('method')) {
          for (var i = 0; i < m.method.length; ++i) {
            $types[1].encode(m.method[i], w.uint32(18).fork()).ldelim()
          }
        }
        if (m.options && m.hasOwnProperty('options')) { $types[2].encode(m.options, w.uint32(26).fork()).ldelim() }
        return w
      }

      ServiceDescriptorProto.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) { r = $Reader.create(r) }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.ServiceDescriptorProto()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.name = r.string()
              break
            case 2:
              if (!(m.method && m.method.length)) {
                m.method = []
              }
              m.method.push($types[1].decode(r, r.uint32()))
              break
            case 3:
              m.options = $types[2].decode(r, r.uint32())
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return ServiceDescriptorProto
    })()

    protobuf.MethodDescriptorProto = (function () {
      function MethodDescriptorProto (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      MethodDescriptorProto.prototype.name = ''
      MethodDescriptorProto.prototype.input_type = ''
      MethodDescriptorProto.prototype.output_type = ''
      MethodDescriptorProto.prototype.options = null
      MethodDescriptorProto.prototype.client_streaming = false
      MethodDescriptorProto.prototype.server_streaming = false

      var $types = {
        3: 'google.protobuf.MethodOptions'
      }; $lazyTypes.push($types)

      MethodDescriptorProto.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.name !== undefined && m.hasOwnProperty('name')) {
          w.uint32(10).string(m.name)
        }
        if (m.input_type !== undefined && m.hasOwnProperty('input_type')) { w.uint32(18).string(m.input_type) }
        if (m.output_type !== undefined && m.hasOwnProperty('output_type')) { w.uint32(26).string(m.output_type) }
        if (m.options && m.hasOwnProperty('options')) { $types[3].encode(m.options, w.uint32(34).fork()).ldelim() }
        if (m.client_streaming !== undefined && m.hasOwnProperty('client_streaming')) {
          w.uint32(40).bool(m.client_streaming)
        }
        if (m.server_streaming !== undefined && m.hasOwnProperty('server_streaming')) {
          w.uint32(48).bool(m.server_streaming)
        }
        return w
      }

      MethodDescriptorProto.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.MethodDescriptorProto()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.name = r.string()
              break
            case 2:
              m.input_type = r.string()
              break
            case 3:
              m.output_type = r.string()
              break
            case 4:
              m.options = $types[3].decode(r, r.uint32())
              break
            case 5:
              m.client_streaming = r.bool()
              break
            case 6:
              m.server_streaming = r.bool()
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return MethodDescriptorProto
    })()

    protobuf.FileOptions = (function () {
      function FileOptions (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      FileOptions.prototype.java_package = ''
      FileOptions.prototype.java_outer_classname = ''
      FileOptions.prototype.java_multiple_files = false
      FileOptions.prototype.java_generate_equals_and_hash = false
      FileOptions.prototype.java_string_check_utf8 = false
      FileOptions.prototype.optimize_for = 1
      FileOptions.prototype.go_package = ''
      FileOptions.prototype.cc_generic_services = false
      FileOptions.prototype.java_generic_services = false
      FileOptions.prototype.py_generic_services = false
      FileOptions.prototype.deprecated = false
      FileOptions.prototype.cc_enable_arenas = false
      FileOptions.prototype.objc_class_prefix = ''
      FileOptions.prototype.csharp_namespace = ''
      FileOptions.prototype.swift_prefix = ''
      FileOptions.prototype.uninterpreted_option = $util.emptyArray

      var $types = {
        5: 'google.protobuf.FileOptions.OptimizeMode',
        15: 'google.protobuf.UninterpretedOption'
      }; $lazyTypes.push($types)

      FileOptions.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.java_package !== undefined && m.hasOwnProperty('java_package')) {
          w.uint32(10).string(m.java_package)
        }
        if (m.java_outer_classname !== undefined && m.hasOwnProperty('java_outer_classname')) { w.uint32(66).string(m.java_outer_classname) }
        if (m.java_multiple_files !== undefined && m.hasOwnProperty('java_multiple_files')) {
          w.uint32(80).bool(m.java_multiple_files)
        }
        if (m.java_generate_equals_and_hash !== undefined && m.hasOwnProperty('java_generate_equals_and_hash')) {
          w.uint32(160).bool(m.java_generate_equals_and_hash)
        }
        if (m.java_string_check_utf8 !== undefined && m.hasOwnProperty('java_string_check_utf8')) {
          w.uint32(216).bool(m.java_string_check_utf8)
        }
        if (m.optimize_for !== undefined && m.hasOwnProperty('optimize_for')) {
          w.uint32(72).uint32(m.optimize_for)
        }
        if (m.go_package !== undefined && m.hasOwnProperty('go_package')) {
          w.uint32(90).string(m.go_package)
        }
        if (m.cc_generic_services !== undefined && m.hasOwnProperty('cc_generic_services')) {
          w.uint32(128).bool(m.cc_generic_services)
        }
        if (m.java_generic_services !== undefined && m.hasOwnProperty('java_generic_services')) {
          w.uint32(136).bool(m.java_generic_services)
        }
        if (m.py_generic_services !== undefined && m.hasOwnProperty('py_generic_services')) {
          w.uint32(144).bool(m.py_generic_services)
        }
        if (m.deprecated !== undefined && m.hasOwnProperty('deprecated')) {
          w.uint32(184).bool(m.deprecated)
        }
        if (m.cc_enable_arenas !== undefined && m.hasOwnProperty('cc_enable_arenas')) {
          w.uint32(248).bool(m.cc_enable_arenas)
        }
        if (m.objc_class_prefix !== undefined && m.hasOwnProperty('objc_class_prefix')) { w.uint32(290).string(m.objc_class_prefix) }
        if (m.csharp_namespace !== undefined && m.hasOwnProperty('csharp_namespace')) {
          w.uint32(298).string(m.csharp_namespace)
        }
        if (m.swift_prefix !== undefined && m.hasOwnProperty('swift_prefix')) {
          w.uint32(314).string(m.swift_prefix)
        }
        if (m.uninterpreted_option !== undefined && m.hasOwnProperty('uninterpreted_option')) {
          for (var i = 0; i < m.uninterpreted_option.length; ++i) {
            $types[15].encode(m.uninterpreted_option[i], w.uint32(7994).fork()).ldelim()
          }
        }
        return w
      }

      FileOptions.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.FileOptions()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.java_package = r.string()
              break
            case 8:
              m.java_outer_classname = r.string()
              break
            case 10:
              m.java_multiple_files = r.bool()
              break
            case 20:
              m.java_generate_equals_and_hash = r.bool()
              break
            case 27:
              m.java_string_check_utf8 = r.bool()
              break
            case 9:
              m.optimize_for = r.uint32()
              break
            case 11:
              m.go_package = r.string()
              break
            case 16:
              m.cc_generic_services = r.bool()
              break
            case 17:
              m.java_generic_services = r.bool()
              break
            case 18:
              m.py_generic_services = r.bool()
              break
            case 23:
              m.deprecated = r.bool()
              break
            case 31:
              m.cc_enable_arenas = r.bool()
              break
            case 36:
              m.objc_class_prefix = r.string()
              break
            case 37:
              m.csharp_namespace = r.string()
              break
            case 39:
              m.swift_prefix = r.string()
              break
            case 999:
              if (!(m.uninterpreted_option && m.uninterpreted_option.length)) {
                m.uninterpreted_option = []
              }
              m.uninterpreted_option.push($types[15].decode(r, r.uint32()))
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      FileOptions.OptimizeMode = (function () {
        var valuesById = {}, values = Object.create(valuesById)
        values[valuesById[1] = 'SPEED'] = 1
        values[valuesById[2] = 'CODE_SIZE'] = 2
        values[valuesById[3] = 'LITE_RUNTIME'] = 3
        return values
      })()

      return FileOptions
    })()

    protobuf.MessageOptions = (function () {
      function MessageOptions (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      MessageOptions.prototype.message_set_wire_format = false
      MessageOptions.prototype.no_standard_descriptor_accessor = false
      MessageOptions.prototype.deprecated = false
      MessageOptions.prototype.map_entry = false
      MessageOptions.prototype.uninterpreted_option = $util.emptyArray

      var $types = {
        4: 'google.protobuf.UninterpretedOption'
      }; $lazyTypes.push($types)

      MessageOptions.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.message_set_wire_format !== undefined && m.hasOwnProperty('message_set_wire_format')) {
          w.uint32(8).bool(m.message_set_wire_format)
        }
        if (m.no_standard_descriptor_accessor !== undefined && m.hasOwnProperty('no_standard_descriptor_accessor')) {
          w.uint32(16).bool(m.no_standard_descriptor_accessor)
        }
        if (m.deprecated !== undefined && m.hasOwnProperty('deprecated')) { w.uint32(24).bool(m.deprecated) }
        if (m.map_entry !== undefined && m.hasOwnProperty('map_entry')) {
          w.uint32(56).bool(m.map_entry)
        }
        if (m.uninterpreted_option !== undefined && m.hasOwnProperty('uninterpreted_option')) {
          for (var i = 0; i < m.uninterpreted_option.length; ++i) {
            $types[4].encode(m.uninterpreted_option[i], w.uint32(7994).fork()).ldelim()
          }
        }
        return w
      }

      MessageOptions.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) { r = $Reader.create(r) }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.MessageOptions()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.message_set_wire_format = r.bool()
              break
            case 2:
              m.no_standard_descriptor_accessor = r.bool()
              break
            case 3:
              m.deprecated = r.bool()
              break
            case 7:
              m.map_entry = r.bool()
              break
            case 999:
              if (!(m.uninterpreted_option && m.uninterpreted_option.length)) {
                m.uninterpreted_option = []
              }
              m.uninterpreted_option.push($types[4].decode(r, r.uint32()))
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return MessageOptions
    })()

    protobuf.FieldOptions = (function () {
      function FieldOptions (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      FieldOptions.prototype.ctype = 0
      FieldOptions.prototype.packed = false
      FieldOptions.prototype.jstype = 0
      FieldOptions.prototype.lazy = false
      FieldOptions.prototype.deprecated = false
      FieldOptions.prototype.weak = false
      FieldOptions.prototype.uninterpreted_option = $util.emptyArray

      var $types = {
        0: 'google.protobuf.FieldOptions.CType',
        2: 'google.protobuf.FieldOptions.JSType',
        6: 'google.protobuf.UninterpretedOption'
      }; $lazyTypes.push($types)

      FieldOptions.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.ctype !== undefined && m.hasOwnProperty('ctype')) {
          w.uint32(8).uint32(m.ctype)
        }
        if (m.packed !== undefined && m.hasOwnProperty('packed')) {
          w.uint32(16).bool(m.packed)
        }
        if (m.jstype !== undefined && m.hasOwnProperty('jstype')) {
          w.uint32(48).uint32(m.jstype)
        }
        if (m.lazy !== undefined && m.hasOwnProperty('lazy')) {
          w.uint32(40).bool(m.lazy)
        }
        if (m.deprecated !== undefined && m.hasOwnProperty('deprecated')) { w.uint32(24).bool(m.deprecated) }
        if (m.weak !== undefined && m.hasOwnProperty('weak')) {
          w.uint32(80).bool(m.weak)
        }
        if (m.uninterpreted_option !== undefined && m.hasOwnProperty('uninterpreted_option')) {
          for (var i = 0; i < m.uninterpreted_option.length; ++i) {
            $types[6].encode(m.uninterpreted_option[i], w.uint32(7994).fork()).ldelim()
          }
        }
        return w
      }

      FieldOptions.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.FieldOptions()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.ctype = r.uint32()
              break
            case 2:
              m.packed = r.bool()
              break
            case 6:
              m.jstype = r.uint32()
              break
            case 5:
              m.lazy = r.bool()
              break
            case 3:
              m.deprecated = r.bool()
              break
            case 10:
              m.weak = r.bool()
              break
            case 999:
              if (!(m.uninterpreted_option && m.uninterpreted_option.length)) {
                m.uninterpreted_option = []
              }
              m.uninterpreted_option.push($types[6].decode(r, r.uint32()))
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      FieldOptions.CType = (function () {
        var valuesById = {}, values = Object.create(valuesById)
        values[valuesById[0] = 'STRING'] = 0
        values[valuesById[1] = 'CORD'] = 1
        values[valuesById[2] = 'STRING_PIECE'] = 2
        return values
      })()

      FieldOptions.JSType = (function () {
        var valuesById = {}, values = Object.create(valuesById)
        values[valuesById[0] = 'JS_NORMAL'] = 0
        values[valuesById[1] = 'JS_STRING'] = 1
        values[valuesById[2] = 'JS_NUMBER'] = 2
        return values
      })()

      return FieldOptions
    })()

    protobuf.OneofOptions = (function () {
      function OneofOptions (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      OneofOptions.prototype.uninterpreted_option = $util.emptyArray

      var $types = {
        0: 'google.protobuf.UninterpretedOption'
      }; $lazyTypes.push($types)

      OneofOptions.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.uninterpreted_option !== undefined && m.hasOwnProperty('uninterpreted_option')) {
          for (var i = 0; i < m.uninterpreted_option.length; ++i) {
            $types[0].encode(m.uninterpreted_option[i], w.uint32(7994).fork()).ldelim()
          }
        }
        return w
      }

      OneofOptions.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.OneofOptions()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 999:
              if (!(m.uninterpreted_option && m.uninterpreted_option.length)) { m.uninterpreted_option = [] }
              m.uninterpreted_option.push($types[0].decode(r, r.uint32()))
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return OneofOptions
    })()

    protobuf.EnumOptions = (function () {
      function EnumOptions (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) { this[keys[i]] = properties[keys[i]] }
        }
      }

      EnumOptions.prototype.allow_alias = false
      EnumOptions.prototype.deprecated = false
      EnumOptions.prototype.uninterpreted_option = $util.emptyArray

      var $types = {
        2: 'google.protobuf.UninterpretedOption'
      }; $lazyTypes.push($types)

      EnumOptions.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.allow_alias !== undefined && m.hasOwnProperty('allow_alias')) { w.uint32(16).bool(m.allow_alias) }
        if (m.deprecated !== undefined && m.hasOwnProperty('deprecated')) {
          w.uint32(24).bool(m.deprecated)
        }
        if (m.uninterpreted_option !== undefined && m.hasOwnProperty('uninterpreted_option')) {
          for (var i = 0; i < m.uninterpreted_option.length; ++i) { $types[2].encode(m.uninterpreted_option[i], w.uint32(7994).fork()).ldelim() }
        }
        return w
      }

      EnumOptions.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) { r = $Reader.create(r) }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.EnumOptions()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 2:
              m.allow_alias = r.bool()
              break
            case 3:
              m.deprecated = r.bool()
              break
            case 999:
              if (!(m.uninterpreted_option && m.uninterpreted_option.length)) {
                m.uninterpreted_option = []
              }
              m.uninterpreted_option.push($types[2].decode(r, r.uint32()))
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return EnumOptions
    })()

    protobuf.EnumValueOptions = (function () {
      function EnumValueOptions (properties) {
        if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) { this[keys[i]] = properties[keys[i]] } }
      }

      EnumValueOptions.prototype.deprecated = false
      EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray

      var $types = {
        1: 'google.protobuf.UninterpretedOption'
      }; $lazyTypes.push($types)

      EnumValueOptions.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.deprecated !== undefined && m.hasOwnProperty('deprecated')) {
          w.uint32(8).bool(m.deprecated)
        }
        if (m.uninterpreted_option !== undefined && m.hasOwnProperty('uninterpreted_option')) {
          for (var i = 0; i < m.uninterpreted_option.length; ++i) {
            $types[1].encode(m.uninterpreted_option[i], w.uint32(7994).fork()).ldelim()
          }
        }
        return w
      }

      EnumValueOptions.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.EnumValueOptions()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              m.deprecated = r.bool()
              break
            case 999:
              if (!(m.uninterpreted_option && m.uninterpreted_option.length)) {
                m.uninterpreted_option = []
              }
              m.uninterpreted_option.push($types[1].decode(r, r.uint32()))
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return EnumValueOptions
    })()

    protobuf.ServiceOptions = (function () {
      function ServiceOptions (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      ServiceOptions.prototype.deprecated = false
      ServiceOptions.prototype.uninterpreted_option = $util.emptyArray

      var $types = {
        1: 'google.protobuf.UninterpretedOption'
      }; $lazyTypes.push($types)

      ServiceOptions.encode = function encode (m, w) {
        if (!w) { w = $Writer.create() }
        if (m.deprecated !== undefined && m.hasOwnProperty('deprecated')) {
          w.uint32(264).bool(m.deprecated)
        }
        if (m.uninterpreted_option !== undefined && m.hasOwnProperty('uninterpreted_option')) {
          for (var i = 0; i < m.uninterpreted_option.length; ++i) {
            $types[1].encode(m.uninterpreted_option[i], w.uint32(7994).fork()).ldelim()
          }
        }
        return w
      }

      ServiceOptions.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.ServiceOptions()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 33:
              m.deprecated = r.bool()
              break
            case 999:
              if (!(m.uninterpreted_option && m.uninterpreted_option.length)) {
                m.uninterpreted_option = []
              }
              m.uninterpreted_option.push($types[1].decode(r, r.uint32()))
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      return ServiceOptions
    })()

    protobuf.MethodOptions = (function () {
      function MethodOptions (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) { this[keys[i]] = properties[keys[i]] }
        }
      }

      MethodOptions.prototype.deprecated = false
      MethodOptions.prototype.idempotency_level = 0
      MethodOptions.prototype.uninterpreted_option = $util.emptyArray

      var $types = {
        1: 'google.protobuf.MethodOptions.IdempotencyLevel',
        2: 'google.protobuf.UninterpretedOption'
      }; $lazyTypes.push($types)

      MethodOptions.encode = function encode (m, w) {
        if (!w) { w = $Writer.create() }
        if (m.deprecated !== undefined && m.hasOwnProperty('deprecated')) { w.uint32(264).bool(m.deprecated) }
        if (m.idempotency_level !== undefined && m.hasOwnProperty('idempotency_level')) {
          w.uint32(272).uint32(m.idempotency_level)
        }
        if (m.uninterpreted_option !== undefined && m.hasOwnProperty('uninterpreted_option')) {
          for (var i = 0; i < m.uninterpreted_option.length; ++i) {
            $types[2].encode(m.uninterpreted_option[i], w.uint32(7994).fork()).ldelim()
          }
        }
        return w
      }

      MethodOptions.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.MethodOptions()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 33:
              m.deprecated = r.bool()
              break
            case 34:
              m.idempotency_level = r.uint32()
              break
            case 999:
              if (!(m.uninterpreted_option && m.uninterpreted_option.length)) {
                m.uninterpreted_option = []
              }
              m.uninterpreted_option.push($types[2].decode(r, r.uint32()))
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      MethodOptions.IdempotencyLevel = (function () {
        var valuesById = {}, values = Object.create(valuesById)
        values[valuesById[0] = 'IDEMPOTENCY_UNKNOWN'] = 0
        values[valuesById[1] = 'NO_SIDE_EFFECTS'] = 1
        values[valuesById[2] = 'IDEMPOTENT'] = 2
        return values
      })()

      return MethodOptions
    })()

    protobuf.UninterpretedOption = (function () {
      function UninterpretedOption (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      UninterpretedOption.prototype.name = $util.emptyArray
      UninterpretedOption.prototype.identifier_value = ''
      UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0, 0, true) : 0
      UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0
      UninterpretedOption.prototype.double_value = 0
      UninterpretedOption.prototype.string_value = $util.newBuffer([])
      UninterpretedOption.prototype.aggregate_value = ''

      var $types = {
        0: 'google.protobuf.UninterpretedOption.NamePart'
      }; $lazyTypes.push($types)

      UninterpretedOption.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.name !== undefined && m.hasOwnProperty('name')) {
          for (var i = 0; i < m.name.length; ++i) {
            $types[0].encode(m.name[i], w.uint32(18).fork()).ldelim()
          }
        }
        if (m.identifier_value !== undefined && m.hasOwnProperty('identifier_value')) {
          w.uint32(26).string(m.identifier_value)
        }
        if (m.positive_int_value !== undefined && m.positive_int_value !== null && m.hasOwnProperty('positive_int_value')) {
          w.uint32(32).uint64(m.positive_int_value)
        }
        if (m.negative_int_value !== undefined && m.negative_int_value !== null && m.hasOwnProperty('negative_int_value')) { w.uint32(40).int64(m.negative_int_value) }
        if (m.double_value !== undefined && m.hasOwnProperty('double_value')) {
          w.uint32(49).double(m.double_value)
        }
        if (m.string_value && m.hasOwnProperty('string_value')) {
          w.uint32(58).bytes(m.string_value)
        }
        if (m.aggregate_value !== undefined && m.hasOwnProperty('aggregate_value')) {
          w.uint32(66).string(m.aggregate_value)
        }
        return w
      }

      UninterpretedOption.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) { r = $Reader.create(r) }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.UninterpretedOption()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 2:
              if (!(m.name && m.name.length)) {
                m.name = []
              }
              m.name.push($types[0].decode(r, r.uint32()))
              break
            case 3:
              m.identifier_value = r.string()
              break
            case 4:
              m.positive_int_value = r.uint64()
              break
            case 5:
              m.negative_int_value = r.int64()
              break
            case 6:
              m.double_value = r.double()
              break
            case 7:
              m.string_value = r.bytes()
              break
            case 8:
              m.aggregate_value = r.string()
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      UninterpretedOption.NamePart = (function () {
        function NamePart (properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
              this[keys[i]] = properties[keys[i]]
            }
          }
        }

        NamePart.prototype.name_part = ''
        NamePart.prototype.is_extension = false

        NamePart.encode = function encode (m, w) {
          if (!w) {
            w = $Writer.create()
          }
          w.uint32(10).string(m.name_part)
          w.uint32(16).bool(m.is_extension)
          return w
        }

        NamePart.decode = function decode (r, l) {
          if (!(r instanceof $Reader)) {
            r = $Reader.create(r)
          }
          var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.UninterpretedOption.NamePart()
          while (r.pos < c) {
            var t = r.uint32()
            switch (t >>> 3) {
              case 1:
                m.name_part = r.string()
                break
              case 2:
                m.is_extension = r.bool()
                break
              default:
                r.skipType(t & 7)
                break
            }
          }
          return m
        }

        return NamePart
      })()

      return UninterpretedOption
    })()

    protobuf.SourceCodeInfo = (function () {
      function SourceCodeInfo (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      SourceCodeInfo.prototype.location = $util.emptyArray

      var $types = {
        0: 'google.protobuf.SourceCodeInfo.Location'
      }; $lazyTypes.push($types)

      SourceCodeInfo.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.location !== undefined && m.hasOwnProperty('location')) {
          for (var i = 0; i < m.location.length; ++i) {
            $types[0].encode(m.location[i], w.uint32(10).fork()).ldelim()
          }
        }
        return w
      }

      SourceCodeInfo.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) {
          r = $Reader.create(r)
        }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.SourceCodeInfo()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              if (!(m.location && m.location.length)) {
                m.location = []
              }
              m.location.push($types[0].decode(r, r.uint32()))
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      SourceCodeInfo.Location = (function () {
        function Location (properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
              this[keys[i]] = properties[keys[i]]
            }
          }
        }

        Location.prototype.path = $util.emptyArray
        Location.prototype.span = $util.emptyArray
        Location.prototype.leading_comments = ''
        Location.prototype.trailing_comments = ''
        Location.prototype.leading_detached_comments = $util.emptyArray

        Location.encode = function encode (m, w) {
          if (!w) {
            w = $Writer.create()
          }
          if (m.path && m.path.length && m.hasOwnProperty('path')) {
            w.uint32(10).fork()
            for (var i = 0; i < m.path.length; ++i) {
              w.int32(m.path[i])
            }
            w.ldelim()
          }
          if (m.span && m.span.length && m.hasOwnProperty('span')) {
            w.uint32(18).fork()
            for (var i = 0; i < m.span.length; ++i) { w.int32(m.span[i]) }
            w.ldelim()
          }
          if (m.leading_comments !== undefined && m.hasOwnProperty('leading_comments')) {
            w.uint32(26).string(m.leading_comments)
          }
          if (m.trailing_comments !== undefined && m.hasOwnProperty('trailing_comments')) { w.uint32(34).string(m.trailing_comments) }
          if (m.leading_detached_comments !== undefined && m.hasOwnProperty('leading_detached_comments')) {
            for (var i = 0; i < m.leading_detached_comments.length; ++i) {
              w.uint32(50).string(m.leading_detached_comments[i])
            }
          }
          return w
        }

        Location.decode = function decode (r, l) {
          if (!(r instanceof $Reader)) {
            r = $Reader.create(r)
          }
          var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.SourceCodeInfo.Location()
          while (r.pos < c) {
            var t = r.uint32()
            switch (t >>> 3) {
              case 1:
                if (!(m.path && m.path.length)) {
                  m.path = []
                }
                if ((t & 7) === 2) {
                  var c2 = r.uint32() + r.pos
                  while (r.pos < c2) {
                    m.path.push(r.int32())
                  }
                } else { m.path.push(r.int32()) }
                break
              case 2:
                if (!(m.span && m.span.length)) { m.span = [] }
                if ((t & 7) === 2) {
                  var c2 = r.uint32() + r.pos
                  while (r.pos < c2) {
                    m.span.push(r.int32())
                  }
                } else {
                  m.span.push(r.int32())
                }
                break
              case 3:
                m.leading_comments = r.string()
                break
              case 4:
                m.trailing_comments = r.string()
                break
              case 6:
                if (!(m.leading_detached_comments && m.leading_detached_comments.length)) {
                  m.leading_detached_comments = []
                }
                m.leading_detached_comments.push(r.string())
                break
              default:
                r.skipType(t & 7)
                break
            }
          }
          return m
        }

        return Location
      })()

      return SourceCodeInfo
    })()

    protobuf.GeneratedCodeInfo = (function () {
      function GeneratedCodeInfo (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            this[keys[i]] = properties[keys[i]]
          }
        }
      }

      GeneratedCodeInfo.prototype.annotation = $util.emptyArray

      var $types = {
        0: 'google.protobuf.GeneratedCodeInfo.Annotation'
      }; $lazyTypes.push($types)

      GeneratedCodeInfo.encode = function encode (m, w) {
        if (!w) {
          w = $Writer.create()
        }
        if (m.annotation !== undefined && m.hasOwnProperty('annotation')) {
          for (var i = 0; i < m.annotation.length; ++i) {
            $types[0].encode(m.annotation[i], w.uint32(10).fork()).ldelim()
          }
        }
        return w
      }

      GeneratedCodeInfo.decode = function decode (r, l) {
        if (!(r instanceof $Reader)) { r = $Reader.create(r) }
        var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.GeneratedCodeInfo()
        while (r.pos < c) {
          var t = r.uint32()
          switch (t >>> 3) {
            case 1:
              if (!(m.annotation && m.annotation.length)) {
                m.annotation = []
              }
              m.annotation.push($types[0].decode(r, r.uint32()))
              break
            default:
              r.skipType(t & 7)
              break
          }
        }
        return m
      }

      GeneratedCodeInfo.Annotation = (function () {
        function Annotation (properties) {
          if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) { this[keys[i]] = properties[keys[i]] } }
        }

        Annotation.prototype.path = $util.emptyArray
        Annotation.prototype.source_file = ''
        Annotation.prototype.begin = 0
        Annotation.prototype.end = 0

        Annotation.encode = function encode (m, w) {
          if (!w) {
            w = $Writer.create()
          }
          if (m.path && m.path.length && m.hasOwnProperty('path')) {
            w.uint32(10).fork()
            for (var i = 0; i < m.path.length; ++i) {
              w.int32(m.path[i])
            }
            w.ldelim()
          }
          if (m.source_file !== undefined && m.hasOwnProperty('source_file')) {
            w.uint32(18).string(m.source_file)
          }
          if (m.begin !== undefined && m.hasOwnProperty('begin')) {
            w.uint32(24).int32(m.begin)
          }
          if (m.end !== undefined && m.hasOwnProperty('end')) {
            w.uint32(32).int32(m.end)
          }
          return w
        }

        Annotation.decode = function decode (r, l) {
          if (!(r instanceof $Reader)) { r = $Reader.create(r) }
          var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.GeneratedCodeInfo.Annotation()
          while (r.pos < c) {
            var t = r.uint32()
            switch (t >>> 3) {
              case 1:
                if (!(m.path && m.path.length)) {
                  m.path = []
                }
                if ((t & 7) === 2) {
                  var c2 = r.uint32() + r.pos
                  while (r.pos < c2) { m.path.push(r.int32()) }
                } else {
                  m.path.push(r.int32())
                }
                break
              case 2:
                m.source_file = r.string()
                break
              case 3:
                m.begin = r.int32()
                break
              case 4:
                m.end = r.int32()
                break
              default:
                r.skipType(t & 7)
                break
            }
          }
          return m
        }

        return Annotation
      })()

      return GeneratedCodeInfo
    })()

    return protobuf
  })()

  return google
})()

$util.lazyResolve($root, $lazyTypes)

module.exports = $root

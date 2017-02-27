/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Lazily resolved type references
var $lazyTypes = [];

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @exports google.protobuf
         * @namespace
         */
        var protobuf = {};

        protobuf.compiler = (function() {

            /**
             * Namespace compiler.
             * @exports google.protobuf.compiler
             * @namespace
             */
            var compiler = {};

            compiler.Version = (function() {

                /**
                 * Constructs a new Version.
                 * @exports google.protobuf.compiler.Version
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function Version(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Version major.
                 * @type {number}
                 */
                Version.prototype.major = 0;

                /**
                 * Version minor.
                 * @type {number}
                 */
                Version.prototype.minor = 0;

                /**
                 * Version patch.
                 * @type {number}
                 */
                Version.prototype.patch = 0;

                /**
                 * Version suffix.
                 * @type {string}
                 */
                Version.prototype.suffix = "";

                /**
                 * Creates a new Version instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.compiler.Version} Version instance
                 */
                Version.create = function create(properties) {
                    return new Version(properties);
                };

                /**
                 * Encodes the specified Version message.
                 * @param {google.protobuf.compiler.Version|Object} message Version message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Version.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.major !== undefined && message.hasOwnProperty("major"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.major);
                    if (message.minor !== undefined && message.hasOwnProperty("minor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.minor);
                    if (message.patch !== undefined && message.hasOwnProperty("patch"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.patch);
                    if (message.suffix !== undefined && message.hasOwnProperty("suffix"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.suffix);
                    return writer;
                };

                /**
                 * Encodes the specified Version message, length delimited.
                 * @param {google.protobuf.compiler.Version|Object} message Version message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Version.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Version message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.compiler.Version} Version
                 */
                Version.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.compiler.Version();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.major = reader.int32();
                            break;
                        case 2:
                            message.minor = reader.int32();
                            break;
                        case 3:
                            message.patch = reader.int32();
                            break;
                        case 4:
                            message.suffix = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Version message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.compiler.Version} Version
                 */
                Version.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Version message.
                 * @param {google.protobuf.compiler.Version|Object} message Version message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Version.verify = function verify(message) {
                    if (message.major !== undefined)
                        if (!$util.isInteger(message.major))
                            return "major: integer expected";
                    if (message.minor !== undefined)
                        if (!$util.isInteger(message.minor))
                            return "minor: integer expected";
                    if (message.patch !== undefined)
                        if (!$util.isInteger(message.patch))
                            return "patch: integer expected";
                    if (message.suffix !== undefined)
                        if (!$util.isString(message.suffix))
                            return "suffix: string expected";
                    return null;
                };

                /**
                 * Creates a Version message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.compiler.Version} Version
                 */
                Version.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.compiler.Version)
                        return object;
                    var message = new $root.google.protobuf.compiler.Version();
                    if (object.major !== undefined && object.major !== null)
                        message.major = object.major | 0;
                    if (object.minor !== undefined && object.minor !== null)
                        message.minor = object.minor | 0;
                    if (object.patch !== undefined && object.patch !== null)
                        message.patch = object.patch | 0;
                    if (object.suffix !== undefined && object.suffix !== null)
                        message.suffix = String(object.suffix);
                    return message;
                };

                /**
                 * Creates a Version message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.compiler.Version.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.compiler.Version} Version
                 */
                Version.from = Version.fromObject;

                /**
                 * Creates a plain object from a Version message. Also converts values to other types if specified.
                 * @param {google.protobuf.compiler.Version} message Version
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Version.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.major = 0;
                        object.minor = 0;
                        object.patch = 0;
                        object.suffix = "";
                    }
                    if (message.major !== undefined && message.major !== null && message.hasOwnProperty("major"))
                        object.major = message.major;
                    if (message.minor !== undefined && message.minor !== null && message.hasOwnProperty("minor"))
                        object.minor = message.minor;
                    if (message.patch !== undefined && message.patch !== null && message.hasOwnProperty("patch"))
                        object.patch = message.patch;
                    if (message.suffix !== undefined && message.suffix !== null && message.hasOwnProperty("suffix"))
                        object.suffix = message.suffix;
                    return object;
                };

                /**
                 * Creates a plain object from this Version message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Version.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Version to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Version.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Version;
            })();

            compiler.CodeGeneratorRequest = (function() {

                /**
                 * Constructs a new CodeGeneratorRequest.
                 * @exports google.protobuf.compiler.CodeGeneratorRequest
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function CodeGeneratorRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CodeGeneratorRequest file_to_generate.
                 * @type {Array.<string>}
                 */
                CodeGeneratorRequest.prototype.file_to_generate = $util.emptyArray;

                /**
                 * CodeGeneratorRequest parameter.
                 * @type {string}
                 */
                CodeGeneratorRequest.prototype.parameter = "";

                /**
                 * CodeGeneratorRequest proto_file.
                 * @type {Array.<google.protobuf.FileDescriptorProto>}
                 */
                CodeGeneratorRequest.prototype.proto_file = $util.emptyArray;

                /**
                 * CodeGeneratorRequest compiler_version.
                 * @type {google.protobuf.compiler.Version}
                 */
                CodeGeneratorRequest.prototype.compiler_version = null;

                // Lazily resolved type references
                var $types = {
                    2: "google.protobuf.FileDescriptorProto",
                    3: "google.protobuf.compiler.Version"
                }; $lazyTypes.push($types);

                /**
                 * Creates a new CodeGeneratorRequest instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.compiler.CodeGeneratorRequest} CodeGeneratorRequest instance
                 */
                CodeGeneratorRequest.create = function create(properties) {
                    return new CodeGeneratorRequest(properties);
                };

                /**
                 * Encodes the specified CodeGeneratorRequest message.
                 * @param {google.protobuf.compiler.CodeGeneratorRequest|Object} message CodeGeneratorRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CodeGeneratorRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file_to_generate !== undefined && message.hasOwnProperty("file_to_generate"))
                        for (var i = 0; i < message.file_to_generate.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.file_to_generate[i]);
                    if (message.parameter !== undefined && message.hasOwnProperty("parameter"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.parameter);
                    if (message.proto_file !== undefined && message.hasOwnProperty("proto_file"))
                        for (var i = 0; i < message.proto_file.length; ++i)
                            $types[2].encode(message.proto_file[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                    if (message.compiler_version && message.hasOwnProperty("compiler_version"))
                        $types[3].encode(message.compiler_version, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CodeGeneratorRequest message, length delimited.
                 * @param {google.protobuf.compiler.CodeGeneratorRequest|Object} message CodeGeneratorRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CodeGeneratorRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CodeGeneratorRequest message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.compiler.CodeGeneratorRequest} CodeGeneratorRequest
                 */
                CodeGeneratorRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.compiler.CodeGeneratorRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.file_to_generate && message.file_to_generate.length))
                                message.file_to_generate = [];
                            message.file_to_generate.push(reader.string());
                            break;
                        case 2:
                            message.parameter = reader.string();
                            break;
                        case 15:
                            if (!(message.proto_file && message.proto_file.length))
                                message.proto_file = [];
                            message.proto_file.push($types[2].decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.compiler_version = $types[3].decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CodeGeneratorRequest message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.compiler.CodeGeneratorRequest} CodeGeneratorRequest
                 */
                CodeGeneratorRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CodeGeneratorRequest message.
                 * @param {google.protobuf.compiler.CodeGeneratorRequest|Object} message CodeGeneratorRequest message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                CodeGeneratorRequest.verify = function verify(message) {
                    if (message.file_to_generate !== undefined) {
                        if (!Array.isArray(message.file_to_generate))
                            return "file_to_generate: array expected";
                        for (var i = 0; i < message.file_to_generate.length; ++i)
                            if (!$util.isString(message.file_to_generate[i]))
                                return "file_to_generate: string[] expected";
                    }
                    if (message.parameter !== undefined)
                        if (!$util.isString(message.parameter))
                            return "parameter: string expected";
                    if (message.proto_file !== undefined) {
                        if (!Array.isArray(message.proto_file))
                            return "proto_file: array expected";
                        for (var i = 0; i < message.proto_file.length; ++i) {
                            var error = $types[2].verify(message.proto_file[i]);
                            if (error)
                                return "proto_file." + error;
                        }
                    }
                    if (message.compiler_version !== undefined && message.compiler_version !== null) {
                        var error = $types[3].verify(message.compiler_version);
                        if (error)
                            return "compiler_version." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CodeGeneratorRequest message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.compiler.CodeGeneratorRequest} CodeGeneratorRequest
                 */
                CodeGeneratorRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.compiler.CodeGeneratorRequest)
                        return object;
                    var message = new $root.google.protobuf.compiler.CodeGeneratorRequest();
                    if (object.file_to_generate) {
                        if (!Array.isArray(object.file_to_generate))
                            throw TypeError(".google.protobuf.compiler.CodeGeneratorRequest.file_to_generate: array expected");
                        message.file_to_generate = [];
                        for (var i = 0; i < object.file_to_generate.length; ++i)
                            message.file_to_generate[i] = String(object.file_to_generate[i]);
                    }
                    if (object.parameter !== undefined && object.parameter !== null)
                        message.parameter = String(object.parameter);
                    if (object.proto_file) {
                        if (!Array.isArray(object.proto_file))
                            throw TypeError(".google.protobuf.compiler.CodeGeneratorRequest.proto_file: array expected");
                        message.proto_file = [];
                        for (var i = 0; i < object.proto_file.length; ++i) {
                            if (typeof object.proto_file[i] !== "object")
                                throw TypeError(".google.protobuf.compiler.CodeGeneratorRequest.proto_file: object expected");
                            message.proto_file[i] = $types[2].fromObject(object.proto_file[i]);
                        }
                    }
                    if (object.compiler_version !== undefined && object.compiler_version !== null) {
                        if (typeof object.compiler_version !== "object")
                            throw TypeError(".google.protobuf.compiler.CodeGeneratorRequest.compiler_version: object expected");
                        message.compiler_version = $types[3].fromObject(object.compiler_version);
                    }
                    return message;
                };

                /**
                 * Creates a CodeGeneratorRequest message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.compiler.CodeGeneratorRequest.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.compiler.CodeGeneratorRequest} CodeGeneratorRequest
                 */
                CodeGeneratorRequest.from = CodeGeneratorRequest.fromObject;

                /**
                 * Creates a plain object from a CodeGeneratorRequest message. Also converts values to other types if specified.
                 * @param {google.protobuf.compiler.CodeGeneratorRequest} message CodeGeneratorRequest
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CodeGeneratorRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.file_to_generate = [];
                        object.proto_file = [];
                    }
                    if (options.defaults) {
                        object.parameter = "";
                        object.compiler_version = null;
                    }
                    if (message.file_to_generate !== undefined && message.file_to_generate !== null && message.hasOwnProperty("file_to_generate")) {
                        object.file_to_generate = [];
                        for (var j = 0; j < message.file_to_generate.length; ++j)
                            object.file_to_generate[j] = message.file_to_generate[j];
                    }
                    if (message.parameter !== undefined && message.parameter !== null && message.hasOwnProperty("parameter"))
                        object.parameter = message.parameter;
                    if (message.proto_file !== undefined && message.proto_file !== null && message.hasOwnProperty("proto_file")) {
                        object.proto_file = [];
                        for (var j = 0; j < message.proto_file.length; ++j)
                            object.proto_file[j] = $types[2].toObject(message.proto_file[j], options);
                    }
                    if (message.compiler_version !== undefined && message.compiler_version !== null && message.hasOwnProperty("compiler_version"))
                        object.compiler_version = $types[3].toObject(message.compiler_version, options);
                    return object;
                };

                /**
                 * Creates a plain object from this CodeGeneratorRequest message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CodeGeneratorRequest.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this CodeGeneratorRequest to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                CodeGeneratorRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CodeGeneratorRequest;
            })();

            compiler.CodeGeneratorResponse = (function() {

                /**
                 * Constructs a new CodeGeneratorResponse.
                 * @exports google.protobuf.compiler.CodeGeneratorResponse
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function CodeGeneratorResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CodeGeneratorResponse error.
                 * @type {string}
                 */
                CodeGeneratorResponse.prototype.error = "";

                /**
                 * CodeGeneratorResponse file.
                 * @type {Array.<google.protobuf.compiler.CodeGeneratorResponse.File>}
                 */
                CodeGeneratorResponse.prototype.file = $util.emptyArray;

                // Lazily resolved type references
                var $types = {
                    1: "google.protobuf.compiler.CodeGeneratorResponse.File"
                }; $lazyTypes.push($types);

                /**
                 * Creates a new CodeGeneratorResponse instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.compiler.CodeGeneratorResponse} CodeGeneratorResponse instance
                 */
                CodeGeneratorResponse.create = function create(properties) {
                    return new CodeGeneratorResponse(properties);
                };

                /**
                 * Encodes the specified CodeGeneratorResponse message.
                 * @param {google.protobuf.compiler.CodeGeneratorResponse|Object} message CodeGeneratorResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CodeGeneratorResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.error !== undefined && message.hasOwnProperty("error"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.error);
                    if (message.file !== undefined && message.hasOwnProperty("file"))
                        for (var i = 0; i < message.file.length; ++i)
                            $types[1].encode(message.file[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CodeGeneratorResponse message, length delimited.
                 * @param {google.protobuf.compiler.CodeGeneratorResponse|Object} message CodeGeneratorResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CodeGeneratorResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CodeGeneratorResponse message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.compiler.CodeGeneratorResponse} CodeGeneratorResponse
                 */
                CodeGeneratorResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.compiler.CodeGeneratorResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.error = reader.string();
                            break;
                        case 15:
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($types[1].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CodeGeneratorResponse message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.compiler.CodeGeneratorResponse} CodeGeneratorResponse
                 */
                CodeGeneratorResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CodeGeneratorResponse message.
                 * @param {google.protobuf.compiler.CodeGeneratorResponse|Object} message CodeGeneratorResponse message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                CodeGeneratorResponse.verify = function verify(message) {
                    if (message.error !== undefined)
                        if (!$util.isString(message.error))
                            return "error: string expected";
                    if (message.file !== undefined) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $types[1].verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a CodeGeneratorResponse message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.compiler.CodeGeneratorResponse} CodeGeneratorResponse
                 */
                CodeGeneratorResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.compiler.CodeGeneratorResponse)
                        return object;
                    var message = new $root.google.protobuf.compiler.CodeGeneratorResponse();
                    if (object.error !== undefined && object.error !== null)
                        message.error = String(object.error);
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.compiler.CodeGeneratorResponse.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.compiler.CodeGeneratorResponse.file: object expected");
                            message.file[i] = $types[1].fromObject(object.file[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a CodeGeneratorResponse message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.compiler.CodeGeneratorResponse.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.compiler.CodeGeneratorResponse} CodeGeneratorResponse
                 */
                CodeGeneratorResponse.from = CodeGeneratorResponse.fromObject;

                /**
                 * Creates a plain object from a CodeGeneratorResponse message. Also converts values to other types if specified.
                 * @param {google.protobuf.compiler.CodeGeneratorResponse} message CodeGeneratorResponse
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CodeGeneratorResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (options.defaults)
                        object.error = "";
                    if (message.error !== undefined && message.error !== null && message.hasOwnProperty("error"))
                        object.error = message.error;
                    if (message.file !== undefined && message.file !== null && message.hasOwnProperty("file")) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $types[1].toObject(message.file[j], options);
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this CodeGeneratorResponse message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CodeGeneratorResponse.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this CodeGeneratorResponse to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                CodeGeneratorResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                CodeGeneratorResponse.File = (function() {

                    /**
                     * Constructs a new File.
                     * @exports google.protobuf.compiler.CodeGeneratorResponse.File
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function File(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * File name.
                     * @type {string}
                     */
                    File.prototype.name = "";

                    /**
                     * File insertion_point.
                     * @type {string}
                     */
                    File.prototype.insertion_point = "";

                    /**
                     * File content.
                     * @type {string}
                     */
                    File.prototype.content = "";

                    /**
                     * Creates a new File instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {google.protobuf.compiler.CodeGeneratorResponse.File} File instance
                     */
                    File.create = function create(properties) {
                        return new File(properties);
                    };

                    /**
                     * Encodes the specified File message.
                     * @param {google.protobuf.compiler.CodeGeneratorResponse.File|Object} message File message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    File.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name !== undefined && message.hasOwnProperty("name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.insertion_point !== undefined && message.hasOwnProperty("insertion_point"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.insertion_point);
                        if (message.content !== undefined && message.hasOwnProperty("content"))
                            writer.uint32(/* id 15, wireType 2 =*/122).string(message.content);
                        return writer;
                    };

                    /**
                     * Encodes the specified File message, length delimited.
                     * @param {google.protobuf.compiler.CodeGeneratorResponse.File|Object} message File message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    File.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a File message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.compiler.CodeGeneratorResponse.File} File
                     */
                    File.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.compiler.CodeGeneratorResponse.File();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                message.insertion_point = reader.string();
                                break;
                            case 15:
                                message.content = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a File message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.compiler.CodeGeneratorResponse.File} File
                     */
                    File.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a File message.
                     * @param {google.protobuf.compiler.CodeGeneratorResponse.File|Object} message File message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    File.verify = function verify(message) {
                        if (message.name !== undefined)
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.insertion_point !== undefined)
                            if (!$util.isString(message.insertion_point))
                                return "insertion_point: string expected";
                        if (message.content !== undefined)
                            if (!$util.isString(message.content))
                                return "content: string expected";
                        return null;
                    };

                    /**
                     * Creates a File message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.compiler.CodeGeneratorResponse.File} File
                     */
                    File.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.compiler.CodeGeneratorResponse.File)
                            return object;
                        var message = new $root.google.protobuf.compiler.CodeGeneratorResponse.File();
                        if (object.name !== undefined && object.name !== null)
                            message.name = String(object.name);
                        if (object.insertion_point !== undefined && object.insertion_point !== null)
                            message.insertion_point = String(object.insertion_point);
                        if (object.content !== undefined && object.content !== null)
                            message.content = String(object.content);
                        return message;
                    };

                    /**
                     * Creates a File message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link google.protobuf.compiler.CodeGeneratorResponse.File.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.compiler.CodeGeneratorResponse.File} File
                     */
                    File.from = File.fromObject;

                    /**
                     * Creates a plain object from a File message. Also converts values to other types if specified.
                     * @param {google.protobuf.compiler.CodeGeneratorResponse.File} message File
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    File.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name = "";
                            object.insertion_point = "";
                            object.content = "";
                        }
                        if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.insertion_point !== undefined && message.insertion_point !== null && message.hasOwnProperty("insertion_point"))
                            object.insertion_point = message.insertion_point;
                        if (message.content !== undefined && message.content !== null && message.hasOwnProperty("content"))
                            object.content = message.content;
                        return object;
                    };

                    /**
                     * Creates a plain object from this File message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    File.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };

                    /**
                     * Converts this File to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    File.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return File;
                })();

                return CodeGeneratorResponse;
            })();

            return compiler;
        })();

        protobuf.FileDescriptorSet = (function() {

            /**
             * Constructs a new FileDescriptorSet.
             * @exports google.protobuf.FileDescriptorSet
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @type {Array.<google.protobuf.FileDescriptorProto>}
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.FileDescriptorProto"
            }; $lazyTypes.push($types);

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message.
             * @param {google.protobuf.FileDescriptorSet|Object} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file !== undefined && message.hasOwnProperty("file"))
                    for (var i = 0; i < message.file.length; ++i)
                        $types[0].encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited.
             * @param {google.protobuf.FileDescriptorSet|Object} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($types[0].decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @param {google.protobuf.FileDescriptorSet|Object} message FileDescriptorSet message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (message.file !== undefined) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (var i = 0; i < message.file.length; ++i) {
                        var error = $types[0].verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (var i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $types[0].fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FileDescriptorSet.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.from = FileDescriptorSet.fromObject;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file !== undefined && message.file !== null && message.hasOwnProperty("file")) {
                    object.file = [];
                    for (var j = 0; j < message.file.length; ++j)
                        object.file[j] = $types[0].toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this FileDescriptorSet message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Constructs a new FileDescriptorProto.
             * @exports google.protobuf.FileDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @type {string}
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @name google.protobuf.FileDescriptorProto#package
             * @type {string}
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @type {Array.<string>}
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto public_dependency.
             * @type {Array.<number>}
             */
            FileDescriptorProto.prototype.public_dependency = $util.emptyArray;

            /**
             * FileDescriptorProto weak_dependency.
             * @type {Array.<number>}
             */
            FileDescriptorProto.prototype.weak_dependency = $util.emptyArray;

            /**
             * FileDescriptorProto message_type.
             * @type {Array.<google.protobuf.DescriptorProto>}
             */
            FileDescriptorProto.prototype.message_type = $util.emptyArray;

            /**
             * FileDescriptorProto enum_type.
             * @type {Array.<google.protobuf.EnumDescriptorProto>}
             */
            FileDescriptorProto.prototype.enum_type = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @type {Array.<google.protobuf.ServiceDescriptorProto>}
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @type {Array.<google.protobuf.FieldDescriptorProto>}
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @type {google.protobuf.FileOptions}
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto source_code_info.
             * @type {google.protobuf.SourceCodeInfo}
             */
            FileDescriptorProto.prototype.source_code_info = null;

            /**
             * FileDescriptorProto syntax.
             * @type {string}
             */
            FileDescriptorProto.prototype.syntax = "";

            // Lazily resolved type references
            var $types = {
                5: "google.protobuf.DescriptorProto",
                6: "google.protobuf.EnumDescriptorProto",
                7: "google.protobuf.ServiceDescriptorProto",
                8: "google.protobuf.FieldDescriptorProto",
                9: "google.protobuf.FileOptions",
                10: "google.protobuf.SourceCodeInfo"
            }; $lazyTypes.push($types);

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message.
             * @param {google.protobuf.FileDescriptorProto|Object} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name !== undefined && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] !== undefined && message.hasOwnProperty("package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency !== undefined && message.hasOwnProperty("dependency"))
                    for (var i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.public_dependency !== undefined && message.hasOwnProperty("public_dependency"))
                    for (var i = 0; i < message.public_dependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.public_dependency[i]);
                if (message.weak_dependency !== undefined && message.hasOwnProperty("weak_dependency"))
                    for (var i = 0; i < message.weak_dependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weak_dependency[i]);
                if (message.message_type !== undefined && message.hasOwnProperty("message_type"))
                    for (var i = 0; i < message.message_type.length; ++i)
                        $types[5].encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enum_type !== undefined && message.hasOwnProperty("enum_type"))
                    for (var i = 0; i < message.enum_type.length; ++i)
                        $types[6].encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service !== undefined && message.hasOwnProperty("service"))
                    for (var i = 0; i < message.service.length; ++i)
                        $types[7].encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension !== undefined && message.hasOwnProperty("extension"))
                    for (var i = 0; i < message.extension.length; ++i)
                        $types[8].encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options && message.hasOwnProperty("options"))
                    $types[9].encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.source_code_info && message.hasOwnProperty("source_code_info"))
                    $types[10].encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.syntax !== undefined && message.hasOwnProperty("syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited.
             * @param {google.protobuf.FileDescriptorProto|Object} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message["package"] = reader.string();
                        break;
                    case 3:
                        if (!(message.dependency && message.dependency.length))
                            message.dependency = [];
                        message.dependency.push(reader.string());
                        break;
                    case 10:
                        if (!(message.public_dependency && message.public_dependency.length))
                            message.public_dependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.public_dependency.push(reader.int32());
                        } else
                            message.public_dependency.push(reader.int32());
                        break;
                    case 11:
                        if (!(message.weak_dependency && message.weak_dependency.length))
                            message.weak_dependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weak_dependency.push(reader.int32());
                        } else
                            message.weak_dependency.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.message_type && message.message_type.length))
                            message.message_type = [];
                        message.message_type.push($types[5].decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.enum_type && message.enum_type.length))
                            message.enum_type = [];
                        message.enum_type.push($types[6].decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($types[7].decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($types[8].decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.options = $types[9].decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.source_code_info = $types[10].decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.syntax = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @param {google.protobuf.FileDescriptorProto|Object} message FileDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined)
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] !== undefined)
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency !== undefined) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (var i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.public_dependency !== undefined) {
                    if (!Array.isArray(message.public_dependency))
                        return "public_dependency: array expected";
                    for (var i = 0; i < message.public_dependency.length; ++i)
                        if (!$util.isInteger(message.public_dependency[i]))
                            return "public_dependency: integer[] expected";
                }
                if (message.weak_dependency !== undefined) {
                    if (!Array.isArray(message.weak_dependency))
                        return "weak_dependency: array expected";
                    for (var i = 0; i < message.weak_dependency.length; ++i)
                        if (!$util.isInteger(message.weak_dependency[i]))
                            return "weak_dependency: integer[] expected";
                }
                if (message.message_type !== undefined) {
                    if (!Array.isArray(message.message_type))
                        return "message_type: array expected";
                    for (var i = 0; i < message.message_type.length; ++i) {
                        var error = $types[5].verify(message.message_type[i]);
                        if (error)
                            return "message_type." + error;
                    }
                }
                if (message.enum_type !== undefined) {
                    if (!Array.isArray(message.enum_type))
                        return "enum_type: array expected";
                    for (var i = 0; i < message.enum_type.length; ++i) {
                        var error = $types[6].verify(message.enum_type[i]);
                        if (error)
                            return "enum_type." + error;
                    }
                }
                if (message.service !== undefined) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (var i = 0; i < message.service.length; ++i) {
                        var error = $types[7].verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension !== undefined) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $types[8].verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var error = $types[9].verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.source_code_info !== undefined && message.source_code_info !== null) {
                    var error = $types[10].verify(message.source_code_info);
                    if (error)
                        return "source_code_info." + error;
                }
                if (message.syntax !== undefined)
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name !== undefined && object.name !== null)
                    message.name = String(object.name);
                if (object["package"] !== undefined && object["package"] !== null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (var i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.public_dependency) {
                    if (!Array.isArray(object.public_dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.public_dependency: array expected");
                    message.public_dependency = [];
                    for (var i = 0; i < object.public_dependency.length; ++i)
                        message.public_dependency[i] = object.public_dependency[i] | 0;
                }
                if (object.weak_dependency) {
                    if (!Array.isArray(object.weak_dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weak_dependency: array expected");
                    message.weak_dependency = [];
                    for (var i = 0; i < object.weak_dependency.length; ++i)
                        message.weak_dependency[i] = object.weak_dependency[i] | 0;
                }
                if (object.message_type) {
                    if (!Array.isArray(object.message_type))
                        throw TypeError(".google.protobuf.FileDescriptorProto.message_type: array expected");
                    message.message_type = [];
                    for (var i = 0; i < object.message_type.length; ++i) {
                        if (typeof object.message_type[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.message_type: object expected");
                        message.message_type[i] = $types[5].fromObject(object.message_type[i]);
                    }
                }
                if (object.enum_type) {
                    if (!Array.isArray(object.enum_type))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: array expected");
                    message.enum_type = [];
                    for (var i = 0; i < object.enum_type.length; ++i) {
                        if (typeof object.enum_type[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: object expected");
                        message.enum_type[i] = $types[6].fromObject(object.enum_type[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (var i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $types[7].fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $types[8].fromObject(object.extension[i]);
                    }
                }
                if (object.options !== undefined && object.options !== null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $types[9].fromObject(object.options);
                }
                if (object.source_code_info !== undefined && object.source_code_info !== null) {
                    if (typeof object.source_code_info !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.source_code_info: object expected");
                    message.source_code_info = $types[10].fromObject(object.source_code_info);
                }
                if (object.syntax !== undefined && object.syntax !== null)
                    message.syntax = String(object.syntax);
                return message;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FileDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.from = FileDescriptorProto.fromObject;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.public_dependency = [];
                    object.weak_dependency = [];
                    object.message_type = [];
                    object.enum_type = [];
                    object.service = [];
                    object.extension = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.source_code_info = null;
                    object.syntax = "";
                }
                if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] !== undefined && message["package"] !== null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency !== undefined && message.dependency !== null && message.hasOwnProperty("dependency")) {
                    object.dependency = [];
                    for (var j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.public_dependency !== undefined && message.public_dependency !== null && message.hasOwnProperty("public_dependency")) {
                    object.public_dependency = [];
                    for (var j = 0; j < message.public_dependency.length; ++j)
                        object.public_dependency[j] = message.public_dependency[j];
                }
                if (message.weak_dependency !== undefined && message.weak_dependency !== null && message.hasOwnProperty("weak_dependency")) {
                    object.weak_dependency = [];
                    for (var j = 0; j < message.weak_dependency.length; ++j)
                        object.weak_dependency[j] = message.weak_dependency[j];
                }
                if (message.message_type !== undefined && message.message_type !== null && message.hasOwnProperty("message_type")) {
                    object.message_type = [];
                    for (var j = 0; j < message.message_type.length; ++j)
                        object.message_type[j] = $types[5].toObject(message.message_type[j], options);
                }
                if (message.enum_type !== undefined && message.enum_type !== null && message.hasOwnProperty("enum_type")) {
                    object.enum_type = [];
                    for (var j = 0; j < message.enum_type.length; ++j)
                        object.enum_type[j] = $types[6].toObject(message.enum_type[j], options);
                }
                if (message.service !== undefined && message.service !== null && message.hasOwnProperty("service")) {
                    object.service = [];
                    for (var j = 0; j < message.service.length; ++j)
                        object.service[j] = $types[7].toObject(message.service[j], options);
                }
                if (message.extension !== undefined && message.extension !== null && message.hasOwnProperty("extension")) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $types[8].toObject(message.extension[j], options);
                }
                if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                    object.options = $types[9].toObject(message.options, options);
                if (message.source_code_info !== undefined && message.source_code_info !== null && message.hasOwnProperty("source_code_info"))
                    object.source_code_info = $types[10].toObject(message.source_code_info, options);
                if (message.syntax !== undefined && message.syntax !== null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                return object;
            };

            /**
             * Creates a plain object from this FileDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Constructs a new DescriptorProto.
             * @exports google.protobuf.DescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @type {string}
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @type {Array.<google.protobuf.FieldDescriptorProto>}
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @type {Array.<google.protobuf.FieldDescriptorProto>}
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nested_type.
             * @type {Array.<google.protobuf.DescriptorProto>}
             */
            DescriptorProto.prototype.nested_type = $util.emptyArray;

            /**
             * DescriptorProto enum_type.
             * @type {Array.<google.protobuf.EnumDescriptorProto>}
             */
            DescriptorProto.prototype.enum_type = $util.emptyArray;

            /**
             * DescriptorProto extension_range.
             * @type {Array.<google.protobuf.DescriptorProto.ExtensionRange>}
             */
            DescriptorProto.prototype.extension_range = $util.emptyArray;

            /**
             * DescriptorProto oneof_decl.
             * @type {Array.<google.protobuf.OneofDescriptorProto>}
             */
            DescriptorProto.prototype.oneof_decl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @type {google.protobuf.MessageOptions}
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reserved_range.
             * @type {Array.<google.protobuf.DescriptorProto.ReservedRange>}
             */
            DescriptorProto.prototype.reserved_range = $util.emptyArray;

            /**
             * DescriptorProto reserved_name.
             * @type {Array.<string>}
             */
            DescriptorProto.prototype.reserved_name = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.FieldDescriptorProto",
                2: "google.protobuf.FieldDescriptorProto",
                3: "google.protobuf.DescriptorProto",
                4: "google.protobuf.EnumDescriptorProto",
                5: "google.protobuf.DescriptorProto.ExtensionRange",
                6: "google.protobuf.OneofDescriptorProto",
                7: "google.protobuf.MessageOptions",
                8: "google.protobuf.DescriptorProto.ReservedRange"
            }; $lazyTypes.push($types);

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message.
             * @param {google.protobuf.DescriptorProto|Object} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name !== undefined && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field !== undefined && message.hasOwnProperty("field"))
                    for (var i = 0; i < message.field.length; ++i)
                        $types[1].encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.extension !== undefined && message.hasOwnProperty("extension"))
                    for (var i = 0; i < message.extension.length; ++i)
                        $types[2].encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.nested_type !== undefined && message.hasOwnProperty("nested_type"))
                    for (var i = 0; i < message.nested_type.length; ++i)
                        $types[3].encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enum_type !== undefined && message.hasOwnProperty("enum_type"))
                    for (var i = 0; i < message.enum_type.length; ++i)
                        $types[4].encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extension_range !== undefined && message.hasOwnProperty("extension_range"))
                    for (var i = 0; i < message.extension_range.length; ++i)
                        $types[5].encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.oneof_decl !== undefined && message.hasOwnProperty("oneof_decl"))
                    for (var i = 0; i < message.oneof_decl.length; ++i)
                        $types[6].encode(message.oneof_decl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.options && message.hasOwnProperty("options"))
                    $types[7].encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.reserved_range !== undefined && message.hasOwnProperty("reserved_range"))
                    for (var i = 0; i < message.reserved_range.length; ++i)
                        $types[8].encode(message.reserved_range[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reserved_name !== undefined && message.hasOwnProperty("reserved_name"))
                    for (var i = 0; i < message.reserved_name.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reserved_name[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited.
             * @param {google.protobuf.DescriptorProto|Object} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.field && message.field.length))
                            message.field = [];
                        message.field.push($types[1].decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($types[2].decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.nested_type && message.nested_type.length))
                            message.nested_type = [];
                        message.nested_type.push($types[3].decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.enum_type && message.enum_type.length))
                            message.enum_type = [];
                        message.enum_type.push($types[4].decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.extension_range && message.extension_range.length))
                            message.extension_range = [];
                        message.extension_range.push($types[5].decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.oneof_decl && message.oneof_decl.length))
                            message.oneof_decl = [];
                        message.oneof_decl.push($types[6].decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.options = $types[7].decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.reserved_range && message.reserved_range.length))
                            message.reserved_range = [];
                        message.reserved_range.push($types[8].decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.reserved_name && message.reserved_name.length))
                            message.reserved_name = [];
                        message.reserved_name.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @param {google.protobuf.DescriptorProto|Object} message DescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (message.name !== undefined)
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field !== undefined) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (var i = 0; i < message.field.length; ++i) {
                        var error = $types[1].verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension !== undefined) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $types[2].verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nested_type !== undefined) {
                    if (!Array.isArray(message.nested_type))
                        return "nested_type: array expected";
                    for (var i = 0; i < message.nested_type.length; ++i) {
                        var error = $types[3].verify(message.nested_type[i]);
                        if (error)
                            return "nested_type." + error;
                    }
                }
                if (message.enum_type !== undefined) {
                    if (!Array.isArray(message.enum_type))
                        return "enum_type: array expected";
                    for (var i = 0; i < message.enum_type.length; ++i) {
                        var error = $types[4].verify(message.enum_type[i]);
                        if (error)
                            return "enum_type." + error;
                    }
                }
                if (message.extension_range !== undefined) {
                    if (!Array.isArray(message.extension_range))
                        return "extension_range: array expected";
                    for (var i = 0; i < message.extension_range.length; ++i) {
                        var error = $types[5].verify(message.extension_range[i]);
                        if (error)
                            return "extension_range." + error;
                    }
                }
                if (message.oneof_decl !== undefined) {
                    if (!Array.isArray(message.oneof_decl))
                        return "oneof_decl: array expected";
                    for (var i = 0; i < message.oneof_decl.length; ++i) {
                        var error = $types[6].verify(message.oneof_decl[i]);
                        if (error)
                            return "oneof_decl." + error;
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var error = $types[7].verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reserved_range !== undefined) {
                    if (!Array.isArray(message.reserved_range))
                        return "reserved_range: array expected";
                    for (var i = 0; i < message.reserved_range.length; ++i) {
                        var error = $types[8].verify(message.reserved_range[i]);
                        if (error)
                            return "reserved_range." + error;
                    }
                }
                if (message.reserved_name !== undefined) {
                    if (!Array.isArray(message.reserved_name))
                        return "reserved_name: array expected";
                    for (var i = 0; i < message.reserved_name.length; ++i)
                        if (!$util.isString(message.reserved_name[i]))
                            return "reserved_name: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                var message = new $root.google.protobuf.DescriptorProto();
                if (object.name !== undefined && object.name !== null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (var i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $types[1].fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $types[2].fromObject(object.extension[i]);
                    }
                }
                if (object.nested_type) {
                    if (!Array.isArray(object.nested_type))
                        throw TypeError(".google.protobuf.DescriptorProto.nested_type: array expected");
                    message.nested_type = [];
                    for (var i = 0; i < object.nested_type.length; ++i) {
                        if (typeof object.nested_type[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nested_type: object expected");
                        message.nested_type[i] = $types[3].fromObject(object.nested_type[i]);
                    }
                }
                if (object.enum_type) {
                    if (!Array.isArray(object.enum_type))
                        throw TypeError(".google.protobuf.DescriptorProto.enum_type: array expected");
                    message.enum_type = [];
                    for (var i = 0; i < object.enum_type.length; ++i) {
                        if (typeof object.enum_type[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enum_type: object expected");
                        message.enum_type[i] = $types[4].fromObject(object.enum_type[i]);
                    }
                }
                if (object.extension_range) {
                    if (!Array.isArray(object.extension_range))
                        throw TypeError(".google.protobuf.DescriptorProto.extension_range: array expected");
                    message.extension_range = [];
                    for (var i = 0; i < object.extension_range.length; ++i) {
                        if (typeof object.extension_range[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension_range: object expected");
                        message.extension_range[i] = $types[5].fromObject(object.extension_range[i]);
                    }
                }
                if (object.oneof_decl) {
                    if (!Array.isArray(object.oneof_decl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: array expected");
                    message.oneof_decl = [];
                    for (var i = 0; i < object.oneof_decl.length; ++i) {
                        if (typeof object.oneof_decl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: object expected");
                        message.oneof_decl[i] = $types[6].fromObject(object.oneof_decl[i]);
                    }
                }
                if (object.options !== undefined && object.options !== null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $types[7].fromObject(object.options);
                }
                if (object.reserved_range) {
                    if (!Array.isArray(object.reserved_range))
                        throw TypeError(".google.protobuf.DescriptorProto.reserved_range: array expected");
                    message.reserved_range = [];
                    for (var i = 0; i < object.reserved_range.length; ++i) {
                        if (typeof object.reserved_range[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reserved_range: object expected");
                        message.reserved_range[i] = $types[8].fromObject(object.reserved_range[i]);
                    }
                }
                if (object.reserved_name) {
                    if (!Array.isArray(object.reserved_name))
                        throw TypeError(".google.protobuf.DescriptorProto.reserved_name: array expected");
                    message.reserved_name = [];
                    for (var i = 0; i < object.reserved_name.length; ++i)
                        message.reserved_name[i] = String(object.reserved_name[i]);
                }
                return message;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.DescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.from = DescriptorProto.fromObject;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.extension = [];
                    object.nested_type = [];
                    object.enum_type = [];
                    object.extension_range = [];
                    object.oneof_decl = [];
                    object.reserved_range = [];
                    object.reserved_name = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field !== undefined && message.field !== null && message.hasOwnProperty("field")) {
                    object.field = [];
                    for (var j = 0; j < message.field.length; ++j)
                        object.field[j] = $types[1].toObject(message.field[j], options);
                }
                if (message.extension !== undefined && message.extension !== null && message.hasOwnProperty("extension")) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $types[2].toObject(message.extension[j], options);
                }
                if (message.nested_type !== undefined && message.nested_type !== null && message.hasOwnProperty("nested_type")) {
                    object.nested_type = [];
                    for (var j = 0; j < message.nested_type.length; ++j)
                        object.nested_type[j] = $types[3].toObject(message.nested_type[j], options);
                }
                if (message.enum_type !== undefined && message.enum_type !== null && message.hasOwnProperty("enum_type")) {
                    object.enum_type = [];
                    for (var j = 0; j < message.enum_type.length; ++j)
                        object.enum_type[j] = $types[4].toObject(message.enum_type[j], options);
                }
                if (message.extension_range !== undefined && message.extension_range !== null && message.hasOwnProperty("extension_range")) {
                    object.extension_range = [];
                    for (var j = 0; j < message.extension_range.length; ++j)
                        object.extension_range[j] = $types[5].toObject(message.extension_range[j], options);
                }
                if (message.oneof_decl !== undefined && message.oneof_decl !== null && message.hasOwnProperty("oneof_decl")) {
                    object.oneof_decl = [];
                    for (var j = 0; j < message.oneof_decl.length; ++j)
                        object.oneof_decl[j] = $types[6].toObject(message.oneof_decl[j], options);
                }
                if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                    object.options = $types[7].toObject(message.options, options);
                if (message.reserved_range !== undefined && message.reserved_range !== null && message.hasOwnProperty("reserved_range")) {
                    object.reserved_range = [];
                    for (var j = 0; j < message.reserved_range.length; ++j)
                        object.reserved_range[j] = $types[8].toObject(message.reserved_range[j], options);
                }
                if (message.reserved_name !== undefined && message.reserved_name !== null && message.hasOwnProperty("reserved_name")) {
                    object.reserved_name = [];
                    for (var j = 0; j < message.reserved_name.length; ++j)
                        object.reserved_name[j] = message.reserved_name[j];
                }
                return object;
            };

            /**
             * Creates a plain object from this DescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Constructs a new ExtensionRange.
                 * @exports google.protobuf.DescriptorProto.ExtensionRange
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @type {number}
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @type {number}
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange|Object} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start !== undefined && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end !== undefined && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange|Object} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange|Object} message ExtensionRange message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (message.start !== undefined)
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end !== undefined)
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start !== undefined && object.start !== null)
                        message.start = object.start | 0;
                    if (object.end !== undefined && object.end !== null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.DescriptorProto.ExtensionRange.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.from = ExtensionRange.fromObject;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start !== undefined && message.start !== null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end !== undefined && message.end !== null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Creates a plain object from this ExtensionRange message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Constructs a new ReservedRange.
                 * @exports google.protobuf.DescriptorProto.ReservedRange
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @type {number}
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @type {number}
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message.
                 * @param {google.protobuf.DescriptorProto.ReservedRange|Object} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start !== undefined && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end !== undefined && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited.
                 * @param {google.protobuf.DescriptorProto.ReservedRange|Object} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @param {google.protobuf.DescriptorProto.ReservedRange|Object} message ReservedRange message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (message.start !== undefined)
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end !== undefined)
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start !== undefined && object.start !== null)
                        message.start = object.start | 0;
                    if (object.end !== undefined && object.end !== null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.DescriptorProto.ReservedRange.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.from = ReservedRange.fromObject;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start !== undefined && message.start !== null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end !== undefined && message.end !== null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Creates a plain object from this ReservedRange message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Constructs a new FieldDescriptorProto.
             * @exports google.protobuf.FieldDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @type {string}
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @type {number}
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @type {number}
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @type {number}
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto type_name.
             * @type {string}
             */
            FieldDescriptorProto.prototype.type_name = "";

            /**
             * FieldDescriptorProto extendee.
             * @type {string}
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto default_value.
             * @type {string}
             */
            FieldDescriptorProto.prototype.default_value = "";

            /**
             * FieldDescriptorProto oneof_index.
             * @type {number}
             */
            FieldDescriptorProto.prototype.oneof_index = 0;

            /**
             * FieldDescriptorProto json_name.
             * @type {string}
             */
            FieldDescriptorProto.prototype.json_name = "";

            /**
             * FieldDescriptorProto options.
             * @type {google.protobuf.FieldOptions}
             */
            FieldDescriptorProto.prototype.options = null;

            // Lazily resolved type references
            var $types = {
                2: "google.protobuf.FieldDescriptorProto.Label",
                3: "google.protobuf.FieldDescriptorProto.Type",
                9: "google.protobuf.FieldOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message.
             * @param {google.protobuf.FieldDescriptorProto|Object} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name !== undefined && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number !== undefined && message.hasOwnProperty("number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label !== undefined && message.hasOwnProperty("label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.label);
                if (message.type !== undefined && message.hasOwnProperty("type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.type);
                if (message.type_name !== undefined && message.hasOwnProperty("type_name"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                if (message.extendee !== undefined && message.hasOwnProperty("extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.default_value !== undefined && message.hasOwnProperty("default_value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                if (message.oneof_index !== undefined && message.hasOwnProperty("oneof_index"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneof_index);
                if (message.json_name !== undefined && message.hasOwnProperty("json_name"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.json_name);
                if (message.options && message.hasOwnProperty("options"))
                    $types[9].encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited.
             * @param {google.protobuf.FieldDescriptorProto|Object} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.number = reader.int32();
                        break;
                    case 4:
                        message.label = reader.uint32();
                        break;
                    case 5:
                        message.type = reader.uint32();
                        break;
                    case 6:
                        message.type_name = reader.string();
                        break;
                    case 2:
                        message.extendee = reader.string();
                        break;
                    case 7:
                        message.default_value = reader.string();
                        break;
                    case 9:
                        message.oneof_index = reader.int32();
                        break;
                    case 10:
                        message.json_name = reader.string();
                        break;
                    case 8:
                        message.options = $types[9].decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @param {google.protobuf.FieldDescriptorProto|Object} message FieldDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined)
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number !== undefined)
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label !== undefined)
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type !== undefined)
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.type_name !== undefined)
                    if (!$util.isString(message.type_name))
                        return "type_name: string expected";
                if (message.extendee !== undefined)
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.default_value !== undefined)
                    if (!$util.isString(message.default_value))
                        return "default_value: string expected";
                if (message.oneof_index !== undefined)
                    if (!$util.isInteger(message.oneof_index))
                        return "oneof_index: integer expected";
                if (message.json_name !== undefined)
                    if (!$util.isString(message.json_name))
                        return "json_name: string expected";
                if (message.options !== undefined && message.options !== null) {
                    var error = $types[9].verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name !== undefined && object.name !== null)
                    message.name = String(object.name);
                if (object.number !== undefined && object.number !== null)
                    message.number = object.number | 0;
                switch (object.label) {
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.type_name !== undefined && object.type_name !== null)
                    message.type_name = String(object.type_name);
                if (object.extendee !== undefined && object.extendee !== null)
                    message.extendee = String(object.extendee);
                if (object.default_value !== undefined && object.default_value !== null)
                    message.default_value = String(object.default_value);
                if (object.oneof_index !== undefined && object.oneof_index !== null)
                    message.oneof_index = object.oneof_index | 0;
                if (object.json_name !== undefined && object.json_name !== null)
                    message.json_name = String(object.json_name);
                if (object.options !== undefined && object.options !== null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $types[9].fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FieldDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.from = FieldDescriptorProto.fromObject;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.type_name = "";
                    object.extendee = "";
                    object.default_value = "";
                    object.oneof_index = 0;
                    object.json_name = "";
                    object.options = null;
                }
                if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number !== undefined && message.number !== null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label !== undefined && message.label !== null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $types[2][message.label] : message.label;
                if (message.type !== undefined && message.type !== null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $types[3][message.type] : message.type;
                if (message.type_name !== undefined && message.type_name !== null && message.hasOwnProperty("type_name"))
                    object.type_name = message.type_name;
                if (message.extendee !== undefined && message.extendee !== null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.default_value !== undefined && message.default_value !== null && message.hasOwnProperty("default_value"))
                    object.default_value = message.default_value;
                if (message.oneof_index !== undefined && message.oneof_index !== null && message.hasOwnProperty("oneof_index"))
                    object.oneof_index = message.oneof_index;
                if (message.json_name !== undefined && message.json_name !== null && message.hasOwnProperty("json_name"))
                    object.json_name = message.json_name;
                if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                    object.options = $types[9].toObject(message.options, options);
                return object;
            };

            /**
             * Creates a plain object from this FieldDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name Type
             * @memberof google.protobuf.FieldDescriptorProto
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name Label
             * @memberof google.protobuf.FieldDescriptorProto
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Constructs a new OneofDescriptorProto.
             * @exports google.protobuf.OneofDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @type {string}
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @type {google.protobuf.OneofOptions}
             */
            OneofDescriptorProto.prototype.options = null;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.OneofOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message.
             * @param {google.protobuf.OneofDescriptorProto|Object} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name !== undefined && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options && message.hasOwnProperty("options"))
                    $types[1].encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited.
             * @param {google.protobuf.OneofDescriptorProto|Object} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.options = $types[1].decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @param {google.protobuf.OneofDescriptorProto|Object} message OneofDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined)
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options !== undefined && message.options !== null) {
                    var error = $types[1].verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name !== undefined && object.name !== null)
                    message.name = String(object.name);
                if (object.options !== undefined && object.options !== null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $types[1].fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.OneofDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.from = OneofDescriptorProto.fromObject;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                    object.options = $types[1].toObject(message.options, options);
                return object;
            };

            /**
             * Creates a plain object from this OneofDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Constructs a new EnumDescriptorProto.
             * @exports google.protobuf.EnumDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @type {string}
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @type {Array.<google.protobuf.EnumValueDescriptorProto>}
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @type {google.protobuf.EnumOptions}
             */
            EnumDescriptorProto.prototype.options = null;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.EnumValueDescriptorProto",
                2: "google.protobuf.EnumOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message.
             * @param {google.protobuf.EnumDescriptorProto|Object} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name !== undefined && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value !== undefined && message.hasOwnProperty("value"))
                    for (var i = 0; i < message.value.length; ++i)
                        $types[1].encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options && message.hasOwnProperty("options"))
                    $types[2].encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited.
             * @param {google.protobuf.EnumDescriptorProto|Object} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($types[1].decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $types[2].decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @param {google.protobuf.EnumDescriptorProto|Object} message EnumDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined)
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value !== undefined) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i) {
                        var error = $types[1].verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var error = $types[2].verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name !== undefined && object.name !== null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $types[1].fromObject(object.value[i]);
                    }
                }
                if (object.options !== undefined && object.options !== null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $types[2].fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.from = EnumDescriptorProto.fromObject;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value !== undefined && message.value !== null && message.hasOwnProperty("value")) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = $types[1].toObject(message.value[j], options);
                }
                if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                    object.options = $types[2].toObject(message.options, options);
                return object;
            };

            /**
             * Creates a plain object from this EnumDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @exports google.protobuf.EnumValueDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @type {string}
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @type {number}
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @type {google.protobuf.EnumValueOptions}
             */
            EnumValueDescriptorProto.prototype.options = null;

            // Lazily resolved type references
            var $types = {
                2: "google.protobuf.EnumValueOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message.
             * @param {google.protobuf.EnumValueDescriptorProto|Object} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name !== undefined && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number !== undefined && message.hasOwnProperty("number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options && message.hasOwnProperty("options"))
                    $types[2].encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited.
             * @param {google.protobuf.EnumValueDescriptorProto|Object} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        message.options = $types[2].decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param {google.protobuf.EnumValueDescriptorProto|Object} message EnumValueDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined)
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number !== undefined)
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options !== undefined && message.options !== null) {
                    var error = $types[2].verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name !== undefined && object.name !== null)
                    message.name = String(object.name);
                if (object.number !== undefined && object.number !== null)
                    message.number = object.number | 0;
                if (object.options !== undefined && object.options !== null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $types[2].fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumValueDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.from = EnumValueDescriptorProto.fromObject;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number !== undefined && message.number !== null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                    object.options = $types[2].toObject(message.options, options);
                return object;
            };

            /**
             * Creates a plain object from this EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @exports google.protobuf.ServiceDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @type {string}
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @type {Array.<google.protobuf.MethodDescriptorProto>}
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @type {google.protobuf.ServiceOptions}
             */
            ServiceDescriptorProto.prototype.options = null;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.MethodDescriptorProto",
                2: "google.protobuf.ServiceOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message.
             * @param {google.protobuf.ServiceDescriptorProto|Object} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name !== undefined && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method !== undefined && message.hasOwnProperty("method"))
                    for (var i = 0; i < message.method.length; ++i)
                        $types[1].encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options && message.hasOwnProperty("options"))
                    $types[2].encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited.
             * @param {google.protobuf.ServiceDescriptorProto|Object} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.method && message.method.length))
                            message.method = [];
                        message.method.push($types[1].decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $types[2].decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param {google.protobuf.ServiceDescriptorProto|Object} message ServiceDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined)
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method !== undefined) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (var i = 0; i < message.method.length; ++i) {
                        var error = $types[1].verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options !== undefined && message.options !== null) {
                    var error = $types[2].verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name !== undefined && object.name !== null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (var i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $types[1].fromObject(object.method[i]);
                    }
                }
                if (object.options !== undefined && object.options !== null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $types[2].fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.ServiceDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.from = ServiceDescriptorProto.fromObject;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method !== undefined && message.method !== null && message.hasOwnProperty("method")) {
                    object.method = [];
                    for (var j = 0; j < message.method.length; ++j)
                        object.method[j] = $types[1].toObject(message.method[j], options);
                }
                if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                    object.options = $types[2].toObject(message.options, options);
                return object;
            };

            /**
             * Creates a plain object from this ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Constructs a new MethodDescriptorProto.
             * @exports google.protobuf.MethodDescriptorProto
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @type {string}
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto input_type.
             * @type {string}
             */
            MethodDescriptorProto.prototype.input_type = "";

            /**
             * MethodDescriptorProto output_type.
             * @type {string}
             */
            MethodDescriptorProto.prototype.output_type = "";

            /**
             * MethodDescriptorProto options.
             * @type {google.protobuf.MethodOptions}
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto client_streaming.
             * @type {boolean}
             */
            MethodDescriptorProto.prototype.client_streaming = false;

            /**
             * MethodDescriptorProto server_streaming.
             * @type {boolean}
             */
            MethodDescriptorProto.prototype.server_streaming = false;

            // Lazily resolved type references
            var $types = {
                3: "google.protobuf.MethodOptions"
            }; $lazyTypes.push($types);

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message.
             * @param {google.protobuf.MethodDescriptorProto|Object} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name !== undefined && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.input_type !== undefined && message.hasOwnProperty("input_type"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                if (message.output_type !== undefined && message.hasOwnProperty("output_type"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                if (message.options && message.hasOwnProperty("options"))
                    $types[3].encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.client_streaming !== undefined && message.hasOwnProperty("client_streaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.client_streaming);
                if (message.server_streaming !== undefined && message.hasOwnProperty("server_streaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.server_streaming);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited.
             * @param {google.protobuf.MethodDescriptorProto|Object} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.input_type = reader.string();
                        break;
                    case 3:
                        message.output_type = reader.string();
                        break;
                    case 4:
                        message.options = $types[3].decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.client_streaming = reader.bool();
                        break;
                    case 6:
                        message.server_streaming = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @param {google.protobuf.MethodDescriptorProto|Object} message MethodDescriptorProto message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (message.name !== undefined)
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.input_type !== undefined)
                    if (!$util.isString(message.input_type))
                        return "input_type: string expected";
                if (message.output_type !== undefined)
                    if (!$util.isString(message.output_type))
                        return "output_type: string expected";
                if (message.options !== undefined && message.options !== null) {
                    var error = $types[3].verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.client_streaming !== undefined)
                    if (typeof message.client_streaming !== "boolean")
                        return "client_streaming: boolean expected";
                if (message.server_streaming !== undefined)
                    if (typeof message.server_streaming !== "boolean")
                        return "server_streaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name !== undefined && object.name !== null)
                    message.name = String(object.name);
                if (object.input_type !== undefined && object.input_type !== null)
                    message.input_type = String(object.input_type);
                if (object.output_type !== undefined && object.output_type !== null)
                    message.output_type = String(object.output_type);
                if (object.options !== undefined && object.options !== null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $types[3].fromObject(object.options);
                }
                if (object.client_streaming !== undefined && object.client_streaming !== null)
                    message.client_streaming = Boolean(object.client_streaming);
                if (object.server_streaming !== undefined && object.server_streaming !== null)
                    message.server_streaming = Boolean(object.server_streaming);
                return message;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.MethodDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.from = MethodDescriptorProto.fromObject;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.input_type = "";
                    object.output_type = "";
                    object.options = null;
                    object.client_streaming = false;
                    object.server_streaming = false;
                }
                if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.input_type !== undefined && message.input_type !== null && message.hasOwnProperty("input_type"))
                    object.input_type = message.input_type;
                if (message.output_type !== undefined && message.output_type !== null && message.hasOwnProperty("output_type"))
                    object.output_type = message.output_type;
                if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                    object.options = $types[3].toObject(message.options, options);
                if (message.client_streaming !== undefined && message.client_streaming !== null && message.hasOwnProperty("client_streaming"))
                    object.client_streaming = message.client_streaming;
                if (message.server_streaming !== undefined && message.server_streaming !== null && message.hasOwnProperty("server_streaming"))
                    object.server_streaming = message.server_streaming;
                return object;
            };

            /**
             * Creates a plain object from this MethodDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Constructs a new FileOptions.
             * @exports google.protobuf.FileOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function FileOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions java_package.
             * @type {string}
             */
            FileOptions.prototype.java_package = "";

            /**
             * FileOptions java_outer_classname.
             * @type {string}
             */
            FileOptions.prototype.java_outer_classname = "";

            /**
             * FileOptions java_multiple_files.
             * @type {boolean}
             */
            FileOptions.prototype.java_multiple_files = false;

            /**
             * FileOptions java_generate_equals_and_hash.
             * @type {boolean}
             */
            FileOptions.prototype.java_generate_equals_and_hash = false;

            /**
             * FileOptions java_string_check_utf8.
             * @type {boolean}
             */
            FileOptions.prototype.java_string_check_utf8 = false;

            /**
             * FileOptions optimize_for.
             * @type {number}
             */
            FileOptions.prototype.optimize_for = 1;

            /**
             * FileOptions go_package.
             * @type {string}
             */
            FileOptions.prototype.go_package = "";

            /**
             * FileOptions cc_generic_services.
             * @type {boolean}
             */
            FileOptions.prototype.cc_generic_services = false;

            /**
             * FileOptions java_generic_services.
             * @type {boolean}
             */
            FileOptions.prototype.java_generic_services = false;

            /**
             * FileOptions py_generic_services.
             * @type {boolean}
             */
            FileOptions.prototype.py_generic_services = false;

            /**
             * FileOptions deprecated.
             * @type {boolean}
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions cc_enable_arenas.
             * @type {boolean}
             */
            FileOptions.prototype.cc_enable_arenas = false;

            /**
             * FileOptions objc_class_prefix.
             * @type {string}
             */
            FileOptions.prototype.objc_class_prefix = "";

            /**
             * FileOptions csharp_namespace.
             * @type {string}
             */
            FileOptions.prototype.csharp_namespace = "";

            /**
             * FileOptions swift_prefix.
             * @type {string}
             */
            FileOptions.prototype.swift_prefix = "";

            /**
             * FileOptions uninterpreted_option.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            FileOptions.prototype.uninterpreted_option = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                5: "google.protobuf.FileOptions.OptimizeMode",
                15: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message.
             * @param {google.protobuf.FileOptions|Object} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.java_package !== undefined && message.hasOwnProperty("java_package"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                if (message.java_outer_classname !== undefined && message.hasOwnProperty("java_outer_classname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                if (message.java_multiple_files !== undefined && message.hasOwnProperty("java_multiple_files"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                if (message.java_generate_equals_and_hash !== undefined && message.hasOwnProperty("java_generate_equals_and_hash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                if (message.java_string_check_utf8 !== undefined && message.hasOwnProperty("java_string_check_utf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.java_string_check_utf8);
                if (message.optimize_for !== undefined && message.hasOwnProperty("optimize_for"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.optimize_for);
                if (message.go_package !== undefined && message.hasOwnProperty("go_package"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.go_package);
                if (message.cc_generic_services !== undefined && message.hasOwnProperty("cc_generic_services"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                if (message.java_generic_services !== undefined && message.hasOwnProperty("java_generic_services"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                if (message.py_generic_services !== undefined && message.hasOwnProperty("py_generic_services"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.cc_enable_arenas !== undefined && message.hasOwnProperty("cc_enable_arenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.cc_enable_arenas);
                if (message.objc_class_prefix !== undefined && message.hasOwnProperty("objc_class_prefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objc_class_prefix);
                if (message.csharp_namespace !== undefined && message.hasOwnProperty("csharp_namespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharp_namespace);
                if (message.swift_prefix !== undefined && message.hasOwnProperty("swift_prefix"))
                    writer.uint32(/* id 39, wireType 2 =*/314).string(message.swift_prefix);
                if (message.uninterpreted_option !== undefined && message.hasOwnProperty("uninterpreted_option"))
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $types[15].encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited.
             * @param {google.protobuf.FileOptions|Object} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.java_package = reader.string();
                        break;
                    case 8:
                        message.java_outer_classname = reader.string();
                        break;
                    case 10:
                        message.java_multiple_files = reader.bool();
                        break;
                    case 20:
                        message.java_generate_equals_and_hash = reader.bool();
                        break;
                    case 27:
                        message.java_string_check_utf8 = reader.bool();
                        break;
                    case 9:
                        message.optimize_for = reader.uint32();
                        break;
                    case 11:
                        message.go_package = reader.string();
                        break;
                    case 16:
                        message.cc_generic_services = reader.bool();
                        break;
                    case 17:
                        message.java_generic_services = reader.bool();
                        break;
                    case 18:
                        message.py_generic_services = reader.bool();
                        break;
                    case 23:
                        message.deprecated = reader.bool();
                        break;
                    case 31:
                        message.cc_enable_arenas = reader.bool();
                        break;
                    case 36:
                        message.objc_class_prefix = reader.string();
                        break;
                    case 37:
                        message.csharp_namespace = reader.string();
                        break;
                    case 39:
                        message.swift_prefix = reader.string();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($types[15].decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @param {google.protobuf.FileOptions|Object} message FileOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (message.java_package !== undefined)
                    if (!$util.isString(message.java_package))
                        return "java_package: string expected";
                if (message.java_outer_classname !== undefined)
                    if (!$util.isString(message.java_outer_classname))
                        return "java_outer_classname: string expected";
                if (message.java_multiple_files !== undefined)
                    if (typeof message.java_multiple_files !== "boolean")
                        return "java_multiple_files: boolean expected";
                if (message.java_generate_equals_and_hash !== undefined)
                    if (typeof message.java_generate_equals_and_hash !== "boolean")
                        return "java_generate_equals_and_hash: boolean expected";
                if (message.java_string_check_utf8 !== undefined)
                    if (typeof message.java_string_check_utf8 !== "boolean")
                        return "java_string_check_utf8: boolean expected";
                if (message.optimize_for !== undefined)
                    switch (message.optimize_for) {
                    default:
                        return "optimize_for: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.go_package !== undefined)
                    if (!$util.isString(message.go_package))
                        return "go_package: string expected";
                if (message.cc_generic_services !== undefined)
                    if (typeof message.cc_generic_services !== "boolean")
                        return "cc_generic_services: boolean expected";
                if (message.java_generic_services !== undefined)
                    if (typeof message.java_generic_services !== "boolean")
                        return "java_generic_services: boolean expected";
                if (message.py_generic_services !== undefined)
                    if (typeof message.py_generic_services !== "boolean")
                        return "py_generic_services: boolean expected";
                if (message.deprecated !== undefined)
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.cc_enable_arenas !== undefined)
                    if (typeof message.cc_enable_arenas !== "boolean")
                        return "cc_enable_arenas: boolean expected";
                if (message.objc_class_prefix !== undefined)
                    if (!$util.isString(message.objc_class_prefix))
                        return "objc_class_prefix: string expected";
                if (message.csharp_namespace !== undefined)
                    if (!$util.isString(message.csharp_namespace))
                        return "csharp_namespace: string expected";
                if (message.swift_prefix !== undefined)
                    if (!$util.isString(message.swift_prefix))
                        return "swift_prefix: string expected";
                if (message.uninterpreted_option !== undefined) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $types[15].verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                var message = new $root.google.protobuf.FileOptions();
                if (object.java_package !== undefined && object.java_package !== null)
                    message.java_package = String(object.java_package);
                if (object.java_outer_classname !== undefined && object.java_outer_classname !== null)
                    message.java_outer_classname = String(object.java_outer_classname);
                if (object.java_multiple_files !== undefined && object.java_multiple_files !== null)
                    message.java_multiple_files = Boolean(object.java_multiple_files);
                if (object.java_generate_equals_and_hash !== undefined && object.java_generate_equals_and_hash !== null)
                    message.java_generate_equals_and_hash = Boolean(object.java_generate_equals_and_hash);
                if (object.java_string_check_utf8 !== undefined && object.java_string_check_utf8 !== null)
                    message.java_string_check_utf8 = Boolean(object.java_string_check_utf8);
                switch (object.optimize_for) {
                case "SPEED":
                case 1:
                    message.optimize_for = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimize_for = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimize_for = 3;
                    break;
                }
                if (object.go_package !== undefined && object.go_package !== null)
                    message.go_package = String(object.go_package);
                if (object.cc_generic_services !== undefined && object.cc_generic_services !== null)
                    message.cc_generic_services = Boolean(object.cc_generic_services);
                if (object.java_generic_services !== undefined && object.java_generic_services !== null)
                    message.java_generic_services = Boolean(object.java_generic_services);
                if (object.py_generic_services !== undefined && object.py_generic_services !== null)
                    message.py_generic_services = Boolean(object.py_generic_services);
                if (object.deprecated !== undefined && object.deprecated !== null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.cc_enable_arenas !== undefined && object.cc_enable_arenas !== null)
                    message.cc_enable_arenas = Boolean(object.cc_enable_arenas);
                if (object.objc_class_prefix !== undefined && object.objc_class_prefix !== null)
                    message.objc_class_prefix = String(object.objc_class_prefix);
                if (object.csharp_namespace !== undefined && object.csharp_namespace !== null)
                    message.csharp_namespace = String(object.csharp_namespace);
                if (object.swift_prefix !== undefined && object.swift_prefix !== null)
                    message.swift_prefix = String(object.swift_prefix);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $types[15].fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FileOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.from = FileOptions.fromObject;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.java_package = "";
                    object.java_outer_classname = "";
                    object.java_multiple_files = false;
                    object.java_generate_equals_and_hash = false;
                    object.java_string_check_utf8 = false;
                    object.optimize_for = options.enums === String ? "SPEED" : 1;
                    object.go_package = "";
                    object.cc_generic_services = false;
                    object.java_generic_services = false;
                    object.py_generic_services = false;
                    object.deprecated = false;
                    object.cc_enable_arenas = false;
                    object.objc_class_prefix = "";
                    object.csharp_namespace = "";
                    object.swift_prefix = "";
                }
                if (message.java_package !== undefined && message.java_package !== null && message.hasOwnProperty("java_package"))
                    object.java_package = message.java_package;
                if (message.java_outer_classname !== undefined && message.java_outer_classname !== null && message.hasOwnProperty("java_outer_classname"))
                    object.java_outer_classname = message.java_outer_classname;
                if (message.java_multiple_files !== undefined && message.java_multiple_files !== null && message.hasOwnProperty("java_multiple_files"))
                    object.java_multiple_files = message.java_multiple_files;
                if (message.java_generate_equals_and_hash !== undefined && message.java_generate_equals_and_hash !== null && message.hasOwnProperty("java_generate_equals_and_hash"))
                    object.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
                if (message.java_string_check_utf8 !== undefined && message.java_string_check_utf8 !== null && message.hasOwnProperty("java_string_check_utf8"))
                    object.java_string_check_utf8 = message.java_string_check_utf8;
                if (message.optimize_for !== undefined && message.optimize_for !== null && message.hasOwnProperty("optimize_for"))
                    object.optimize_for = options.enums === String ? $types[5][message.optimize_for] : message.optimize_for;
                if (message.go_package !== undefined && message.go_package !== null && message.hasOwnProperty("go_package"))
                    object.go_package = message.go_package;
                if (message.cc_generic_services !== undefined && message.cc_generic_services !== null && message.hasOwnProperty("cc_generic_services"))
                    object.cc_generic_services = message.cc_generic_services;
                if (message.java_generic_services !== undefined && message.java_generic_services !== null && message.hasOwnProperty("java_generic_services"))
                    object.java_generic_services = message.java_generic_services;
                if (message.py_generic_services !== undefined && message.py_generic_services !== null && message.hasOwnProperty("py_generic_services"))
                    object.py_generic_services = message.py_generic_services;
                if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.cc_enable_arenas !== undefined && message.cc_enable_arenas !== null && message.hasOwnProperty("cc_enable_arenas"))
                    object.cc_enable_arenas = message.cc_enable_arenas;
                if (message.objc_class_prefix !== undefined && message.objc_class_prefix !== null && message.hasOwnProperty("objc_class_prefix"))
                    object.objc_class_prefix = message.objc_class_prefix;
                if (message.csharp_namespace !== undefined && message.csharp_namespace !== null && message.hasOwnProperty("csharp_namespace"))
                    object.csharp_namespace = message.csharp_namespace;
                if (message.swift_prefix !== undefined && message.swift_prefix !== null && message.hasOwnProperty("swift_prefix"))
                    object.swift_prefix = message.swift_prefix;
                if (message.uninterpreted_option !== undefined && message.uninterpreted_option !== null && message.hasOwnProperty("uninterpreted_option")) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $types[15].toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this FileOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FileOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * OptimizeMode enum.
             * @name OptimizeMode
             * @memberof google.protobuf.FileOptions
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Constructs a new MessageOptions.
             * @exports google.protobuf.MessageOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function MessageOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions message_set_wire_format.
             * @type {boolean}
             */
            MessageOptions.prototype.message_set_wire_format = false;

            /**
             * MessageOptions no_standard_descriptor_accessor.
             * @type {boolean}
             */
            MessageOptions.prototype.no_standard_descriptor_accessor = false;

            /**
             * MessageOptions deprecated.
             * @type {boolean}
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions map_entry.
             * @type {boolean}
             */
            MessageOptions.prototype.map_entry = false;

            /**
             * MessageOptions uninterpreted_option.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            MessageOptions.prototype.uninterpreted_option = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                4: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message.
             * @param {google.protobuf.MessageOptions|Object} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message_set_wire_format !== undefined && message.hasOwnProperty("message_set_wire_format"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                if (message.no_standard_descriptor_accessor !== undefined && message.hasOwnProperty("no_standard_descriptor_accessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.map_entry !== undefined && message.hasOwnProperty("map_entry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.map_entry);
                if (message.uninterpreted_option !== undefined && message.hasOwnProperty("uninterpreted_option"))
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $types[4].encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited.
             * @param {google.protobuf.MessageOptions|Object} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message_set_wire_format = reader.bool();
                        break;
                    case 2:
                        message.no_standard_descriptor_accessor = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 7:
                        message.map_entry = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($types[4].decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @param {google.protobuf.MessageOptions|Object} message MessageOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (message.message_set_wire_format !== undefined)
                    if (typeof message.message_set_wire_format !== "boolean")
                        return "message_set_wire_format: boolean expected";
                if (message.no_standard_descriptor_accessor !== undefined)
                    if (typeof message.no_standard_descriptor_accessor !== "boolean")
                        return "no_standard_descriptor_accessor: boolean expected";
                if (message.deprecated !== undefined)
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.map_entry !== undefined)
                    if (typeof message.map_entry !== "boolean")
                        return "map_entry: boolean expected";
                if (message.uninterpreted_option !== undefined) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $types[4].verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                var message = new $root.google.protobuf.MessageOptions();
                if (object.message_set_wire_format !== undefined && object.message_set_wire_format !== null)
                    message.message_set_wire_format = Boolean(object.message_set_wire_format);
                if (object.no_standard_descriptor_accessor !== undefined && object.no_standard_descriptor_accessor !== null)
                    message.no_standard_descriptor_accessor = Boolean(object.no_standard_descriptor_accessor);
                if (object.deprecated !== undefined && object.deprecated !== null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.map_entry !== undefined && object.map_entry !== null)
                    message.map_entry = Boolean(object.map_entry);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $types[4].fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.MessageOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.from = MessageOptions.fromObject;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.message_set_wire_format = false;
                    object.no_standard_descriptor_accessor = false;
                    object.deprecated = false;
                    object.map_entry = false;
                }
                if (message.message_set_wire_format !== undefined && message.message_set_wire_format !== null && message.hasOwnProperty("message_set_wire_format"))
                    object.message_set_wire_format = message.message_set_wire_format;
                if (message.no_standard_descriptor_accessor !== undefined && message.no_standard_descriptor_accessor !== null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                    object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.map_entry !== undefined && message.map_entry !== null && message.hasOwnProperty("map_entry"))
                    object.map_entry = message.map_entry;
                if (message.uninterpreted_option !== undefined && message.uninterpreted_option !== null && message.hasOwnProperty("uninterpreted_option")) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $types[4].toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this MessageOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this MessageOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Constructs a new FieldOptions.
             * @exports google.protobuf.FieldOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function FieldOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @type {number}
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @type {boolean}
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @type {number}
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @type {boolean}
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @type {boolean}
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @type {boolean}
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpreted_option.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            FieldOptions.prototype.uninterpreted_option = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.FieldOptions.CType",
                2: "google.protobuf.FieldOptions.JSType",
                6: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message.
             * @param {google.protobuf.FieldOptions|Object} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype !== undefined && message.hasOwnProperty("ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ctype);
                if (message.packed !== undefined && message.hasOwnProperty("packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.jstype !== undefined && message.hasOwnProperty("jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.jstype);
                if (message.lazy !== undefined && message.hasOwnProperty("lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.weak !== undefined && message.hasOwnProperty("weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpreted_option !== undefined && message.hasOwnProperty("uninterpreted_option"))
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $types[6].encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited.
             * @param {google.protobuf.FieldOptions|Object} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.uint32();
                        break;
                    case 2:
                        message.packed = reader.bool();
                        break;
                    case 6:
                        message.jstype = reader.uint32();
                        break;
                    case 5:
                        message.lazy = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 10:
                        message.weak = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($types[6].decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @param {google.protobuf.FieldOptions|Object} message FieldOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (message.ctype !== undefined)
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed !== undefined)
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype !== undefined)
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy !== undefined)
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.deprecated !== undefined)
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak !== undefined)
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpreted_option !== undefined) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $types[6].verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                var message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed !== undefined && object.packed !== null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy !== undefined && object.lazy !== null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated !== undefined && object.deprecated !== null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak !== undefined && object.weak !== null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $types[6].fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FieldOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.from = FieldOptions.fromObject;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.lazy = false;
                    object.deprecated = false;
                    object.weak = false;
                }
                if (message.ctype !== undefined && message.ctype !== null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $types[0][message.ctype] : message.ctype;
                if (message.packed !== undefined && message.packed !== null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.jstype !== undefined && message.jstype !== null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $types[2][message.jstype] : message.jstype;
                if (message.lazy !== undefined && message.lazy !== null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.weak !== undefined && message.weak !== null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpreted_option !== undefined && message.uninterpreted_option !== null && message.hasOwnProperty("uninterpreted_option")) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $types[6].toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this FieldOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FieldOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * CType enum.
             * @name CType
             * @memberof google.protobuf.FieldOptions
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name JSType
             * @memberof google.protobuf.FieldOptions
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Constructs a new OneofOptions.
             * @exports google.protobuf.OneofOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function OneofOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpreted_option.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            OneofOptions.prototype.uninterpreted_option = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message.
             * @param {google.protobuf.OneofOptions|Object} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpreted_option !== undefined && message.hasOwnProperty("uninterpreted_option"))
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $types[0].encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited.
             * @param {google.protobuf.OneofOptions|Object} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($types[0].decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @param {google.protobuf.OneofOptions|Object} message OneofOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (message.uninterpreted_option !== undefined) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $types[0].verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                var message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $types[0].fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.OneofOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.from = OneofOptions.fromObject;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (message.uninterpreted_option !== undefined && message.uninterpreted_option !== null && message.hasOwnProperty("uninterpreted_option")) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $types[0].toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this OneofOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this OneofOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Constructs a new EnumOptions.
             * @exports google.protobuf.EnumOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function EnumOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allow_alias.
             * @type {boolean}
             */
            EnumOptions.prototype.allow_alias = false;

            /**
             * EnumOptions deprecated.
             * @type {boolean}
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpreted_option.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            EnumOptions.prototype.uninterpreted_option = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                2: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message.
             * @param {google.protobuf.EnumOptions|Object} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allow_alias !== undefined && message.hasOwnProperty("allow_alias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow_alias);
                if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpreted_option !== undefined && message.hasOwnProperty("uninterpreted_option"))
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $types[2].encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited.
             * @param {google.protobuf.EnumOptions|Object} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allow_alias = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($types[2].decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @param {google.protobuf.EnumOptions|Object} message EnumOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (message.allow_alias !== undefined)
                    if (typeof message.allow_alias !== "boolean")
                        return "allow_alias: boolean expected";
                if (message.deprecated !== undefined)
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option !== undefined) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $types[2].verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                var message = new $root.google.protobuf.EnumOptions();
                if (object.allow_alias !== undefined && object.allow_alias !== null)
                    message.allow_alias = Boolean(object.allow_alias);
                if (object.deprecated !== undefined && object.deprecated !== null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $types[2].fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.from = EnumOptions.fromObject;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.allow_alias = false;
                    object.deprecated = false;
                }
                if (message.allow_alias !== undefined && message.allow_alias !== null && message.hasOwnProperty("allow_alias"))
                    object.allow_alias = message.allow_alias;
                if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpreted_option !== undefined && message.uninterpreted_option !== null && message.hasOwnProperty("uninterpreted_option")) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $types[2].toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this EnumOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Constructs a new EnumValueOptions.
             * @exports google.protobuf.EnumValueOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @type {boolean}
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpreted_option.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message.
             * @param {google.protobuf.EnumValueOptions|Object} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpreted_option !== undefined && message.hasOwnProperty("uninterpreted_option"))
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $types[1].encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited.
             * @param {google.protobuf.EnumValueOptions|Object} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($types[1].decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @param {google.protobuf.EnumValueOptions|Object} message EnumValueOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (message.deprecated !== undefined)
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option !== undefined) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $types[1].verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                var message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated !== undefined && object.deprecated !== null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $types[1].fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumValueOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.from = EnumValueOptions.fromObject;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpreted_option !== undefined && message.uninterpreted_option !== null && message.hasOwnProperty("uninterpreted_option")) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $types[1].toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this EnumValueOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Constructs a new ServiceOptions.
             * @exports google.protobuf.ServiceOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @type {boolean}
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpreted_option.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message.
             * @param {google.protobuf.ServiceOptions|Object} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpreted_option !== undefined && message.hasOwnProperty("uninterpreted_option"))
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $types[1].encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited.
             * @param {google.protobuf.ServiceOptions|Object} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($types[1].decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @param {google.protobuf.ServiceOptions|Object} message ServiceOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (message.deprecated !== undefined)
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option !== undefined) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $types[1].verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                var message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated !== undefined && object.deprecated !== null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $types[1].fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.ServiceOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.from = ServiceOptions.fromObject;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpreted_option !== undefined && message.uninterpreted_option !== null && message.hasOwnProperty("uninterpreted_option")) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $types[1].toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this ServiceOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Constructs a new MethodOptions.
             * @exports google.protobuf.MethodOptions
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function MethodOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @type {boolean}
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions idempotency_level.
             * @type {number}
             */
            MethodOptions.prototype.idempotency_level = 0;

            /**
             * MethodOptions uninterpreted_option.
             * @type {Array.<google.protobuf.UninterpretedOption>}
             */
            MethodOptions.prototype.uninterpreted_option = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                1: "google.protobuf.MethodOptions.IdempotencyLevel",
                2: "google.protobuf.UninterpretedOption"
            }; $lazyTypes.push($types);

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message.
             * @param {google.protobuf.MethodOptions|Object} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.idempotency_level !== undefined && message.hasOwnProperty("idempotency_level"))
                    writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.idempotency_level);
                if (message.uninterpreted_option !== undefined && message.hasOwnProperty("uninterpreted_option"))
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $types[2].encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited.
             * @param {google.protobuf.MethodOptions|Object} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 34:
                        message.idempotency_level = reader.uint32();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($types[2].decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @param {google.protobuf.MethodOptions|Object} message MethodOptions message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (message.deprecated !== undefined)
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.idempotency_level !== undefined)
                    switch (message.idempotency_level) {
                    default:
                        return "idempotency_level: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.uninterpreted_option !== undefined) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $types[2].verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                var message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated !== undefined && object.deprecated !== null)
                    message.deprecated = Boolean(object.deprecated);
                switch (object.idempotency_level) {
                case "IDEMPOTENCY_UNKNOWN":
                case 0:
                    message.idempotency_level = 0;
                    break;
                case "NO_SIDE_EFFECTS":
                case 1:
                    message.idempotency_level = 1;
                    break;
                case "IDEMPOTENT":
                case 2:
                    message.idempotency_level = 2;
                    break;
                }
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $types[2].fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.MethodOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.from = MethodOptions.fromObject;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object.idempotency_level = options.enums === String ? "IDEMPOTENCY_UNKNOWN" : 0;
                }
                if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.idempotency_level !== undefined && message.idempotency_level !== null && message.hasOwnProperty("idempotency_level"))
                    object.idempotency_level = options.enums === String ? $types[1][message.idempotency_level] : message.idempotency_level;
                if (message.uninterpreted_option !== undefined && message.uninterpreted_option !== null && message.hasOwnProperty("uninterpreted_option")) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $types[2].toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this MethodOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this MethodOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * IdempotencyLevel enum.
             * @name IdempotencyLevel
             * @memberof google.protobuf.MethodOptions
             * @enum {number}
             * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
             * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
             * @property {number} IDEMPOTENT=2 IDEMPOTENT value
             */
            MethodOptions.IdempotencyLevel = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                values[valuesById[2] = "IDEMPOTENT"] = 2;
                return values;
            })();

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Constructs a new UninterpretedOption.
             * @exports google.protobuf.UninterpretedOption
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @type {Array.<google.protobuf.UninterpretedOption.NamePart>}
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifier_value.
             * @type {string}
             */
            UninterpretedOption.prototype.identifier_value = "";

            /**
             * UninterpretedOption positive_int_value.
             * @type {number|$protobuf.Long}
             */
            UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negative_int_value.
             * @type {number|$protobuf.Long}
             */
            UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption double_value.
             * @type {number}
             */
            UninterpretedOption.prototype.double_value = 0;

            /**
             * UninterpretedOption string_value.
             * @type {Uint8Array}
             */
            UninterpretedOption.prototype.string_value = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregate_value.
             * @type {string}
             */
            UninterpretedOption.prototype.aggregate_value = "";

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.UninterpretedOption.NamePart"
            }; $lazyTypes.push($types);

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message.
             * @param {google.protobuf.UninterpretedOption|Object} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name !== undefined && message.hasOwnProperty("name"))
                    for (var i = 0; i < message.name.length; ++i)
                        $types[0].encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifier_value !== undefined && message.hasOwnProperty("identifier_value"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                if (message.positive_int_value !== undefined && message.positive_int_value !== null && message.hasOwnProperty("positive_int_value"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                if (message.negative_int_value !== undefined && message.negative_int_value !== null && message.hasOwnProperty("negative_int_value"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                if (message.double_value !== undefined && message.hasOwnProperty("double_value"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                if (message.string_value && message.hasOwnProperty("string_value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                if (message.aggregate_value !== undefined && message.hasOwnProperty("aggregate_value"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited.
             * @param {google.protobuf.UninterpretedOption|Object} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push($types[0].decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.identifier_value = reader.string();
                        break;
                    case 4:
                        message.positive_int_value = reader.uint64();
                        break;
                    case 5:
                        message.negative_int_value = reader.int64();
                        break;
                    case 6:
                        message.double_value = reader.double();
                        break;
                    case 7:
                        message.string_value = reader.bytes();
                        break;
                    case 8:
                        message.aggregate_value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @param {google.protobuf.UninterpretedOption|Object} message UninterpretedOption message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (message.name !== undefined) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (var i = 0; i < message.name.length; ++i) {
                        var error = $types[0].verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifier_value !== undefined)
                    if (!$util.isString(message.identifier_value))
                        return "identifier_value: string expected";
                if (message.positive_int_value !== undefined)
                    if (!$util.isInteger(message.positive_int_value) && !(message.positive_int_value && $util.isInteger(message.positive_int_value.low) && $util.isInteger(message.positive_int_value.high)))
                        return "positive_int_value: integer|Long expected";
                if (message.negative_int_value !== undefined)
                    if (!$util.isInteger(message.negative_int_value) && !(message.negative_int_value && $util.isInteger(message.negative_int_value.low) && $util.isInteger(message.negative_int_value.high)))
                        return "negative_int_value: integer|Long expected";
                if (message.double_value !== undefined)
                    if (typeof message.double_value !== "number")
                        return "double_value: number expected";
                if (message.string_value !== undefined)
                    if (!(message.string_value && typeof message.string_value.length === "number" || $util.isString(message.string_value)))
                        return "string_value: buffer expected";
                if (message.aggregate_value !== undefined)
                    if (!$util.isString(message.aggregate_value))
                        return "aggregate_value: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                var message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (var i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $types[0].fromObject(object.name[i]);
                    }
                }
                if (object.identifier_value !== undefined && object.identifier_value !== null)
                    message.identifier_value = String(object.identifier_value);
                if (object.positive_int_value !== undefined && object.positive_int_value !== null)
                    if ($util.Long)
                        (message.positive_int_value = $util.Long.fromValue(object.positive_int_value)).unsigned = true;
                    else if (typeof object.positive_int_value === "string")
                        message.positive_int_value = parseInt(object.positive_int_value, 10);
                    else if (typeof object.positive_int_value === "number")
                        message.positive_int_value = object.positive_int_value;
                    else if (typeof object.positive_int_value === "object")
                        message.positive_int_value = new $util.LongBits(object.positive_int_value.low, object.positive_int_value.high).toNumber(true);
                if (object.negative_int_value !== undefined && object.negative_int_value !== null)
                    if ($util.Long)
                        (message.negative_int_value = $util.Long.fromValue(object.negative_int_value)).unsigned = false;
                    else if (typeof object.negative_int_value === "string")
                        message.negative_int_value = parseInt(object.negative_int_value, 10);
                    else if (typeof object.negative_int_value === "number")
                        message.negative_int_value = object.negative_int_value;
                    else if (typeof object.negative_int_value === "object")
                        message.negative_int_value = new $util.LongBits(object.negative_int_value.low, object.negative_int_value.high).toNumber();
                if (object.double_value !== undefined && object.double_value !== null)
                    message.double_value = Number(object.double_value);
                if (object.string_value !== undefined && object.string_value !== null)
                    if (typeof object.string_value === "string")
                        $util.base64.decode(object.string_value, message.string_value = $util.newBuffer($util.base64.length(object.string_value)), 0);
                    else if (object.string_value.length)
                        message.string_value = object.string_value;
                if (object.aggregate_value !== undefined && object.aggregate_value !== null)
                    message.aggregate_value = String(object.aggregate_value);
                return message;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.UninterpretedOption.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.from = UninterpretedOption.fromObject;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifier_value = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.positive_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positive_int_value = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.negative_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negative_int_value = options.longs === String ? "0" : 0;
                    object.double_value = 0;
                    object.string_value = options.bytes === String ? "" : [];
                    object.aggregate_value = "";
                }
                if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name")) {
                    object.name = [];
                    for (var j = 0; j < message.name.length; ++j)
                        object.name[j] = $types[0].toObject(message.name[j], options);
                }
                if (message.identifier_value !== undefined && message.identifier_value !== null && message.hasOwnProperty("identifier_value"))
                    object.identifier_value = message.identifier_value;
                if (message.positive_int_value !== undefined && message.positive_int_value !== null && message.hasOwnProperty("positive_int_value"))
                    if (typeof message.positive_int_value === "number")
                        object.positive_int_value = options.longs === String ? String(message.positive_int_value) : message.positive_int_value;
                    else
                        object.positive_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.positive_int_value) : options.longs === Number ? new $util.LongBits(message.positive_int_value.low, message.positive_int_value.high).toNumber(true) : message.positive_int_value;
                if (message.negative_int_value !== undefined && message.negative_int_value !== null && message.hasOwnProperty("negative_int_value"))
                    if (typeof message.negative_int_value === "number")
                        object.negative_int_value = options.longs === String ? String(message.negative_int_value) : message.negative_int_value;
                    else
                        object.negative_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.negative_int_value) : options.longs === Number ? new $util.LongBits(message.negative_int_value.low, message.negative_int_value.high).toNumber() : message.negative_int_value;
                if (message.double_value !== undefined && message.double_value !== null && message.hasOwnProperty("double_value"))
                    object.double_value = message.double_value;
                if (message.string_value !== undefined && message.string_value !== null && message.hasOwnProperty("string_value"))
                    object.string_value = options.bytes === String ? $util.base64.encode(message.string_value, 0, message.string_value.length) : options.bytes === Array ? Array.prototype.slice.call(message.string_value) : message.string_value;
                if (message.aggregate_value !== undefined && message.aggregate_value !== null && message.hasOwnProperty("aggregate_value"))
                    object.aggregate_value = message.aggregate_value;
                return object;
            };

            /**
             * Creates a plain object from this UninterpretedOption message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Constructs a new NamePart.
                 * @exports google.protobuf.UninterpretedOption.NamePart
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart name_part.
                 * @type {string}
                 */
                NamePart.prototype.name_part = "";

                /**
                 * NamePart is_extension.
                 * @type {boolean}
                 */
                NamePart.prototype.is_extension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message.
                 * @param {google.protobuf.UninterpretedOption.NamePart|Object} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited.
                 * @param {google.protobuf.UninterpretedOption.NamePart|Object} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name_part = reader.string();
                            break;
                        case 2:
                            message.is_extension = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @param {google.protobuf.UninterpretedOption.NamePart|Object} message NamePart message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (!$util.isString(message.name_part))
                        return "name_part: string expected";
                    if (typeof message.is_extension !== "boolean")
                        return "is_extension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.name_part !== undefined && object.name_part !== null)
                        message.name_part = String(object.name_part);
                    if (object.is_extension !== undefined && object.is_extension !== null)
                        message.is_extension = Boolean(object.is_extension);
                    return message;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.UninterpretedOption.NamePart.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.from = NamePart.fromObject;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name_part = "";
                        object.is_extension = false;
                    }
                    if (message.name_part !== undefined && message.name_part !== null && message.hasOwnProperty("name_part"))
                        object.name_part = message.name_part;
                    if (message.is_extension !== undefined && message.is_extension !== null && message.hasOwnProperty("is_extension"))
                        object.is_extension = message.is_extension;
                    return object;
                };

                /**
                 * Creates a plain object from this NamePart message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this NamePart to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Constructs a new SourceCodeInfo.
             * @exports google.protobuf.SourceCodeInfo
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @type {Array.<google.protobuf.SourceCodeInfo.Location>}
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.SourceCodeInfo.Location"
            }; $lazyTypes.push($types);

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message.
             * @param {google.protobuf.SourceCodeInfo|Object} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location !== undefined && message.hasOwnProperty("location"))
                    for (var i = 0; i < message.location.length; ++i)
                        $types[0].encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited.
             * @param {google.protobuf.SourceCodeInfo|Object} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length))
                            message.location = [];
                        message.location.push($types[0].decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @param {google.protobuf.SourceCodeInfo|Object} message SourceCodeInfo message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (message.location !== undefined) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (var i = 0; i < message.location.length; ++i) {
                        var error = $types[0].verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                var message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (var i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $types[0].fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.SourceCodeInfo.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.from = SourceCodeInfo.fromObject;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location !== undefined && message.location !== null && message.hasOwnProperty("location")) {
                    object.location = [];
                    for (var j = 0; j < message.location.length; ++j)
                        object.location[j] = $types[0].toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this SourceCodeInfo message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Constructs a new Location.
                 * @exports google.protobuf.SourceCodeInfo.Location
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function Location(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @type {Array.<number>}
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @type {Array.<number>}
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leading_comments.
                 * @type {string}
                 */
                Location.prototype.leading_comments = "";

                /**
                 * Location trailing_comments.
                 * @type {string}
                 */
                Location.prototype.trailing_comments = "";

                /**
                 * Location leading_detached_comments.
                 * @type {Array.<string>}
                 */
                Location.prototype.leading_detached_comments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message.
                 * @param {google.protobuf.SourceCodeInfo.Location|Object} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path && message.path.length && message.hasOwnProperty("path")) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span && message.span.length && message.hasOwnProperty("span")) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leading_comments !== undefined && message.hasOwnProperty("leading_comments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leading_comments);
                    if (message.trailing_comments !== undefined && message.hasOwnProperty("trailing_comments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailing_comments);
                    if (message.leading_detached_comments !== undefined && message.hasOwnProperty("leading_detached_comments"))
                        for (var i = 0; i < message.leading_detached_comments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leading_detached_comments[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited.
                 * @param {google.protobuf.SourceCodeInfo.Location|Object} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            if (!(message.span && message.span.length))
                                message.span = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.span.push(reader.int32());
                            } else
                                message.span.push(reader.int32());
                            break;
                        case 3:
                            message.leading_comments = reader.string();
                            break;
                        case 4:
                            message.trailing_comments = reader.string();
                            break;
                        case 6:
                            if (!(message.leading_detached_comments && message.leading_detached_comments.length))
                                message.leading_detached_comments = [];
                            message.leading_detached_comments.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @param {google.protobuf.SourceCodeInfo.Location|Object} message Location message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (message.path !== undefined) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span !== undefined) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (var i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leading_comments !== undefined)
                        if (!$util.isString(message.leading_comments))
                            return "leading_comments: string expected";
                    if (message.trailing_comments !== undefined)
                        if (!$util.isString(message.trailing_comments))
                            return "trailing_comments: string expected";
                    if (message.leading_detached_comments !== undefined) {
                        if (!Array.isArray(message.leading_detached_comments))
                            return "leading_detached_comments: array expected";
                        for (var i = 0; i < message.leading_detached_comments.length; ++i)
                            if (!$util.isString(message.leading_detached_comments[i]))
                                return "leading_detached_comments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (var i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leading_comments !== undefined && object.leading_comments !== null)
                        message.leading_comments = String(object.leading_comments);
                    if (object.trailing_comments !== undefined && object.trailing_comments !== null)
                        message.trailing_comments = String(object.trailing_comments);
                    if (object.leading_detached_comments) {
                        if (!Array.isArray(object.leading_detached_comments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leading_detached_comments: array expected");
                        message.leading_detached_comments = [];
                        for (var i = 0; i < object.leading_detached_comments.length; ++i)
                            message.leading_detached_comments[i] = String(object.leading_detached_comments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.SourceCodeInfo.Location.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.from = Location.fromObject;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leading_detached_comments = [];
                    }
                    if (options.defaults) {
                        object.leading_comments = "";
                        object.trailing_comments = "";
                    }
                    if (message.path !== undefined && message.path !== null && message.hasOwnProperty("path")) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span !== undefined && message.span !== null && message.hasOwnProperty("span")) {
                        object.span = [];
                        for (var j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leading_comments !== undefined && message.leading_comments !== null && message.hasOwnProperty("leading_comments"))
                        object.leading_comments = message.leading_comments;
                    if (message.trailing_comments !== undefined && message.trailing_comments !== null && message.hasOwnProperty("trailing_comments"))
                        object.trailing_comments = message.trailing_comments;
                    if (message.leading_detached_comments !== undefined && message.leading_detached_comments !== null && message.hasOwnProperty("leading_detached_comments")) {
                        object.leading_detached_comments = [];
                        for (var j = 0; j < message.leading_detached_comments.length; ++j)
                            object.leading_detached_comments[j] = message.leading_detached_comments[j];
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this Location message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Location to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @exports google.protobuf.GeneratedCodeInfo
             * @constructor
             * @param {Object} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @type {Array.<google.protobuf.GeneratedCodeInfo.Annotation>}
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            // Lazily resolved type references
            var $types = {
                0: "google.protobuf.GeneratedCodeInfo.Annotation"
            }; $lazyTypes.push($types);

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param {Object} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message.
             * @param {google.protobuf.GeneratedCodeInfo|Object} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation !== undefined && message.hasOwnProperty("annotation"))
                    for (var i = 0; i < message.annotation.length; ++i)
                        $types[0].encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited.
             * @param {google.protobuf.GeneratedCodeInfo|Object} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length))
                            message.annotation = [];
                        message.annotation.push($types[0].decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param {google.protobuf.GeneratedCodeInfo|Object} message GeneratedCodeInfo message or plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (message.annotation !== undefined) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (var i = 0; i < message.annotation.length; ++i) {
                        var error = $types[0].verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                var message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (var i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $types[0].fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.GeneratedCodeInfo.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.from = GeneratedCodeInfo.fromObject;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation !== undefined && message.annotation !== null && message.hasOwnProperty("annotation")) {
                    object.annotation = [];
                    for (var j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $types[0].toObject(message.annotation[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Constructs a new Annotation.
                 * @exports google.protobuf.GeneratedCodeInfo.Annotation
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function Annotation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @type {Array.<number>}
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation source_file.
                 * @type {string}
                 */
                Annotation.prototype.source_file = "";

                /**
                 * Annotation begin.
                 * @type {number}
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @type {number}
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation|Object} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path && message.path.length && message.hasOwnProperty("path")) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.source_file !== undefined && message.hasOwnProperty("source_file"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.source_file);
                    if (message.begin !== undefined && message.hasOwnProperty("begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end !== undefined && message.hasOwnProperty("end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation|Object} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            message.source_file = reader.string();
                            break;
                        case 3:
                            message.begin = reader.int32();
                            break;
                        case 4:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation|Object} message Annotation message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (message.path !== undefined) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.source_file !== undefined)
                        if (!$util.isString(message.source_file))
                            return "source_file: string expected";
                    if (message.begin !== undefined)
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end !== undefined)
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.source_file !== undefined && object.source_file !== null)
                        message.source_file = String(object.source_file);
                    if (object.begin !== undefined && object.begin !== null)
                        message.begin = object.begin | 0;
                    if (object.end !== undefined && object.end !== null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.GeneratedCodeInfo.Annotation.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.from = Annotation.fromObject;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.source_file = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    if (message.path !== undefined && message.path !== null && message.hasOwnProperty("path")) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.source_file !== undefined && message.source_file !== null && message.hasOwnProperty("source_file"))
                        object.source_file = message.source_file;
                    if (message.begin !== undefined && message.begin !== null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end !== undefined && message.end !== null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Creates a plain object from this Annotation message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Annotation to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

// Resolve lazy type references to actual types
$util.lazyResolve($root, $lazyTypes);

module.exports = $root;

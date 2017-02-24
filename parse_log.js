{
  "fileToGenerate": [
    "helloworld.proto"
  ],
  "protoFile": [
    {
      "name": "google/api/http.proto",
      "package": "google.api",
      "messageType": [
        {
          "name": "Http",
          "field": [
            {
              "name": "rules",
              "number": 1,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.api.HttpRule",
              "jsonName": "rules"
            }
          ]
        },
        {
          "name": "HttpRule",
          "field": [
            {
              "name": "selector",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "selector"
            },
            {
              "name": "get",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "oneofIndex": 0,
              "jsonName": "get"
            },
            {
              "name": "put",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "oneofIndex": 0,
              "jsonName": "put"
            },
            {
              "name": "post",
              "number": 4,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "oneofIndex": 0,
              "jsonName": "post"
            },
            {
              "name": "delete",
              "number": 5,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "oneofIndex": 0,
              "jsonName": "delete"
            },
            {
              "name": "patch",
              "number": 6,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "oneofIndex": 0,
              "jsonName": "patch"
            },
            {
              "name": "custom",
              "number": 8,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.api.CustomHttpPattern",
              "oneofIndex": 0,
              "jsonName": "custom"
            },
            {
              "name": "body",
              "number": 7,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "body"
            },
            {
              "name": "additional_bindings",
              "number": 11,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.api.HttpRule",
              "jsonName": "additionalBindings"
            }
          ],
          "oneofDecl": [
            {
              "name": "pattern"
            }
          ]
        },
        {
          "name": "CustomHttpPattern",
          "field": [
            {
              "name": "kind",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "kind"
            },
            {
              "name": "path",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "path"
            }
          ]
        }
      ],
      "options": {
        "javaPackage": "com.google.api",
        "javaOuterClassname": "HttpProto",
        "javaMultipleFiles": true,
        "goPackage": "google.golang.org/genproto/googleapis/api/annotations;annotations",
        "ccEnableArenas": true,
        "objcClassPrefix": "GAPI"
      },
      "sourceCodeInfo": {
        "location": [
          {
            "span": [
              14,
              0,
              290,
              1
            ]
          },
          {
            "path": [
              12
            ],
            "span": [
              14,
              0,
              18
            ],
            "leadingDetachedComments": [
              " Copyright 2016 Google Inc.\n\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n"
            ]
          },
          {
            "path": [
              2
            ],
            "span": [
              16,
              8,
              18
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              18,
              0,
              31
            ]
          },
          {
            "path": [
              8,
              999,
              0
            ],
            "span": [
              18,
              0,
              31
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              2
            ],
            "span": [
              18,
              7,
              23
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              2,
              0
            ],
            "span": [
              18,
              7,
              23
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              2,
              0,
              1
            ],
            "span": [
              18,
              7,
              23
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              3
            ],
            "span": [
              18,
              26,
              30
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              19,
              0,
              88
            ]
          },
          {
            "path": [
              8,
              999,
              1
            ],
            "span": [
              19,
              0,
              88
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              2
            ],
            "span": [
              19,
              7,
              17
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              2,
              0
            ],
            "span": [
              19,
              7,
              17
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              2,
              0,
              1
            ],
            "span": [
              19,
              7,
              17
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              7
            ],
            "span": [
              19,
              20,
              87
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              20,
              0,
              34
            ]
          },
          {
            "path": [
              8,
              999,
              2
            ],
            "span": [
              20,
              0,
              34
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              2
            ],
            "span": [
              20,
              7,
              26
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              2,
              0
            ],
            "span": [
              20,
              7,
              26
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              2,
              0,
              1
            ],
            "span": [
              20,
              7,
              26
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              3
            ],
            "span": [
              20,
              29,
              33
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              21,
              0,
              42
            ]
          },
          {
            "path": [
              8,
              999,
              3
            ],
            "span": [
              21,
              0,
              42
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              2
            ],
            "span": [
              21,
              7,
              27
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              2,
              0
            ],
            "span": [
              21,
              7,
              27
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              2,
              0,
              1
            ],
            "span": [
              21,
              7,
              27
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              7
            ],
            "span": [
              21,
              30,
              41
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              22,
              0,
              39
            ]
          },
          {
            "path": [
              8,
              999,
              4
            ],
            "span": [
              22,
              0,
              39
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              2
            ],
            "span": [
              22,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              2,
              0
            ],
            "span": [
              22,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              2,
              0,
              1
            ],
            "span": [
              22,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              7
            ],
            "span": [
              22,
              22,
              38
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              23,
              0,
              34
            ]
          },
          {
            "path": [
              8,
              999,
              5
            ],
            "span": [
              23,
              0,
              34
            ]
          },
          {
            "path": [
              8,
              999,
              5,
              2
            ],
            "span": [
              23,
              7,
              24
            ]
          },
          {
            "path": [
              8,
              999,
              5,
              2,
              0
            ],
            "span": [
              23,
              7,
              24
            ]
          },
          {
            "path": [
              8,
              999,
              5,
              2,
              0,
              1
            ],
            "span": [
              23,
              7,
              24
            ]
          },
          {
            "path": [
              8,
              999,
              5,
              7
            ],
            "span": [
              23,
              27,
              33
            ]
          },
          {
            "path": [
              4,
              0
            ],
            "span": [
              29,
              0,
              34,
              1
            ],
            "leadingComments": " Defines the HTTP configuration for a service. It contains a list of\n [HttpRule][google.api.HttpRule], each specifying the mapping of an RPC method\n to one or more HTTP REST API methods.\n"
          },
          {
            "path": [
              4,
              0,
              1
            ],
            "span": [
              29,
              8,
              12
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0
            ],
            "span": [
              33,
              2,
              30
            ],
            "leadingComments": " A list of HTTP configuration rules that apply to individual API methods.\n\n **NOTE:** All service configuration rules follow \"last one wins\" order.\n"
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              4
            ],
            "span": [
              33,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              6
            ],
            "span": [
              33,
              11,
              19
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              1
            ],
            "span": [
              33,
              20,
              25
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              3
            ],
            "span": [
              33,
              28,
              29
            ]
          },
          {
            "path": [
              4,
              1
            ],
            "span": [
              242,
              0,
              281,
              1
            ],
            "leadingComments": " `HttpRule` defines the mapping of an RPC method to one or more HTTP\n REST APIs.  The mapping determines what portions of the request\n message are populated from the path, query parameters, or body of\n the HTTP request.  The mapping is typically specified as an\n `google.api.http` annotation, see \"google/api/annotations.proto\"\n for details.\n\n The mapping consists of a field specifying the path template and\n method kind.  The path template can refer to fields in the request\n message, as in the example below which describes a REST GET\n operation on a resource collection of messages:\n\n\n     service Messaging {\n       rpc GetMessage(GetMessageRequest) returns (Message) {\n         option (google.api.http).get = \"/v1/messages/{message_id}/{sub.subfield}\";\n       }\n     }\n     message GetMessageRequest {\n       message SubMessage {\n         string subfield = 1;\n       }\n       string message_id = 1; // mapped to the URL\n       SubMessage sub = 2;    // `sub.subfield` is url-mapped\n     }\n     message Message {\n       string text = 1; // content of the resource\n     }\n\n The same http annotation can alternatively be expressed inside the\n `GRPC API Configuration` YAML file.\n\n     http:\n       rules:\n         - selector: <proto_package_name>.Messaging.GetMessage\n           get: /v1/messages/{message_id}/{sub.subfield}\n\n This definition enables an automatic, bidrectional mapping of HTTP\n JSON to RPC. Example:\n\n HTTP | RPC\n -----|-----\n `GET /v1/messages/123456/foo`  | `GetMessage(message_id: \"123456\" sub: SubMessage(subfield: \"foo\"))`\n\n In general, not only fields but also field paths can be referenced\n from a path pattern. Fields mapped to the path pattern cannot be\n repeated and must have a primitive (non-message) type.\n\n Any fields in the request message which are not bound by the path\n pattern automatically become (optional) HTTP query\n parameters. Assume the following definition of the request message:\n\n\n     message GetMessageRequest {\n       message SubMessage {\n         string subfield = 1;\n       }\n       string message_id = 1; // mapped to the URL\n       int64 revision = 2;    // becomes a parameter\n       SubMessage sub = 3;    // `sub.subfield` becomes a parameter\n     }\n\n\n This enables a HTTP JSON to RPC mapping as below:\n\n HTTP | RPC\n -----|-----\n `GET /v1/messages/123456?revision=2&sub.subfield=foo` | `GetMessage(message_id: \"123456\" revision: 2 sub: SubMessage(subfield: \"foo\"))`\n\n Note that fields which are mapped to HTTP parameters must have a\n primitive type or a repeated primitive type. Message types are not\n allowed. In the case of a repeated type, the parameter can be\n repeated in the URL, as in `...?param=A&param=B`.\n\n For HTTP method kinds which allow a request body, the `body` field\n specifies the mapping. Consider a REST update method on the\n message resource collection:\n\n\n     service Messaging {\n       rpc UpdateMessage(UpdateMessageRequest) returns (Message) {\n         option (google.api.http) = {\n           put: \"/v1/messages/{message_id}\"\n           body: \"message\"\n         };\n       }\n     }\n     message UpdateMessageRequest {\n       string message_id = 1; // mapped to the URL\n       Message message = 2;   // mapped to the body\n     }\n\n\n The following HTTP JSON to RPC mapping is enabled, where the\n representation of the JSON in the request body is determined by\n protos JSON encoding:\n\n HTTP | RPC\n -----|-----\n `PUT /v1/messages/123456 { \"text\": \"Hi!\" }` | `UpdateMessage(message_id: \"123456\" message { text: \"Hi!\" })`\n\n The special name `*` can be used in the body mapping to define that\n every field not bound by the path template should be mapped to the\n request body.  This enables the following alternative definition of\n the update method:\n\n     service Messaging {\n       rpc UpdateMessage(Message) returns (Message) {\n         option (google.api.http) = {\n           put: \"/v1/messages/{message_id}\"\n           body: \"*\"\n         };\n       }\n     }\n     message Message {\n       string message_id = 1;\n       string text = 2;\n     }\n\n\n The following HTTP JSON to RPC mapping is enabled:\n\n HTTP | RPC\n -----|-----\n `PUT /v1/messages/123456 { \"text\": \"Hi!\" }` | `UpdateMessage(message_id: \"123456\" text: \"Hi!\")`\n\n Note that when using `*` in the body mapping, it is not possible to\n have HTTP parameters, as all fields not bound by the path end in\n the body. This makes this option more rarely used in practice of\n defining REST APIs. The common usage of `*` is in custom methods\n which don't use the URL at all for transferring data.\n\n It is possible to define multiple HTTP methods for one RPC by using\n the `additional_bindings` option. Example:\n\n     service Messaging {\n       rpc GetMessage(GetMessageRequest) returns (Message) {\n         option (google.api.http) = {\n           get: \"/v1/messages/{message_id}\"\n           additional_bindings {\n             get: \"/v1/users/{user_id}/messages/{message_id}\"\n           }\n         };\n       }\n     }\n     message GetMessageRequest {\n       string message_id = 1;\n       string user_id = 2;\n     }\n\n\n This enables the following two alternative HTTP JSON to RPC\n mappings:\n\n HTTP | RPC\n -----|-----\n `GET /v1/messages/123456` | `GetMessage(message_id: \"123456\")`\n `GET /v1/users/me/messages/123456` | `GetMessage(user_id: \"me\" message_id: \"123456\")`\n\n # Rules for HTTP mapping\n\n The rules for mapping HTTP path, query parameters, and body fields\n to the request message are as follows:\n\n 1. The `body` field specifies either `*` or a field path, or is\n    omitted. If omitted, it assumes there is no HTTP body.\n 2. Leaf fields (recursive expansion of nested messages in the\n    request) can be classified into three types:\n     (a) Matched in the URL template.\n     (b) Covered by body (if body is `*`, everything except (a) fields;\n         else everything under the body field)\n     (c) All other fields.\n 3. URL query parameters found in the HTTP request are mapped to (c) fields.\n 4. Any body sent with an HTTP request can contain only (b) fields.\n\n The syntax of the path template is as follows:\n\n     Template = \"/\" Segments [ Verb ] ;\n     Segments = Segment { \"/\" Segment } ;\n     Segment  = \"*\" | \"**\" | LITERAL | Variable ;\n     Variable = \"{\" FieldPath [ \"=\" Segments ] \"}\" ;\n     FieldPath = IDENT { \".\" IDENT } ;\n     Verb     = \":\" LITERAL ;\n\n The syntax `*` matches a single path segment. It follows the semantics of\n [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String\n Expansion.\n\n The syntax `**` matches zero or more path segments. It follows the semantics\n of [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.3 Reserved\n Expansion. NOTE: it must be the last segment in the path except the Verb.\n\n The syntax `LITERAL` matches literal text in the URL path.\n\n The syntax `Variable` matches the entire path as specified by its template;\n this nested template must not contain further variables. If a variable\n matches a single path segment, its template may be omitted, e.g. `{var}`\n is equivalent to `{var=*}`.\n\n NOTE: the field paths in variables and in the `body` must not refer to\n repeated fields or map fields.\n\n Use CustomHttpPattern to specify any HTTP method that is not included in the\n `pattern` field, such as HEAD, or \"*\" to leave the HTTP method unspecified for\n a given URL path rule. The wild-card rule is useful for services that provide\n content to Web (HTML) clients.\n"
          },
          {
            "path": [
              4,
              1,
              1
            ],
            "span": [
              242,
              8,
              16
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0
            ],
            "span": [
              246,
              2,
              22
            ],
            "leadingComments": " Selects methods to which this rule applies.\n\n Refer to [selector][google.api.DocumentationRule.selector] for syntax details.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              4
            ],
            "span": [
              246,
              2,
              242,
              18
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              5
            ],
            "span": [
              246,
              2,
              8
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              1
            ],
            "span": [
              246,
              9,
              17
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              3
            ],
            "span": [
              246,
              20,
              21
            ]
          },
          {
            "path": [
              4,
              1,
              8,
              0
            ],
            "span": [
              251,
              2,
              269,
              3
            ],
            "leadingComments": " Determines the URL pattern is matched by this rules. This pattern can be\n used with any of the {get|put|post|delete|patch} methods. A custom method\n can be defined using the 'custom' field.\n"
          },
          {
            "path": [
              4,
              1,
              8,
              0,
              1
            ],
            "span": [
              251,
              8,
              15
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              1
            ],
            "span": [
              253,
              4,
              19
            ],
            "leadingComments": " Used for listing and getting information about resources.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              1,
              5
            ],
            "span": [
              253,
              4,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              1,
              1
            ],
            "span": [
              253,
              11,
              14
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              1,
              3
            ],
            "span": [
              253,
              17,
              18
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              2
            ],
            "span": [
              256,
              4,
              19
            ],
            "leadingComments": " Used for updating a resource.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              2,
              5
            ],
            "span": [
              256,
              4,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              2,
              1
            ],
            "span": [
              256,
              11,
              14
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              2,
              3
            ],
            "span": [
              256,
              17,
              18
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              3
            ],
            "span": [
              259,
              4,
              20
            ],
            "leadingComments": " Used for creating a resource.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              3,
              5
            ],
            "span": [
              259,
              4,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              3,
              1
            ],
            "span": [
              259,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              3,
              3
            ],
            "span": [
              259,
              18,
              19
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              4
            ],
            "span": [
              262,
              4,
              22
            ],
            "leadingComments": " Used for deleting a resource.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              4,
              5
            ],
            "span": [
              262,
              4,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              4,
              1
            ],
            "span": [
              262,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              4,
              3
            ],
            "span": [
              262,
              20,
              21
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              5
            ],
            "span": [
              265,
              4,
              21
            ],
            "leadingComments": " Used for updating a resource.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              5,
              5
            ],
            "span": [
              265,
              4,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              5,
              1
            ],
            "span": [
              265,
              11,
              16
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              5,
              3
            ],
            "span": [
              265,
              19,
              20
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              6
            ],
            "span": [
              268,
              4,
              33
            ],
            "leadingComments": " Custom pattern is used for defining custom verbs.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              6,
              6
            ],
            "span": [
              268,
              4,
              21
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              6,
              1
            ],
            "span": [
              268,
              22,
              28
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              6,
              3
            ],
            "span": [
              268,
              31,
              32
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              7
            ],
            "span": [
              275,
              2,
              18
            ],
            "leadingComments": " The name of the request field whose value is mapped to the HTTP body, or\n `*` for mapping all fields not captured by the path pattern to the HTTP\n body. NOTE: the referred field must not be a repeated field and must be\n present at the top-level of request message type.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              7,
              4
            ],
            "span": [
              275,
              2,
              269,
              3
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              7,
              5
            ],
            "span": [
              275,
              2,
              8
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              7,
              1
            ],
            "span": [
              275,
              9,
              13
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              7,
              3
            ],
            "span": [
              275,
              16,
              17
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              8
            ],
            "span": [
              280,
              2,
              45
            ],
            "leadingComments": " Additional HTTP bindings for the selector. Nested bindings must\n not contain an `additional_bindings` field themselves (that is,\n the nesting may only be one level deep).\n"
          },
          {
            "path": [
              4,
              1,
              2,
              8,
              4
            ],
            "span": [
              280,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              8,
              6
            ],
            "span": [
              280,
              11,
              19
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              8,
              1
            ],
            "span": [
              280,
              20,
              39
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              8,
              3
            ],
            "span": [
              280,
              42,
              44
            ]
          },
          {
            "path": [
              4,
              2
            ],
            "span": [
              284,
              0,
              290,
              1
            ],
            "leadingComments": " A custom pattern is used for defining custom HTTP verb.\n"
          },
          {
            "path": [
              4,
              2,
              1
            ],
            "span": [
              284,
              8,
              25
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              0
            ],
            "span": [
              286,
              2,
              18
            ],
            "leadingComments": " The name of this custom HTTP verb.\n"
          },
          {
            "path": [
              4,
              2,
              2,
              0,
              4
            ],
            "span": [
              286,
              2,
              284,
              27
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              0,
              5
            ],
            "span": [
              286,
              2,
              8
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              0,
              1
            ],
            "span": [
              286,
              9,
              13
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              0,
              3
            ],
            "span": [
              286,
              16,
              17
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              1
            ],
            "span": [
              289,
              2,
              18
            ],
            "leadingComments": " The path matched by this custom verb.\n"
          },
          {
            "path": [
              4,
              2,
              2,
              1,
              4
            ],
            "span": [
              289,
              2,
              286,
              18
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              1,
              5
            ],
            "span": [
              289,
              2,
              8
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              1,
              1
            ],
            "span": [
              289,
              9,
              13
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              1,
              3
            ],
            "span": [
              289,
              16,
              17
            ]
          }
        ]
      },
      "syntax": "proto3"
    },
    {
      "name": "google/protobuf/descriptor.proto",
      "package": "google.protobuf",
      "messageType": [
        {
          "name": "FileDescriptorSet",
          "field": [
            {
              "name": "file",
              "number": 1,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.FileDescriptorProto",
              "jsonName": "file"
            }
          ]
        },
        {
          "name": "FileDescriptorProto",
          "field": [
            {
              "name": "name",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "name"
            },
            {
              "name": "package",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "package"
            },
            {
              "name": "dependency",
              "number": 3,
              "label": "LABEL_REPEATED",
              "type": "TYPE_STRING",
              "jsonName": "dependency"
            },
            {
              "name": "public_dependency",
              "number": 10,
              "label": "LABEL_REPEATED",
              "type": "TYPE_INT32",
              "jsonName": "publicDependency"
            },
            {
              "name": "weak_dependency",
              "number": 11,
              "label": "LABEL_REPEATED",
              "type": "TYPE_INT32",
              "jsonName": "weakDependency"
            },
            {
              "name": "message_type",
              "number": 4,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.DescriptorProto",
              "jsonName": "messageType"
            },
            {
              "name": "enum_type",
              "number": 5,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.EnumDescriptorProto",
              "jsonName": "enumType"
            },
            {
              "name": "service",
              "number": 6,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.ServiceDescriptorProto",
              "jsonName": "service"
            },
            {
              "name": "extension",
              "number": 7,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.FieldDescriptorProto",
              "jsonName": "extension"
            },
            {
              "name": "options",
              "number": 8,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.FileOptions",
              "jsonName": "options"
            },
            {
              "name": "source_code_info",
              "number": 9,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.SourceCodeInfo",
              "jsonName": "sourceCodeInfo"
            },
            {
              "name": "syntax",
              "number": 12,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "syntax"
            }
          ]
        },
        {
          "name": "DescriptorProto",
          "field": [
            {
              "name": "name",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "name"
            },
            {
              "name": "field",
              "number": 2,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.FieldDescriptorProto",
              "jsonName": "field"
            },
            {
              "name": "extension",
              "number": 6,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.FieldDescriptorProto",
              "jsonName": "extension"
            },
            {
              "name": "nested_type",
              "number": 3,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.DescriptorProto",
              "jsonName": "nestedType"
            },
            {
              "name": "enum_type",
              "number": 4,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.EnumDescriptorProto",
              "jsonName": "enumType"
            },
            {
              "name": "extension_range",
              "number": 5,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.DescriptorProto.ExtensionRange",
              "jsonName": "extensionRange"
            },
            {
              "name": "oneof_decl",
              "number": 8,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.OneofDescriptorProto",
              "jsonName": "oneofDecl"
            },
            {
              "name": "options",
              "number": 7,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.MessageOptions",
              "jsonName": "options"
            },
            {
              "name": "reserved_range",
              "number": 9,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.DescriptorProto.ReservedRange",
              "jsonName": "reservedRange"
            },
            {
              "name": "reserved_name",
              "number": 10,
              "label": "LABEL_REPEATED",
              "type": "TYPE_STRING",
              "jsonName": "reservedName"
            }
          ],
          "nestedType": [
            {
              "name": "ExtensionRange",
              "field": [
                {
                  "name": "start",
                  "number": 1,
                  "label": "LABEL_OPTIONAL",
                  "type": "TYPE_INT32",
                  "jsonName": "start"
                },
                {
                  "name": "end",
                  "number": 2,
                  "label": "LABEL_OPTIONAL",
                  "type": "TYPE_INT32",
                  "jsonName": "end"
                }
              ]
            },
            {
              "name": "ReservedRange",
              "field": [
                {
                  "name": "start",
                  "number": 1,
                  "label": "LABEL_OPTIONAL",
                  "type": "TYPE_INT32",
                  "jsonName": "start"
                },
                {
                  "name": "end",
                  "number": 2,
                  "label": "LABEL_OPTIONAL",
                  "type": "TYPE_INT32",
                  "jsonName": "end"
                }
              ]
            }
          ]
        },
        {
          "name": "FieldDescriptorProto",
          "field": [
            {
              "name": "name",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "name"
            },
            {
              "name": "number",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_INT32",
              "jsonName": "number"
            },
            {
              "name": "label",
              "number": 4,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_ENUM",
              "typeName": ".google.protobuf.FieldDescriptorProto.Label",
              "jsonName": "label"
            },
            {
              "name": "type",
              "number": 5,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_ENUM",
              "typeName": ".google.protobuf.FieldDescriptorProto.Type",
              "jsonName": "type"
            },
            {
              "name": "type_name",
              "number": 6,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "typeName"
            },
            {
              "name": "extendee",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "extendee"
            },
            {
              "name": "default_value",
              "number": 7,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "defaultValue"
            },
            {
              "name": "oneof_index",
              "number": 9,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_INT32",
              "jsonName": "oneofIndex"
            },
            {
              "name": "json_name",
              "number": 10,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "jsonName"
            },
            {
              "name": "options",
              "number": 8,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.FieldOptions",
              "jsonName": "options"
            }
          ],
          "enumType": [
            {
              "name": "Type",
              "value": [
                {
                  "name": "TYPE_DOUBLE",
                  "number": 1
                },
                {
                  "name": "TYPE_FLOAT",
                  "number": 2
                },
                {
                  "name": "TYPE_INT64",
                  "number": 3
                },
                {
                  "name": "TYPE_UINT64",
                  "number": 4
                },
                {
                  "name": "TYPE_INT32",
                  "number": 5
                },
                {
                  "name": "TYPE_FIXED64",
                  "number": 6
                },
                {
                  "name": "TYPE_FIXED32",
                  "number": 7
                },
                {
                  "name": "TYPE_BOOL",
                  "number": 8
                },
                {
                  "name": "TYPE_STRING",
                  "number": 9
                },
                {
                  "name": "TYPE_GROUP",
                  "number": 10
                },
                {
                  "name": "TYPE_MESSAGE",
                  "number": 11
                },
                {
                  "name": "TYPE_BYTES",
                  "number": 12
                },
                {
                  "name": "TYPE_UINT32",
                  "number": 13
                },
                {
                  "name": "TYPE_ENUM",
                  "number": 14
                },
                {
                  "name": "TYPE_SFIXED32",
                  "number": 15
                },
                {
                  "name": "TYPE_SFIXED64",
                  "number": 16
                },
                {
                  "name": "TYPE_SINT32",
                  "number": 17
                },
                {
                  "name": "TYPE_SINT64",
                  "number": 18
                }
              ]
            },
            {
              "name": "Label",
              "value": [
                {
                  "name": "LABEL_OPTIONAL",
                  "number": 1
                },
                {
                  "name": "LABEL_REQUIRED",
                  "number": 2
                },
                {
                  "name": "LABEL_REPEATED",
                  "number": 3
                }
              ]
            }
          ]
        },
        {
          "name": "OneofDescriptorProto",
          "field": [
            {
              "name": "name",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "name"
            },
            {
              "name": "options",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.OneofOptions",
              "jsonName": "options"
            }
          ]
        },
        {
          "name": "EnumDescriptorProto",
          "field": [
            {
              "name": "name",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "name"
            },
            {
              "name": "value",
              "number": 2,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.EnumValueDescriptorProto",
              "jsonName": "value"
            },
            {
              "name": "options",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.EnumOptions",
              "jsonName": "options"
            }
          ]
        },
        {
          "name": "EnumValueDescriptorProto",
          "field": [
            {
              "name": "name",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "name"
            },
            {
              "name": "number",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_INT32",
              "jsonName": "number"
            },
            {
              "name": "options",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.EnumValueOptions",
              "jsonName": "options"
            }
          ]
        },
        {
          "name": "ServiceDescriptorProto",
          "field": [
            {
              "name": "name",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "name"
            },
            {
              "name": "method",
              "number": 2,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.MethodDescriptorProto",
              "jsonName": "method"
            },
            {
              "name": "options",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.ServiceOptions",
              "jsonName": "options"
            }
          ]
        },
        {
          "name": "MethodDescriptorProto",
          "field": [
            {
              "name": "name",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "name"
            },
            {
              "name": "input_type",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "inputType"
            },
            {
              "name": "output_type",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "outputType"
            },
            {
              "name": "options",
              "number": 4,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.MethodOptions",
              "jsonName": "options"
            },
            {
              "name": "client_streaming",
              "number": 5,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "clientStreaming"
            },
            {
              "name": "server_streaming",
              "number": 6,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "serverStreaming"
            }
          ]
        },
        {
          "name": "FileOptions",
          "field": [
            {
              "name": "java_package",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "javaPackage"
            },
            {
              "name": "java_outer_classname",
              "number": 8,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "javaOuterClassname"
            },
            {
              "name": "java_multiple_files",
              "number": 10,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "javaMultipleFiles"
            },
            {
              "name": "java_generate_equals_and_hash",
              "number": 20,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "jsonName": "javaGenerateEqualsAndHash",
              "options": {
                "deprecated": true
              }
            },
            {
              "name": "java_string_check_utf8",
              "number": 27,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "javaStringCheckUtf8"
            },
            {
              "name": "optimize_for",
              "number": 9,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_ENUM",
              "typeName": ".google.protobuf.FileOptions.OptimizeMode",
              "defaultValue": "SPEED",
              "jsonName": "optimizeFor"
            },
            {
              "name": "go_package",
              "number": 11,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "goPackage"
            },
            {
              "name": "cc_generic_services",
              "number": 16,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "ccGenericServices"
            },
            {
              "name": "java_generic_services",
              "number": 17,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "javaGenericServices"
            },
            {
              "name": "py_generic_services",
              "number": 18,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "pyGenericServices"
            },
            {
              "name": "deprecated",
              "number": 23,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "deprecated"
            },
            {
              "name": "cc_enable_arenas",
              "number": 31,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "ccEnableArenas"
            },
            {
              "name": "objc_class_prefix",
              "number": 36,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "objcClassPrefix"
            },
            {
              "name": "csharp_namespace",
              "number": 37,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "csharpNamespace"
            },
            {
              "name": "swift_prefix",
              "number": 39,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "swiftPrefix"
            },
            {
              "name": "uninterpreted_option",
              "number": 999,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.UninterpretedOption",
              "jsonName": "uninterpretedOption"
            }
          ],
          "enumType": [
            {
              "name": "OptimizeMode",
              "value": [
                {
                  "name": "SPEED",
                  "number": 1
                },
                {
                  "name": "CODE_SIZE",
                  "number": 2
                },
                {
                  "name": "LITE_RUNTIME",
                  "number": 3
                }
              ]
            }
          ],
          "extensionRange": [
            {
              "start": 1000,
              "end": 536870912
            }
          ],
          "reservedRange": [
            {
              "start": 38,
              "end": 39
            }
          ]
        },
        {
          "name": "MessageOptions",
          "field": [
            {
              "name": "message_set_wire_format",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "messageSetWireFormat"
            },
            {
              "name": "no_standard_descriptor_accessor",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "noStandardDescriptorAccessor"
            },
            {
              "name": "deprecated",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "deprecated"
            },
            {
              "name": "map_entry",
              "number": 7,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "jsonName": "mapEntry"
            },
            {
              "name": "uninterpreted_option",
              "number": 999,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.UninterpretedOption",
              "jsonName": "uninterpretedOption"
            }
          ],
          "extensionRange": [
            {
              "start": 1000,
              "end": 536870912
            }
          ],
          "reservedRange": [
            {
              "start": 8,
              "end": 9
            }
          ]
        },
        {
          "name": "FieldOptions",
          "field": [
            {
              "name": "ctype",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_ENUM",
              "typeName": ".google.protobuf.FieldOptions.CType",
              "defaultValue": "STRING",
              "jsonName": "ctype"
            },
            {
              "name": "packed",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "jsonName": "packed"
            },
            {
              "name": "jstype",
              "number": 6,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_ENUM",
              "typeName": ".google.protobuf.FieldOptions.JSType",
              "defaultValue": "JS_NORMAL",
              "jsonName": "jstype"
            },
            {
              "name": "lazy",
              "number": 5,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "lazy"
            },
            {
              "name": "deprecated",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "deprecated"
            },
            {
              "name": "weak",
              "number": 10,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "weak"
            },
            {
              "name": "uninterpreted_option",
              "number": 999,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.UninterpretedOption",
              "jsonName": "uninterpretedOption"
            }
          ],
          "enumType": [
            {
              "name": "CType",
              "value": [
                {
                  "name": "STRING",
                  "number": 0
                },
                {
                  "name": "CORD",
                  "number": 1
                },
                {
                  "name": "STRING_PIECE",
                  "number": 2
                }
              ]
            },
            {
              "name": "JSType",
              "value": [
                {
                  "name": "JS_NORMAL",
                  "number": 0
                },
                {
                  "name": "JS_STRING",
                  "number": 1
                },
                {
                  "name": "JS_NUMBER",
                  "number": 2
                }
              ]
            }
          ],
          "extensionRange": [
            {
              "start": 1000,
              "end": 536870912
            }
          ],
          "reservedRange": [
            {
              "start": 4,
              "end": 5
            }
          ]
        },
        {
          "name": "OneofOptions",
          "field": [
            {
              "name": "uninterpreted_option",
              "number": 999,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.UninterpretedOption",
              "jsonName": "uninterpretedOption"
            }
          ],
          "extensionRange": [
            {
              "start": 1000,
              "end": 536870912
            }
          ]
        },
        {
          "name": "EnumOptions",
          "field": [
            {
              "name": "allow_alias",
              "number": 2,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "jsonName": "allowAlias"
            },
            {
              "name": "deprecated",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "deprecated"
            },
            {
              "name": "uninterpreted_option",
              "number": 999,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.UninterpretedOption",
              "jsonName": "uninterpretedOption"
            }
          ],
          "extensionRange": [
            {
              "start": 1000,
              "end": 536870912
            }
          ]
        },
        {
          "name": "EnumValueOptions",
          "field": [
            {
              "name": "deprecated",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "deprecated"
            },
            {
              "name": "uninterpreted_option",
              "number": 999,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.UninterpretedOption",
              "jsonName": "uninterpretedOption"
            }
          ],
          "extensionRange": [
            {
              "start": 1000,
              "end": 536870912
            }
          ]
        },
        {
          "name": "ServiceOptions",
          "field": [
            {
              "name": "deprecated",
              "number": 33,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "deprecated"
            },
            {
              "name": "uninterpreted_option",
              "number": 999,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.UninterpretedOption",
              "jsonName": "uninterpretedOption"
            }
          ],
          "extensionRange": [
            {
              "start": 1000,
              "end": 536870912
            }
          ]
        },
        {
          "name": "MethodOptions",
          "field": [
            {
              "name": "deprecated",
              "number": 33,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BOOL",
              "defaultValue": "false",
              "jsonName": "deprecated"
            },
            {
              "name": "idempotency_level",
              "number": 34,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_ENUM",
              "typeName": ".google.protobuf.MethodOptions.IdempotencyLevel",
              "defaultValue": "IDEMPOTENCY_UNKNOWN",
              "jsonName": "idempotencyLevel"
            },
            {
              "name": "uninterpreted_option",
              "number": 999,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.UninterpretedOption",
              "jsonName": "uninterpretedOption"
            }
          ],
          "enumType": [
            {
              "name": "IdempotencyLevel",
              "value": [
                {
                  "name": "IDEMPOTENCY_UNKNOWN",
                  "number": 0
                },
                {
                  "name": "NO_SIDE_EFFECTS",
                  "number": 1
                },
                {
                  "name": "IDEMPOTENT",
                  "number": 2
                }
              ]
            }
          ],
          "extensionRange": [
            {
              "start": 1000,
              "end": 536870912
            }
          ]
        },
        {
          "name": "UninterpretedOption",
          "field": [
            {
              "name": "name",
              "number": 2,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.UninterpretedOption.NamePart",
              "jsonName": "name"
            },
            {
              "name": "identifier_value",
              "number": 3,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "identifierValue"
            },
            {
              "name": "positive_int_value",
              "number": 4,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_UINT64",
              "jsonName": "positiveIntValue"
            },
            {
              "name": "negative_int_value",
              "number": 5,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_INT64",
              "jsonName": "negativeIntValue"
            },
            {
              "name": "double_value",
              "number": 6,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_DOUBLE",
              "jsonName": "doubleValue"
            },
            {
              "name": "string_value",
              "number": 7,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_BYTES",
              "jsonName": "stringValue"
            },
            {
              "name": "aggregate_value",
              "number": 8,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "aggregateValue"
            }
          ],
          "nestedType": [
            {
              "name": "NamePart",
              "field": [
                {
                  "name": "name_part",
                  "number": 1,
                  "label": "LABEL_REQUIRED",
                  "type": "TYPE_STRING",
                  "jsonName": "namePart"
                },
                {
                  "name": "is_extension",
                  "number": 2,
                  "label": "LABEL_REQUIRED",
                  "type": "TYPE_BOOL",
                  "jsonName": "isExtension"
                }
              ]
            }
          ]
        },
        {
          "name": "SourceCodeInfo",
          "field": [
            {
              "name": "location",
              "number": 1,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.SourceCodeInfo.Location",
              "jsonName": "location"
            }
          ],
          "nestedType": [
            {
              "name": "Location",
              "field": [
                {
                  "name": "path",
                  "number": 1,
                  "label": "LABEL_REPEATED",
                  "type": "TYPE_INT32",
                  "jsonName": "path",
                  "options": {
                    "packed": true
                  }
                },
                {
                  "name": "span",
                  "number": 2,
                  "label": "LABEL_REPEATED",
                  "type": "TYPE_INT32",
                  "jsonName": "span",
                  "options": {
                    "packed": true
                  }
                },
                {
                  "name": "leading_comments",
                  "number": 3,
                  "label": "LABEL_OPTIONAL",
                  "type": "TYPE_STRING",
                  "jsonName": "leadingComments"
                },
                {
                  "name": "trailing_comments",
                  "number": 4,
                  "label": "LABEL_OPTIONAL",
                  "type": "TYPE_STRING",
                  "jsonName": "trailingComments"
                },
                {
                  "name": "leading_detached_comments",
                  "number": 6,
                  "label": "LABEL_REPEATED",
                  "type": "TYPE_STRING",
                  "jsonName": "leadingDetachedComments"
                }
              ]
            }
          ]
        },
        {
          "name": "GeneratedCodeInfo",
          "field": [
            {
              "name": "annotation",
              "number": 1,
              "label": "LABEL_REPEATED",
              "type": "TYPE_MESSAGE",
              "typeName": ".google.protobuf.GeneratedCodeInfo.Annotation",
              "jsonName": "annotation"
            }
          ],
          "nestedType": [
            {
              "name": "Annotation",
              "field": [
                {
                  "name": "path",
                  "number": 1,
                  "label": "LABEL_REPEATED",
                  "type": "TYPE_INT32",
                  "jsonName": "path",
                  "options": {
                    "packed": true
                  }
                },
                {
                  "name": "source_file",
                  "number": 2,
                  "label": "LABEL_OPTIONAL",
                  "type": "TYPE_STRING",
                  "jsonName": "sourceFile"
                },
                {
                  "name": "begin",
                  "number": 3,
                  "label": "LABEL_OPTIONAL",
                  "type": "TYPE_INT32",
                  "jsonName": "begin"
                },
                {
                  "name": "end",
                  "number": 4,
                  "label": "LABEL_OPTIONAL",
                  "type": "TYPE_INT32",
                  "jsonName": "end"
                }
              ]
            }
          ]
        }
      ],
      "options": {
        "javaPackage": "com.google.protobuf",
        "javaOuterClassname": "DescriptorProtos",
        "optimizeFor": "SPEED",
        "goPackage": "github.com/golang/protobuf/protoc-gen-go/descriptor;descriptor",
        "objcClassPrefix": "GPB",
        "csharpNamespace": "Google.Protobuf.Reflection"
      },
      "sourceCodeInfo": {
        "location": [
          {
            "span": [
              39,
              0,
              825,
              1
            ]
          },
          {
            "path": [
              12
            ],
            "span": [
              39,
              0,
              18
            ],
            "leadingDetachedComments": [
              " Protocol Buffers - Google's data interchange format\n Copyright 2008 Google Inc.  All rights reserved.\n https://developers.google.com/protocol-buffers/\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n     * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n     * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following disclaimer\n in the documentation and/or other materials provided with the\n distribution.\n     * Neither the name of Google Inc. nor the names of its\n contributors may be used to endorse or promote products derived from\n this software without specific prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n",
              " Author: kenton@google.com (Kenton Varda)\n  Based on original Protocol Buffers design by\n  Sanjay Ghemawat, Jeff Dean, and others.\n\n The messages in this file describe the definitions found in .proto files.\n A valid .proto file can be translated directly to a FileDescriptorProto\n without any other information (e.g. without reading its imports).\n"
            ]
          },
          {
            "path": [
              2
            ],
            "span": [
              41,
              8,
              23
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              42,
              0,
              85
            ]
          },
          {
            "path": [
              8,
              999,
              0
            ],
            "span": [
              42,
              0,
              85
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              2
            ],
            "span": [
              42,
              7,
              17
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              2,
              0
            ],
            "span": [
              42,
              7,
              17
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              2,
              0,
              1
            ],
            "span": [
              42,
              7,
              17
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              7
            ],
            "span": [
              42,
              20,
              84
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              43,
              0,
              44
            ]
          },
          {
            "path": [
              8,
              999,
              1
            ],
            "span": [
              43,
              0,
              44
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              2
            ],
            "span": [
              43,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              2,
              0
            ],
            "span": [
              43,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              2,
              0,
              1
            ],
            "span": [
              43,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              7
            ],
            "span": [
              43,
              22,
              43
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              44,
              0,
              49
            ]
          },
          {
            "path": [
              8,
              999,
              2
            ],
            "span": [
              44,
              0,
              49
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              2
            ],
            "span": [
              44,
              7,
              27
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              2,
              0
            ],
            "span": [
              44,
              7,
              27
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              2,
              0,
              1
            ],
            "span": [
              44,
              7,
              27
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              7
            ],
            "span": [
              44,
              30,
              48
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              45,
              0,
              55
            ]
          },
          {
            "path": [
              8,
              999,
              3
            ],
            "span": [
              45,
              0,
              55
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              2
            ],
            "span": [
              45,
              7,
              23
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              2,
              0
            ],
            "span": [
              45,
              7,
              23
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              2,
              0,
              1
            ],
            "span": [
              45,
              7,
              23
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              7
            ],
            "span": [
              45,
              26,
              54
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              46,
              0,
              33
            ]
          },
          {
            "path": [
              8,
              999,
              4
            ],
            "span": [
              46,
              0,
              33
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              2
            ],
            "span": [
              46,
              7,
              24
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              2,
              0
            ],
            "span": [
              46,
              7,
              24
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              2,
              0,
              1
            ],
            "span": [
              46,
              7,
              24
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              7
            ],
            "span": [
              46,
              27,
              32
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              50,
              0,
              28
            ]
          },
          {
            "path": [
              8,
              999,
              5
            ],
            "span": [
              50,
              0,
              28
            ],
            "leadingComments": " descriptor.proto must be optimized for speed because reflection-based\n algorithms don't work during bootstrapping.\n"
          },
          {
            "path": [
              8,
              999,
              5,
              2
            ],
            "span": [
              50,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              5,
              2,
              0
            ],
            "span": [
              50,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              5,
              2,
              0,
              1
            ],
            "span": [
              50,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              5,
              3
            ],
            "span": [
              50,
              22,
              27
            ]
          },
          {
            "path": [
              4,
              0
            ],
            "span": [
              54,
              0,
              56,
              1
            ],
            "leadingComments": " The protocol compiler can output a FileDescriptorSet containing the .proto\n files it parses.\n"
          },
          {
            "path": [
              4,
              0,
              1
            ],
            "span": [
              54,
              8,
              25
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0
            ],
            "span": [
              55,
              2,
              40
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              4
            ],
            "span": [
              55,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              6
            ],
            "span": [
              55,
              11,
              30
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              1
            ],
            "span": [
              55,
              31,
              35
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              3
            ],
            "span": [
              55,
              38,
              39
            ]
          },
          {
            "path": [
              4,
              1
            ],
            "span": [
              59,
              0,
              88,
              1
            ],
            "leadingComments": " Describes a complete .proto file.\n"
          },
          {
            "path": [
              4,
              1,
              1
            ],
            "span": [
              59,
              8,
              27
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0
            ],
            "span": [
              60,
              2,
              27
            ],
            "trailingComments": " file name, relative to root of source tree\n"
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              4
            ],
            "span": [
              60,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              5
            ],
            "span": [
              60,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              1
            ],
            "span": [
              60,
              18,
              22
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              3
            ],
            "span": [
              60,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              1
            ],
            "span": [
              61,
              2,
              30
            ],
            "trailingComments": " e.g. \"foo\", \"foo.bar\", etc.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              1,
              4
            ],
            "span": [
              61,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              1,
              5
            ],
            "span": [
              61,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              1,
              1
            ],
            "span": [
              61,
              18,
              25
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              1,
              3
            ],
            "span": [
              61,
              28,
              29
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              2
            ],
            "span": [
              64,
              2,
              33
            ],
            "leadingComments": " Names of files imported by this file.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              2,
              4
            ],
            "span": [
              64,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              2,
              5
            ],
            "span": [
              64,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              2,
              1
            ],
            "span": [
              64,
              18,
              28
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              2,
              3
            ],
            "span": [
              64,
              31,
              32
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              3
            ],
            "span": [
              66,
              2,
              40
            ],
            "leadingComments": " Indexes of the public imported files in the dependency list above.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              3,
              4
            ],
            "span": [
              66,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              3,
              5
            ],
            "span": [
              66,
              11,
              16
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              3,
              1
            ],
            "span": [
              66,
              17,
              34
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              3,
              3
            ],
            "span": [
              66,
              37,
              39
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              4
            ],
            "span": [
              69,
              2,
              38
            ],
            "leadingComments": " Indexes of the weak imported files in the dependency list.\n For Google-internal migration only. Do not use.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              4,
              4
            ],
            "span": [
              69,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              4,
              5
            ],
            "span": [
              69,
              11,
              16
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              4,
              1
            ],
            "span": [
              69,
              17,
              32
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              4,
              3
            ],
            "span": [
              69,
              35,
              37
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              5
            ],
            "span": [
              72,
              2,
              44
            ],
            "leadingComments": " All top-level definitions in this file.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              5,
              4
            ],
            "span": [
              72,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              5,
              6
            ],
            "span": [
              72,
              11,
              26
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              5,
              1
            ],
            "span": [
              72,
              27,
              39
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              5,
              3
            ],
            "span": [
              72,
              42,
              43
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              6
            ],
            "span": [
              73,
              2,
              45
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              6,
              4
            ],
            "span": [
              73,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              6,
              6
            ],
            "span": [
              73,
              11,
              30
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              6,
              1
            ],
            "span": [
              73,
              31,
              40
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              6,
              3
            ],
            "span": [
              73,
              43,
              44
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              7
            ],
            "span": [
              74,
              2,
              46
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              7,
              4
            ],
            "span": [
              74,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              7,
              6
            ],
            "span": [
              74,
              11,
              33
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              7,
              1
            ],
            "span": [
              74,
              34,
              41
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              7,
              3
            ],
            "span": [
              74,
              44,
              45
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              8
            ],
            "span": [
              75,
              2,
              46
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              8,
              4
            ],
            "span": [
              75,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              8,
              6
            ],
            "span": [
              75,
              11,
              31
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              8,
              1
            ],
            "span": [
              75,
              32,
              41
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              8,
              3
            ],
            "span": [
              75,
              44,
              45
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              9
            ],
            "span": [
              77,
              2,
              35
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              9,
              4
            ],
            "span": [
              77,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              9,
              6
            ],
            "span": [
              77,
              11,
              22
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              9,
              1
            ],
            "span": [
              77,
              23,
              30
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              9,
              3
            ],
            "span": [
              77,
              33,
              34
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              10
            ],
            "span": [
              83,
              2,
              47
            ],
            "leadingComments": " This field contains optional information about the original source code.\n You may safely remove this entire field without harming runtime\n functionality of the descriptors -- the information is needed only by\n development tools.\n"
          },
          {
            "path": [
              4,
              1,
              2,
              10,
              4
            ],
            "span": [
              83,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              10,
              6
            ],
            "span": [
              83,
              11,
              25
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              10,
              1
            ],
            "span": [
              83,
              26,
              42
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              10,
              3
            ],
            "span": [
              83,
              45,
              46
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              11
            ],
            "span": [
              87,
              2,
              30
            ],
            "leadingComments": " The syntax of the proto file.\n The supported values are \"proto2\" and \"proto3\".\n"
          },
          {
            "path": [
              4,
              1,
              2,
              11,
              4
            ],
            "span": [
              87,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              11,
              5
            ],
            "span": [
              87,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              11,
              1
            ],
            "span": [
              87,
              18,
              24
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              11,
              3
            ],
            "span": [
              87,
              27,
              29
            ]
          },
          {
            "path": [
              4,
              2
            ],
            "span": [
              91,
              0,
              121,
              1
            ],
            "leadingComments": " Describes a message type.\n"
          },
          {
            "path": [
              4,
              2,
              1
            ],
            "span": [
              91,
              8,
              23
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              0
            ],
            "span": [
              92,
              2,
              27
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              0,
              4
            ],
            "span": [
              92,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              0,
              5
            ],
            "span": [
              92,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              0,
              1
            ],
            "span": [
              92,
              18,
              22
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              0,
              3
            ],
            "span": [
              92,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              1
            ],
            "span": [
              94,
              2,
              42
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              1,
              4
            ],
            "span": [
              94,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              1,
              6
            ],
            "span": [
              94,
              11,
              31
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              1,
              1
            ],
            "span": [
              94,
              32,
              37
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              1,
              3
            ],
            "span": [
              94,
              40,
              41
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              2
            ],
            "span": [
              95,
              2,
              46
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              2,
              4
            ],
            "span": [
              95,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              2,
              6
            ],
            "span": [
              95,
              11,
              31
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              2,
              1
            ],
            "span": [
              95,
              32,
              41
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              2,
              3
            ],
            "span": [
              95,
              44,
              45
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              3
            ],
            "span": [
              97,
              2,
              43
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              3,
              4
            ],
            "span": [
              97,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              3,
              6
            ],
            "span": [
              97,
              11,
              26
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              3,
              1
            ],
            "span": [
              97,
              27,
              38
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              3,
              3
            ],
            "span": [
              97,
              41,
              42
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              4
            ],
            "span": [
              98,
              2,
              45
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              4,
              4
            ],
            "span": [
              98,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              4,
              6
            ],
            "span": [
              98,
              11,
              30
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              4,
              1
            ],
            "span": [
              98,
              31,
              40
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              4,
              3
            ],
            "span": [
              98,
              43,
              44
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0
            ],
            "span": [
              100,
              2,
              103,
              3
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0,
              1
            ],
            "span": [
              100,
              10,
              24
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0,
              2,
              0
            ],
            "span": [
              101,
              4,
              29
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0,
              2,
              0,
              4
            ],
            "span": [
              101,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0,
              2,
              0,
              5
            ],
            "span": [
              101,
              13,
              18
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0,
              2,
              0,
              1
            ],
            "span": [
              101,
              19,
              24
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0,
              2,
              0,
              3
            ],
            "span": [
              101,
              27,
              28
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0,
              2,
              1
            ],
            "span": [
              102,
              4,
              27
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0,
              2,
              1,
              4
            ],
            "span": [
              102,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0,
              2,
              1,
              5
            ],
            "span": [
              102,
              13,
              18
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0,
              2,
              1,
              1
            ],
            "span": [
              102,
              19,
              22
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              0,
              2,
              1,
              3
            ],
            "span": [
              102,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              5
            ],
            "span": [
              104,
              2,
              46
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              5,
              4
            ],
            "span": [
              104,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              5,
              6
            ],
            "span": [
              104,
              11,
              25
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              5,
              1
            ],
            "span": [
              104,
              26,
              41
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              5,
              3
            ],
            "span": [
              104,
              44,
              45
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              6
            ],
            "span": [
              106,
              2,
              47
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              6,
              4
            ],
            "span": [
              106,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              6,
              6
            ],
            "span": [
              106,
              11,
              31
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              6,
              1
            ],
            "span": [
              106,
              32,
              42
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              6,
              3
            ],
            "span": [
              106,
              45,
              46
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              7
            ],
            "span": [
              108,
              2,
              38
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              7,
              4
            ],
            "span": [
              108,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              7,
              6
            ],
            "span": [
              108,
              11,
              25
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              7,
              1
            ],
            "span": [
              108,
              26,
              33
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              7,
              3
            ],
            "span": [
              108,
              36,
              37
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              1
            ],
            "span": [
              113,
              2,
              116,
              3
            ],
            "leadingComments": " Range of reserved tag numbers. Reserved tag numbers may not be used by\n fields or extension ranges in the same message. Reserved ranges may\n not overlap.\n"
          },
          {
            "path": [
              4,
              2,
              3,
              1,
              1
            ],
            "span": [
              113,
              10,
              23
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              1,
              2,
              0
            ],
            "span": [
              114,
              4,
              29
            ],
            "trailingComments": " Inclusive.\n"
          },
          {
            "path": [
              4,
              2,
              3,
              1,
              2,
              0,
              4
            ],
            "span": [
              114,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              1,
              2,
              0,
              5
            ],
            "span": [
              114,
              13,
              18
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              1,
              2,
              0,
              1
            ],
            "span": [
              114,
              19,
              24
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              1,
              2,
              0,
              3
            ],
            "span": [
              114,
              27,
              28
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              1,
              2,
              1
            ],
            "span": [
              115,
              4,
              27
            ],
            "trailingComments": " Exclusive.\n"
          },
          {
            "path": [
              4,
              2,
              3,
              1,
              2,
              1,
              4
            ],
            "span": [
              115,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              1,
              2,
              1,
              5
            ],
            "span": [
              115,
              13,
              18
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              1,
              2,
              1,
              1
            ],
            "span": [
              115,
              19,
              22
            ]
          },
          {
            "path": [
              4,
              2,
              3,
              1,
              2,
              1,
              3
            ],
            "span": [
              115,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              8
            ],
            "span": [
              117,
              2,
              44
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              8,
              4
            ],
            "span": [
              117,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              8,
              6
            ],
            "span": [
              117,
              11,
              24
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              8,
              1
            ],
            "span": [
              117,
              25,
              39
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              8,
              3
            ],
            "span": [
              117,
              42,
              43
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              9
            ],
            "span": [
              120,
              2,
              37
            ],
            "leadingComments": " Reserved field names, which may not be used by fields in the same message.\n A given name may only be reserved once.\n"
          },
          {
            "path": [
              4,
              2,
              2,
              9,
              4
            ],
            "span": [
              120,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              9,
              5
            ],
            "span": [
              120,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              9,
              1
            ],
            "span": [
              120,
              18,
              31
            ]
          },
          {
            "path": [
              4,
              2,
              2,
              9,
              3
            ],
            "span": [
              120,
              34,
              36
            ]
          },
          {
            "path": [
              4,
              3
            ],
            "span": [
              124,
              0,
              202,
              1
            ],
            "leadingComments": " Describes a field within a message.\n"
          },
          {
            "path": [
              4,
              3,
              1
            ],
            "span": [
              124,
              8,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0
            ],
            "span": [
              125,
              2,
              156,
              3
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              1
            ],
            "span": [
              125,
              7,
              11
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              0
            ],
            "span": [
              128,
              4,
              28
            ],
            "leadingComments": " 0 is reserved for errors.\n Order is weird for historical reasons.\n"
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              0,
              1
            ],
            "span": [
              128,
              4,
              15
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              0,
              2
            ],
            "span": [
              128,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              1
            ],
            "span": [
              129,
              4,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              1,
              1
            ],
            "span": [
              129,
              4,
              14
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              1,
              2
            ],
            "span": [
              129,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              2
            ],
            "span": [
              132,
              4,
              28
            ],
            "leadingComments": " Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if\n negative values are likely.\n"
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              2,
              1
            ],
            "span": [
              132,
              4,
              14
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              2,
              2
            ],
            "span": [
              132,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              3
            ],
            "span": [
              133,
              4,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              3,
              1
            ],
            "span": [
              133,
              4,
              15
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              3,
              2
            ],
            "span": [
              133,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              4
            ],
            "span": [
              136,
              4,
              28
            ],
            "leadingComments": " Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if\n negative values are likely.\n"
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              4,
              1
            ],
            "span": [
              136,
              4,
              14
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              4,
              2
            ],
            "span": [
              136,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              5
            ],
            "span": [
              137,
              4,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              5,
              1
            ],
            "span": [
              137,
              4,
              16
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              5,
              2
            ],
            "span": [
              137,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              6
            ],
            "span": [
              138,
              4,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              6,
              1
            ],
            "span": [
              138,
              4,
              16
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              6,
              2
            ],
            "span": [
              138,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              7
            ],
            "span": [
              139,
              4,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              7,
              1
            ],
            "span": [
              139,
              4,
              13
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              7,
              2
            ],
            "span": [
              139,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              8
            ],
            "span": [
              140,
              4,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              8,
              1
            ],
            "span": [
              140,
              4,
              15
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              8,
              2
            ],
            "span": [
              140,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              9
            ],
            "span": [
              145,
              4,
              29
            ],
            "leadingComments": " Tag-delimited aggregate.\n Group type is deprecated and not supported in proto3. However, Proto3\n implementations should still be able to parse the group wire format and\n treat group fields as unknown fields.\n"
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              9,
              1
            ],
            "span": [
              145,
              4,
              14
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              9,
              2
            ],
            "span": [
              145,
              26,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              10
            ],
            "span": [
              146,
              4,
              29
            ],
            "trailingComments": " Length-delimited aggregate.\n"
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              10,
              1
            ],
            "span": [
              146,
              4,
              16
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              10,
              2
            ],
            "span": [
              146,
              26,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              11
            ],
            "span": [
              149,
              4,
              29
            ],
            "leadingComments": " New in version 2.\n"
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              11,
              1
            ],
            "span": [
              149,
              4,
              14
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              11,
              2
            ],
            "span": [
              149,
              26,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              12
            ],
            "span": [
              150,
              4,
              29
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              12,
              1
            ],
            "span": [
              150,
              4,
              15
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              12,
              2
            ],
            "span": [
              150,
              26,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              13
            ],
            "span": [
              151,
              4,
              29
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              13,
              1
            ],
            "span": [
              151,
              4,
              13
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              13,
              2
            ],
            "span": [
              151,
              26,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              14
            ],
            "span": [
              152,
              4,
              29
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              14,
              1
            ],
            "span": [
              152,
              4,
              17
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              14,
              2
            ],
            "span": [
              152,
              26,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              15
            ],
            "span": [
              153,
              4,
              29
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              15,
              1
            ],
            "span": [
              153,
              4,
              17
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              15,
              2
            ],
            "span": [
              153,
              26,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              16
            ],
            "span": [
              154,
              4,
              29
            ],
            "trailingComments": " Uses ZigZag encoding.\n"
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              16,
              1
            ],
            "span": [
              154,
              4,
              15
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              16,
              2
            ],
            "span": [
              154,
              26,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              17
            ],
            "span": [
              155,
              4,
              29
            ],
            "trailingComments": " Uses ZigZag encoding.\n"
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              17,
              1
            ],
            "span": [
              155,
              4,
              15
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              0,
              2,
              17,
              2
            ],
            "span": [
              155,
              26,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              1
            ],
            "span": [
              158,
              2,
              163,
              3
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              1,
              1
            ],
            "span": [
              158,
              7,
              12
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              1,
              2,
              0
            ],
            "span": [
              160,
              4,
              28
            ],
            "leadingComments": " 0 is reserved for errors\n"
          },
          {
            "path": [
              4,
              3,
              4,
              1,
              2,
              0,
              1
            ],
            "span": [
              160,
              4,
              18
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              1,
              2,
              0,
              2
            ],
            "span": [
              160,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              1,
              2,
              1
            ],
            "span": [
              161,
              4,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              1,
              2,
              1,
              1
            ],
            "span": [
              161,
              4,
              18
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              1,
              2,
              1,
              2
            ],
            "span": [
              161,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              1,
              2,
              2
            ],
            "span": [
              162,
              4,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              1,
              2,
              2,
              1
            ],
            "span": [
              162,
              4,
              18
            ]
          },
          {
            "path": [
              4,
              3,
              4,
              1,
              2,
              2,
              2
            ],
            "span": [
              162,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              0
            ],
            "span": [
              165,
              2,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              0,
              4
            ],
            "span": [
              165,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              0,
              5
            ],
            "span": [
              165,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              0,
              1
            ],
            "span": [
              165,
              18,
              22
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              0,
              3
            ],
            "span": [
              165,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              1
            ],
            "span": [
              166,
              2,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              1,
              4
            ],
            "span": [
              166,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              1,
              5
            ],
            "span": [
              166,
              11,
              16
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              1,
              1
            ],
            "span": [
              166,
              17,
              23
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              1,
              3
            ],
            "span": [
              166,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              2
            ],
            "span": [
              167,
              2,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              2,
              4
            ],
            "span": [
              167,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              2,
              6
            ],
            "span": [
              167,
              11,
              16
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              2,
              1
            ],
            "span": [
              167,
              17,
              22
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              2,
              3
            ],
            "span": [
              167,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              3
            ],
            "span": [
              171,
              2,
              25
            ],
            "leadingComments": " If type_name is set, this need not be set.  If both this and type_name\n are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.\n"
          },
          {
            "path": [
              4,
              3,
              2,
              3,
              4
            ],
            "span": [
              171,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              3,
              6
            ],
            "span": [
              171,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              3,
              1
            ],
            "span": [
              171,
              16,
              20
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              3,
              3
            ],
            "span": [
              171,
              23,
              24
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              4
            ],
            "span": [
              178,
              2,
              32
            ],
            "leadingComments": " For message and enum types, this is the name of the type.  If the name\n starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping\n rules are used to find the type (i.e. first the nested types within this\n message are searched, then within the parent, on up to the root\n namespace).\n"
          },
          {
            "path": [
              4,
              3,
              2,
              4,
              4
            ],
            "span": [
              178,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              4,
              5
            ],
            "span": [
              178,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              4,
              1
            ],
            "span": [
              178,
              18,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              4,
              3
            ],
            "span": [
              178,
              30,
              31
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              5
            ],
            "span": [
              182,
              2,
              31
            ],
            "leadingComments": " For extensions, this is the name of the type being extended.  It is\n resolved in the same manner as type_name.\n"
          },
          {
            "path": [
              4,
              3,
              2,
              5,
              4
            ],
            "span": [
              182,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              5,
              5
            ],
            "span": [
              182,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              5,
              1
            ],
            "span": [
              182,
              18,
              26
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              5,
              3
            ],
            "span": [
              182,
              29,
              30
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              6
            ],
            "span": [
              189,
              2,
              36
            ],
            "leadingComments": " For numeric types, contains the original text representation of the value.\n For booleans, \"true\" or \"false\".\n For strings, contains the default text contents (not escaped in any way).\n For bytes, contains the C escaped value.  All bytes >= 128 are escaped.\n TODO(kenton):  Base-64 encode?\n"
          },
          {
            "path": [
              4,
              3,
              2,
              6,
              4
            ],
            "span": [
              189,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              6,
              5
            ],
            "span": [
              189,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              6,
              1
            ],
            "span": [
              189,
              18,
              31
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              6,
              3
            ],
            "span": [
              189,
              34,
              35
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              7
            ],
            "span": [
              193,
              2,
              33
            ],
            "leadingComments": " If set, gives the index of a oneof in the containing type's oneof_decl\n list.  This field is a member of that oneof.\n"
          },
          {
            "path": [
              4,
              3,
              2,
              7,
              4
            ],
            "span": [
              193,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              7,
              5
            ],
            "span": [
              193,
              11,
              16
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              7,
              1
            ],
            "span": [
              193,
              17,
              28
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              7,
              3
            ],
            "span": [
              193,
              31,
              32
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              8
            ],
            "span": [
              199,
              2,
              33
            ],
            "leadingComments": " JSON name of this field. The value is set by protocol compiler. If the\n user has set a \"json_name\" option on this field, that option's value\n will be used. Otherwise, it's deduced from the field's name by converting\n it to camelCase.\n"
          },
          {
            "path": [
              4,
              3,
              2,
              8,
              4
            ],
            "span": [
              199,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              8,
              5
            ],
            "span": [
              199,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              8,
              1
            ],
            "span": [
              199,
              18,
              27
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              8,
              3
            ],
            "span": [
              199,
              30,
              32
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              9
            ],
            "span": [
              201,
              2,
              36
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              9,
              4
            ],
            "span": [
              201,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              9,
              6
            ],
            "span": [
              201,
              11,
              23
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              9,
              1
            ],
            "span": [
              201,
              24,
              31
            ]
          },
          {
            "path": [
              4,
              3,
              2,
              9,
              3
            ],
            "span": [
              201,
              34,
              35
            ]
          },
          {
            "path": [
              4,
              4
            ],
            "span": [
              205,
              0,
              208,
              1
            ],
            "leadingComments": " Describes a oneof.\n"
          },
          {
            "path": [
              4,
              4,
              1
            ],
            "span": [
              205,
              8,
              28
            ]
          },
          {
            "path": [
              4,
              4,
              2,
              0
            ],
            "span": [
              206,
              2,
              27
            ]
          },
          {
            "path": [
              4,
              4,
              2,
              0,
              4
            ],
            "span": [
              206,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              4,
              2,
              0,
              5
            ],
            "span": [
              206,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              4,
              2,
              0,
              1
            ],
            "span": [
              206,
              18,
              22
            ]
          },
          {
            "path": [
              4,
              4,
              2,
              0,
              3
            ],
            "span": [
              206,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              4,
              2,
              1
            ],
            "span": [
              207,
              2,
              36
            ]
          },
          {
            "path": [
              4,
              4,
              2,
              1,
              4
            ],
            "span": [
              207,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              4,
              2,
              1,
              6
            ],
            "span": [
              207,
              11,
              23
            ]
          },
          {
            "path": [
              4,
              4,
              2,
              1,
              1
            ],
            "span": [
              207,
              24,
              31
            ]
          },
          {
            "path": [
              4,
              4,
              2,
              1,
              3
            ],
            "span": [
              207,
              34,
              35
            ]
          },
          {
            "path": [
              4,
              5
            ],
            "span": [
              211,
              0,
              217,
              1
            ],
            "leadingComments": " Describes an enum type.\n"
          },
          {
            "path": [
              4,
              5,
              1
            ],
            "span": [
              211,
              8,
              27
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              0
            ],
            "span": [
              212,
              2,
              27
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              0,
              4
            ],
            "span": [
              212,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              0,
              5
            ],
            "span": [
              212,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              0,
              1
            ],
            "span": [
              212,
              18,
              22
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              0,
              3
            ],
            "span": [
              212,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              1
            ],
            "span": [
              214,
              2,
              46
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              1,
              4
            ],
            "span": [
              214,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              1,
              6
            ],
            "span": [
              214,
              11,
              35
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              1,
              1
            ],
            "span": [
              214,
              36,
              41
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              1,
              3
            ],
            "span": [
              214,
              44,
              45
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              2
            ],
            "span": [
              216,
              2,
              35
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              2,
              4
            ],
            "span": [
              216,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              2,
              6
            ],
            "span": [
              216,
              11,
              22
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              2,
              1
            ],
            "span": [
              216,
              23,
              30
            ]
          },
          {
            "path": [
              4,
              5,
              2,
              2,
              3
            ],
            "span": [
              216,
              33,
              34
            ]
          },
          {
            "path": [
              4,
              6
            ],
            "span": [
              220,
              0,
              225,
              1
            ],
            "leadingComments": " Describes a value within an enum.\n"
          },
          {
            "path": [
              4,
              6,
              1
            ],
            "span": [
              220,
              8,
              32
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              0
            ],
            "span": [
              221,
              2,
              27
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              0,
              4
            ],
            "span": [
              221,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              0,
              5
            ],
            "span": [
              221,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              0,
              1
            ],
            "span": [
              221,
              18,
              22
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              0,
              3
            ],
            "span": [
              221,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              1
            ],
            "span": [
              222,
              2,
              28
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              1,
              4
            ],
            "span": [
              222,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              1,
              5
            ],
            "span": [
              222,
              11,
              16
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              1,
              1
            ],
            "span": [
              222,
              17,
              23
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              1,
              3
            ],
            "span": [
              222,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              2
            ],
            "span": [
              224,
              2,
              40
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              2,
              4
            ],
            "span": [
              224,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              2,
              6
            ],
            "span": [
              224,
              11,
              27
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              2,
              1
            ],
            "span": [
              224,
              28,
              35
            ]
          },
          {
            "path": [
              4,
              6,
              2,
              2,
              3
            ],
            "span": [
              224,
              38,
              39
            ]
          },
          {
            "path": [
              4,
              7
            ],
            "span": [
              228,
              0,
              233,
              1
            ],
            "leadingComments": " Describes a service.\n"
          },
          {
            "path": [
              4,
              7,
              1
            ],
            "span": [
              228,
              8,
              30
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              0
            ],
            "span": [
              229,
              2,
              27
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              0,
              4
            ],
            "span": [
              229,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              0,
              5
            ],
            "span": [
              229,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              0,
              1
            ],
            "span": [
              229,
              18,
              22
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              0,
              3
            ],
            "span": [
              229,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              1
            ],
            "span": [
              230,
              2,
              44
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              1,
              4
            ],
            "span": [
              230,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              1,
              6
            ],
            "span": [
              230,
              11,
              32
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              1,
              1
            ],
            "span": [
              230,
              33,
              39
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              1,
              3
            ],
            "span": [
              230,
              42,
              43
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              2
            ],
            "span": [
              232,
              2,
              38
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              2,
              4
            ],
            "span": [
              232,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              2,
              6
            ],
            "span": [
              232,
              11,
              25
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              2,
              1
            ],
            "span": [
              232,
              26,
              33
            ]
          },
          {
            "path": [
              4,
              7,
              2,
              2,
              3
            ],
            "span": [
              232,
              36,
              37
            ]
          },
          {
            "path": [
              4,
              8
            ],
            "span": [
              236,
              0,
              250,
              1
            ],
            "leadingComments": " Describes a method of a service.\n"
          },
          {
            "path": [
              4,
              8,
              1
            ],
            "span": [
              236,
              8,
              29
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              0
            ],
            "span": [
              237,
              2,
              27
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              0,
              4
            ],
            "span": [
              237,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              0,
              5
            ],
            "span": [
              237,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              0,
              1
            ],
            "span": [
              237,
              18,
              22
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              0,
              3
            ],
            "span": [
              237,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              1
            ],
            "span": [
              241,
              2,
              33
            ],
            "leadingComments": " Input and output type names.  These are resolved in the same way as\n FieldDescriptorProto.type_name, but must refer to a message type.\n"
          },
          {
            "path": [
              4,
              8,
              2,
              1,
              4
            ],
            "span": [
              241,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              1,
              5
            ],
            "span": [
              241,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              1,
              1
            ],
            "span": [
              241,
              18,
              28
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              1,
              3
            ],
            "span": [
              241,
              31,
              32
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              2
            ],
            "span": [
              242,
              2,
              34
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              2,
              4
            ],
            "span": [
              242,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              2,
              5
            ],
            "span": [
              242,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              2,
              1
            ],
            "span": [
              242,
              18,
              29
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              2,
              3
            ],
            "span": [
              242,
              32,
              33
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              3
            ],
            "span": [
              244,
              2,
              37
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              3,
              4
            ],
            "span": [
              244,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              3,
              6
            ],
            "span": [
              244,
              11,
              24
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              3,
              1
            ],
            "span": [
              244,
              25,
              32
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              3,
              3
            ],
            "span": [
              244,
              35,
              36
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              4
            ],
            "span": [
              247,
              2,
              53
            ],
            "leadingComments": " Identifies if client streams multiple client messages\n"
          },
          {
            "path": [
              4,
              8,
              2,
              4,
              4
            ],
            "span": [
              247,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              4,
              5
            ],
            "span": [
              247,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              4,
              1
            ],
            "span": [
              247,
              16,
              32
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              4,
              3
            ],
            "span": [
              247,
              35,
              36
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              4,
              8
            ],
            "span": [
              247,
              37,
              52
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              4,
              7
            ],
            "span": [
              247,
              46,
              51
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              5
            ],
            "span": [
              249,
              2,
              53
            ],
            "leadingComments": " Identifies if server streams multiple server messages\n"
          },
          {
            "path": [
              4,
              8,
              2,
              5,
              4
            ],
            "span": [
              249,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              5,
              5
            ],
            "span": [
              249,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              5,
              1
            ],
            "span": [
              249,
              16,
              32
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              5,
              3
            ],
            "span": [
              249,
              35,
              36
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              5,
              8
            ],
            "span": [
              249,
              37,
              52
            ]
          },
          {
            "path": [
              4,
              8,
              2,
              5,
              7
            ],
            "span": [
              249,
              46,
              51
            ]
          },
          {
            "path": [
              4,
              9
            ],
            "span": [
              286,
              0,
              385,
              1
            ],
            "leadingDetachedComments": [
              " ===================================================================\n Options\n",
              " Each of the definitions above may have \"options\" attached.  These are\n just annotations which may cause code to be generated slightly differently\n or may contain hints for code that manipulates protocol messages.\n\n Clients may define custom options as extensions of the *Options messages.\n These extensions may not yet be known at parsing time, so the parser cannot\n store the values in them.  Instead it stores them in a field in the *Options\n message called uninterpreted_option. This field must have the same name\n across all *Options messages. We then use this field to populate the\n extensions when we build a descriptor, at which point all protos have been\n parsed and so all extensions are known.\n\n Extension numbers for custom options may be chosen as follows:\n * For options which will only be used within a single application or\n   organization, or for experimental options, use field numbers 50000\n   through 99999.  It is up to you to ensure that you do not use the\n   same number for multiple options.\n * For options which will be published and used publicly by multiple\n   independent entities, e-mail protobuf-global-extension-registry@google.com\n   to reserve extension numbers. Simply provide your project name (e.g.\n   Objective-C plugin) and your project website (if available) -- there's no\n   need to explain how you intend to use them. Usually you only need one\n   extension number. You can declare multiple options with only one extension\n   number by putting them in a sub-message. See the Custom Options section of\n   the docs for examples:\n   https://developers.google.com/protocol-buffers/docs/proto#options\n   If this turns out to be popular, a web service will be set up\n   to automatically assign option numbers.\n"
            ]
          },
          {
            "path": [
              4,
              9,
              1
            ],
            "span": [
              286,
              8,
              19
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              0
            ],
            "span": [
              292,
              2,
              35
            ],
            "leadingComments": " Sets the Java package where classes generated from this .proto will be\n placed.  By default, the proto package is used, but this is often\n inappropriate because proto packages do not normally start with backwards\n domain names.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              0,
              4
            ],
            "span": [
              292,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              0,
              5
            ],
            "span": [
              292,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              0,
              1
            ],
            "span": [
              292,
              18,
              30
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              0,
              3
            ],
            "span": [
              292,
              33,
              34
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              1
            ],
            "span": [
              300,
              2,
              43
            ],
            "leadingComments": " If set, all the classes from the .proto file are wrapped in a single\n outer class with the given name.  This applies to both Proto1\n (equivalent to the old \"--one_java_file\" option) and Proto2 (where\n a .proto always translates to a single class, but you may want to\n explicitly choose the class name).\n"
          },
          {
            "path": [
              4,
              9,
              2,
              1,
              4
            ],
            "span": [
              300,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              1,
              5
            ],
            "span": [
              300,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              1,
              1
            ],
            "span": [
              300,
              18,
              38
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              1,
              3
            ],
            "span": [
              300,
              41,
              42
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              2
            ],
            "span": [
              308,
              2,
              57
            ],
            "leadingComments": " If set true, then the Java code generator will generate a separate .java\n file for each top-level message, enum, and service defined in the .proto\n file.  Thus, these types will *not* be nested inside the outer class\n named by java_outer_classname.  However, the outer class will still be\n generated to contain the file's getDescriptor() method as well as any\n top-level extensions defined in the file.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              2,
              4
            ],
            "span": [
              308,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              2,
              5
            ],
            "span": [
              308,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              2,
              1
            ],
            "span": [
              308,
              16,
              35
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              2,
              3
            ],
            "span": [
              308,
              38,
              40
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              2,
              8
            ],
            "span": [
              308,
              41,
              56
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              2,
              7
            ],
            "span": [
              308,
              50,
              55
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              3
            ],
            "span": [
              311,
              2,
              69
            ],
            "leadingComments": " This option does nothing.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              3,
              4
            ],
            "span": [
              311,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              3,
              5
            ],
            "span": [
              311,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              3,
              1
            ],
            "span": [
              311,
              16,
              45
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              3,
              3
            ],
            "span": [
              311,
              48,
              50
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              3,
              8
            ],
            "span": [
              311,
              51,
              68
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              3,
              8,
              999,
              0
            ],
            "span": [
              311,
              52,
              67
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              3,
              8,
              999,
              0,
              2
            ],
            "span": [
              311,
              52,
              62
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              3,
              8,
              999,
              0,
              2,
              0
            ],
            "span": [
              311,
              52,
              62
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              3,
              8,
              999,
              0,
              2,
              0,
              1
            ],
            "span": [
              311,
              52,
              62
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              3,
              8,
              999,
              0,
              3
            ],
            "span": [
              311,
              63,
              67
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              4
            ],
            "span": [
              319,
              2,
              60
            ],
            "leadingComments": " If set true, then the Java2 code generator will generate code that\n throws an exception whenever an attempt is made to assign a non-UTF-8\n byte sequence to a string field.\n Message reflection will do the same.\n However, an extension field still accepts non-UTF-8 byte sequences.\n This option has no effect on when used with the lite runtime.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              4,
              4
            ],
            "span": [
              319,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              4,
              5
            ],
            "span": [
              319,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              4,
              1
            ],
            "span": [
              319,
              16,
              38
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              4,
              3
            ],
            "span": [
              319,
              41,
              43
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              4,
              8
            ],
            "span": [
              319,
              44,
              59
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              4,
              7
            ],
            "span": [
              319,
              53,
              58
            ]
          },
          {
            "path": [
              4,
              9,
              4,
              0
            ],
            "span": [
              323,
              2,
              328,
              3
            ],
            "leadingComments": " Generated classes can be optimized for speed or code size.\n"
          },
          {
            "path": [
              4,
              9,
              4,
              0,
              1
            ],
            "span": [
              323,
              7,
              19
            ]
          },
          {
            "path": [
              4,
              9,
              4,
              0,
              2,
              0
            ],
            "span": [
              324,
              4,
              14
            ],
            "trailingComments": " Generate complete code for parsing, serialization,\n"
          },
          {
            "path": [
              4,
              9,
              4,
              0,
              2,
              0,
              1
            ],
            "span": [
              324,
              4,
              9
            ]
          },
          {
            "path": [
              4,
              9,
              4,
              0,
              2,
              0,
              2
            ],
            "span": [
              324,
              12,
              13
            ]
          },
          {
            "path": [
              4,
              9,
              4,
              0,
              2,
              1
            ],
            "span": [
              326,
              4,
              18
            ],
            "leadingComments": " etc.\n",
            "trailingComments": " Use ReflectionOps to implement these methods.\n"
          },
          {
            "path": [
              4,
              9,
              4,
              0,
              2,
              1,
              1
            ],
            "span": [
              326,
              4,
              13
            ]
          },
          {
            "path": [
              4,
              9,
              4,
              0,
              2,
              1,
              2
            ],
            "span": [
              326,
              16,
              17
            ]
          },
          {
            "path": [
              4,
              9,
              4,
              0,
              2,
              2
            ],
            "span": [
              327,
              4,
              21
            ],
            "trailingComments": " Generate code using MessageLite and the lite runtime.\n"
          },
          {
            "path": [
              4,
              9,
              4,
              0,
              2,
              2,
              1
            ],
            "span": [
              327,
              4,
              16
            ]
          },
          {
            "path": [
              4,
              9,
              4,
              0,
              2,
              2,
              2
            ],
            "span": [
              327,
              19,
              20
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              5
            ],
            "span": [
              329,
              2,
              57
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              5,
              4
            ],
            "span": [
              329,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              5,
              6
            ],
            "span": [
              329,
              11,
              23
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              5,
              1
            ],
            "span": [
              329,
              24,
              36
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              5,
              3
            ],
            "span": [
              329,
              39,
              40
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              5,
              8
            ],
            "span": [
              329,
              41,
              56
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              5,
              7
            ],
            "span": [
              329,
              50,
              55
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              6
            ],
            "span": [
              336,
              2,
              34
            ],
            "leadingComments": " Sets the Go package where structs generated from this .proto will be\n placed. If omitted, the Go package will be derived from the following:\n   - The basename of the package import path, if provided.\n   - Otherwise, the package statement in the .proto file, if present.\n   - Otherwise, the basename of the .proto file, without extension.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              6,
              4
            ],
            "span": [
              336,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              6,
              5
            ],
            "span": [
              336,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              6,
              1
            ],
            "span": [
              336,
              18,
              28
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              6,
              3
            ],
            "span": [
              336,
              31,
              33
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              7
            ],
            "span": [
              350,
              2,
              57
            ],
            "leadingComments": " Should generic services be generated in each language?  \"Generic\" services\n are not specific to any particular RPC system.  They are generated by the\n main code generators in each language (without additional plugins).\n Generic services were the only kind of service generation supported by\n early versions of google.protobuf.\n\n Generic services are now considered deprecated in favor of using plugins\n that generate code specific to your particular RPC system.  Therefore,\n these default to false.  Old code which depends on generic services should\n explicitly set them to true.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              7,
              4
            ],
            "span": [
              350,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              7,
              5
            ],
            "span": [
              350,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              7,
              1
            ],
            "span": [
              350,
              16,
              35
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              7,
              3
            ],
            "span": [
              350,
              38,
              40
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              7,
              8
            ],
            "span": [
              350,
              41,
              56
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              7,
              7
            ],
            "span": [
              350,
              50,
              55
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              8
            ],
            "span": [
              351,
              2,
              59
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              8,
              4
            ],
            "span": [
              351,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              8,
              5
            ],
            "span": [
              351,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              8,
              1
            ],
            "span": [
              351,
              16,
              37
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              8,
              3
            ],
            "span": [
              351,
              40,
              42
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              8,
              8
            ],
            "span": [
              351,
              43,
              58
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              8,
              7
            ],
            "span": [
              351,
              52,
              57
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              9
            ],
            "span": [
              352,
              2,
              57
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              9,
              4
            ],
            "span": [
              352,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              9,
              5
            ],
            "span": [
              352,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              9,
              1
            ],
            "span": [
              352,
              16,
              35
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              9,
              3
            ],
            "span": [
              352,
              38,
              40
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              9,
              8
            ],
            "span": [
              352,
              41,
              56
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              9,
              7
            ],
            "span": [
              352,
              50,
              55
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              10
            ],
            "span": [
              358,
              2,
              48
            ],
            "leadingComments": " Is this file deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for everything in the file, or it will be completely ignored; in the very\n least, this is a formalization for deprecating files.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              10,
              4
            ],
            "span": [
              358,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              10,
              5
            ],
            "span": [
              358,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              10,
              1
            ],
            "span": [
              358,
              16,
              26
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              10,
              3
            ],
            "span": [
              358,
              29,
              31
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              10,
              8
            ],
            "span": [
              358,
              32,
              47
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              10,
              7
            ],
            "span": [
              358,
              41,
              46
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              11
            ],
            "span": [
              362,
              2,
              54
            ],
            "leadingComments": " Enables the use of arenas for the proto messages in this file. This applies\n only to generated classes for C++.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              11,
              4
            ],
            "span": [
              362,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              11,
              5
            ],
            "span": [
              362,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              11,
              1
            ],
            "span": [
              362,
              16,
              32
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              11,
              3
            ],
            "span": [
              362,
              35,
              37
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              11,
              8
            ],
            "span": [
              362,
              38,
              53
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              11,
              7
            ],
            "span": [
              362,
              47,
              52
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              12
            ],
            "span": [
              367,
              2,
              41
            ],
            "leadingComments": " Sets the objective c class prefix which is prepended to all objective c\n generated classes from this .proto. There is no default.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              12,
              4
            ],
            "span": [
              367,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              12,
              5
            ],
            "span": [
              367,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              12,
              1
            ],
            "span": [
              367,
              18,
              35
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              12,
              3
            ],
            "span": [
              367,
              38,
              40
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              13
            ],
            "span": [
              370,
              2,
              40
            ],
            "leadingComments": " Namespace for generated classes; defaults to the package.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              13,
              4
            ],
            "span": [
              370,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              13,
              5
            ],
            "span": [
              370,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              13,
              1
            ],
            "span": [
              370,
              18,
              34
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              13,
              3
            ],
            "span": [
              370,
              37,
              39
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              14
            ],
            "span": [
              376,
              2,
              36
            ],
            "leadingComments": " By default Swift generators will take the proto package and CamelCase it\n replacing '.' with underscore and use that to prefix the types/symbols\n defined. When this options is provided, they will use this value instead\n to prefix the types/symbols defined.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              14,
              4
            ],
            "span": [
              376,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              14,
              5
            ],
            "span": [
              376,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              14,
              1
            ],
            "span": [
              376,
              18,
              30
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              14,
              3
            ],
            "span": [
              376,
              33,
              35
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              15
            ],
            "span": [
              379,
              2,
              58
            ],
            "leadingComments": " The parser stores options it doesn't recognize here. See above.\n"
          },
          {
            "path": [
              4,
              9,
              2,
              15,
              4
            ],
            "span": [
              379,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              15,
              6
            ],
            "span": [
              379,
              11,
              30
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              15,
              1
            ],
            "span": [
              379,
              31,
              51
            ]
          },
          {
            "path": [
              4,
              9,
              2,
              15,
              3
            ],
            "span": [
              379,
              54,
              57
            ]
          },
          {
            "path": [
              4,
              9,
              5
            ],
            "span": [
              382,
              2,
              25
            ],
            "leadingComments": " Clients can define custom options in extensions of this message. See above.\n"
          },
          {
            "path": [
              4,
              9,
              5,
              0
            ],
            "span": [
              382,
              13,
              24
            ]
          },
          {
            "path": [
              4,
              9,
              5,
              0,
              1
            ],
            "span": [
              382,
              13,
              17
            ]
          },
          {
            "path": [
              4,
              9,
              5,
              0,
              2
            ],
            "span": [
              382,
              21,
              24
            ]
          },
          {
            "path": [
              4,
              9,
              9
            ],
            "span": [
              384,
              11,
              14
            ]
          },
          {
            "path": [
              4,
              9,
              9,
              0
            ],
            "span": [
              384,
              11,
              13
            ]
          },
          {
            "path": [
              4,
              9,
              9,
              0,
              1
            ],
            "span": [
              384,
              11,
              13
            ]
          },
          {
            "path": [
              4,
              9,
              9,
              0,
              2
            ],
            "span": [
              384,
              11,
              13
            ]
          },
          {
            "path": [
              4,
              10
            ],
            "span": [
              387,
              0,
              450,
              1
            ]
          },
          {
            "path": [
              4,
              10,
              1
            ],
            "span": [
              387,
              8,
              22
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              0
            ],
            "span": [
              406,
              2,
              60
            ],
            "leadingComments": " Set true to use the old proto1 MessageSet wire format for extensions.\n This is provided for backwards-compatibility with the MessageSet wire\n format.  You should not use this for any other reason:  It's less\n efficient, has fewer features, and is more complicated.\n\n The message must be defined exactly as follows:\n   message Foo {\n     option message_set_wire_format = true;\n     extensions 4 to max;\n   }\n Note that the message cannot have any defined fields; MessageSets only\n have extensions.\n\n All extensions of your type must be singular messages; e.g. they cannot\n be int32s, enums, or repeated messages.\n\n Because this is an option, the above two restrictions are not enforced by\n the protocol compiler.\n"
          },
          {
            "path": [
              4,
              10,
              2,
              0,
              4
            ],
            "span": [
              406,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              0,
              5
            ],
            "span": [
              406,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              0,
              1
            ],
            "span": [
              406,
              16,
              39
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              0,
              3
            ],
            "span": [
              406,
              42,
              43
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              0,
              8
            ],
            "span": [
              406,
              44,
              59
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              0,
              7
            ],
            "span": [
              406,
              53,
              58
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              1
            ],
            "span": [
              411,
              2,
              68
            ],
            "leadingComments": " Disables the generation of the standard \"descriptor()\" accessor, which can\n conflict with a field of the same name.  This is meant to make migration\n from proto1 easier; new code should avoid fields named \"descriptor\".\n"
          },
          {
            "path": [
              4,
              10,
              2,
              1,
              4
            ],
            "span": [
              411,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              1,
              5
            ],
            "span": [
              411,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              1,
              1
            ],
            "span": [
              411,
              16,
              47
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              1,
              3
            ],
            "span": [
              411,
              50,
              51
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              1,
              8
            ],
            "span": [
              411,
              52,
              67
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              1,
              7
            ],
            "span": [
              411,
              61,
              66
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              2
            ],
            "span": [
              417,
              2,
              47
            ],
            "leadingComments": " Is this message deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for the message, or it will be completely ignored; in the very least,\n this is a formalization for deprecating messages.\n"
          },
          {
            "path": [
              4,
              10,
              2,
              2,
              4
            ],
            "span": [
              417,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              2,
              5
            ],
            "span": [
              417,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              2,
              1
            ],
            "span": [
              417,
              16,
              26
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              2,
              3
            ],
            "span": [
              417,
              29,
              30
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              2,
              8
            ],
            "span": [
              417,
              31,
              46
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              2,
              7
            ],
            "span": [
              417,
              40,
              45
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              3
            ],
            "span": [
              440,
              2,
              30
            ],
            "leadingComments": " Whether the message is an automatically generated map entry type for the\n maps field.\n\n For maps fields:\n     map<KeyType, ValueType> map_field = 1;\n The parsed descriptor looks like:\n     message MapFieldEntry {\n         option map_entry = true;\n         optional KeyType key = 1;\n         optional ValueType value = 2;\n     }\n     repeated MapFieldEntry map_field = 1;\n\n Implementations may choose not to generate the map_entry=true message, but\n use a native map in the target language to hold the keys and values.\n The reflection APIs in such implementions still need to work as\n if the field is a repeated message field.\n\n NOTE: Do not set the option in .proto files. Always use the maps syntax\n instead. The option should only be implicitly set by the proto compiler\n parser.\n"
          },
          {
            "path": [
              4,
              10,
              2,
              3,
              4
            ],
            "span": [
              440,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              3,
              5
            ],
            "span": [
              440,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              3,
              1
            ],
            "span": [
              440,
              16,
              25
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              3,
              3
            ],
            "span": [
              440,
              28,
              29
            ]
          },
          {
            "path": [
              4,
              10,
              9
            ],
            "span": [
              442,
              11,
              13
            ],
            "trailingComments": " javalite_serializable\n"
          },
          {
            "path": [
              4,
              10,
              9,
              0
            ],
            "span": [
              442,
              11,
              12
            ]
          },
          {
            "path": [
              4,
              10,
              9,
              0,
              1
            ],
            "span": [
              442,
              11,
              12
            ]
          },
          {
            "path": [
              4,
              10,
              9,
              0,
              2
            ],
            "span": [
              442,
              11,
              12
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              4
            ],
            "span": [
              446,
              2,
              58
            ],
            "leadingComments": " The parser stores options it doesn't recognize here. See above.\n"
          },
          {
            "path": [
              4,
              10,
              2,
              4,
              4
            ],
            "span": [
              446,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              4,
              6
            ],
            "span": [
              446,
              11,
              30
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              4,
              1
            ],
            "span": [
              446,
              31,
              51
            ]
          },
          {
            "path": [
              4,
              10,
              2,
              4,
              3
            ],
            "span": [
              446,
              54,
              57
            ]
          },
          {
            "path": [
              4,
              10,
              5
            ],
            "span": [
              449,
              2,
              25
            ],
            "leadingComments": " Clients can define custom options in extensions of this message. See above.\n"
          },
          {
            "path": [
              4,
              10,
              5,
              0
            ],
            "span": [
              449,
              13,
              24
            ]
          },
          {
            "path": [
              4,
              10,
              5,
              0,
              1
            ],
            "span": [
              449,
              13,
              17
            ]
          },
          {
            "path": [
              4,
              10,
              5,
              0,
              2
            ],
            "span": [
              449,
              21,
              24
            ]
          },
          {
            "path": [
              4,
              11
            ],
            "span": [
              452,
              0,
              541,
              1
            ]
          },
          {
            "path": [
              4,
              11,
              1
            ],
            "span": [
              452,
              8,
              20
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              0
            ],
            "span": [
              457,
              2,
              46
            ],
            "leadingComments": " The ctype option instructs the C++ code generator to use a different\n representation of the field than it normally would.  See the specific\n options below.  This option is not yet implemented in the open source\n release -- sorry, we'll try to include it in a future version!\n"
          },
          {
            "path": [
              4,
              11,
              2,
              0,
              4
            ],
            "span": [
              457,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              0,
              6
            ],
            "span": [
              457,
              11,
              16
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              0,
              1
            ],
            "span": [
              457,
              17,
              22
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              0,
              3
            ],
            "span": [
              457,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              0,
              8
            ],
            "span": [
              457,
              27,
              45
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              0,
              7
            ],
            "span": [
              457,
              38,
              44
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              0
            ],
            "span": [
              458,
              2,
              465,
              3
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              0,
              1
            ],
            "span": [
              458,
              7,
              12
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              0,
              2,
              0
            ],
            "span": [
              460,
              4,
              15
            ],
            "leadingComments": " Default mode.\n"
          },
          {
            "path": [
              4,
              11,
              4,
              0,
              2,
              0,
              1
            ],
            "span": [
              460,
              4,
              10
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              0,
              2,
              0,
              2
            ],
            "span": [
              460,
              13,
              14
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              0,
              2,
              1
            ],
            "span": [
              462,
              4,
              13
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              0,
              2,
              1,
              1
            ],
            "span": [
              462,
              4,
              8
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              0,
              2,
              1,
              2
            ],
            "span": [
              462,
              11,
              12
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              0,
              2,
              2
            ],
            "span": [
              464,
              4,
              21
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              0,
              2,
              2,
              1
            ],
            "span": [
              464,
              4,
              16
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              0,
              2,
              2,
              2
            ],
            "span": [
              464,
              19,
              20
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              1
            ],
            "span": [
              471,
              2,
              27
            ],
            "leadingComments": " The packed option can be enabled for repeated primitive fields to enable\n a more efficient representation on the wire. Rather than repeatedly\n writing the tag and type for each element, the entire array is encoded as\n a single length-delimited blob. In proto3, only explicit setting it to\n false will avoid using packed encoding.\n"
          },
          {
            "path": [
              4,
              11,
              2,
              1,
              4
            ],
            "span": [
              471,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              1,
              5
            ],
            "span": [
              471,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              1,
              1
            ],
            "span": [
              471,
              16,
              22
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              1,
              3
            ],
            "span": [
              471,
              25,
              26
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              2
            ],
            "span": [
              482,
              2,
              51
            ],
            "leadingComments": " The jstype option determines the JavaScript type used for values of the\n field.  The option is permitted only for 64 bit integral and fixed types\n (int64, uint64, sint64, fixed64, sfixed64).  By default these types are\n represented as JavaScript strings.  This avoids loss of precision that can\n happen when a large value is converted to a floating point JavaScript\n numbers.  Specifying JS_NUMBER for the jstype causes the generated\n JavaScript code to use the JavaScript \"number\" type instead of strings.\n This option is an enum to permit additional types to be added,\n e.g. goog.math.Integer.\n"
          },
          {
            "path": [
              4,
              11,
              2,
              2,
              4
            ],
            "span": [
              482,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              2,
              6
            ],
            "span": [
              482,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              2,
              1
            ],
            "span": [
              482,
              18,
              24
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              2,
              3
            ],
            "span": [
              482,
              27,
              28
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              2,
              8
            ],
            "span": [
              482,
              29,
              50
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              2,
              7
            ],
            "span": [
              482,
              40,
              49
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              1
            ],
            "span": [
              483,
              2,
              492,
              3
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              1,
              1
            ],
            "span": [
              483,
              7,
              13
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              1,
              2,
              0
            ],
            "span": [
              485,
              4,
              18
            ],
            "leadingComments": " Use the default type.\n"
          },
          {
            "path": [
              4,
              11,
              4,
              1,
              2,
              0,
              1
            ],
            "span": [
              485,
              4,
              13
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              1,
              2,
              0,
              2
            ],
            "span": [
              485,
              16,
              17
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              1,
              2,
              1
            ],
            "span": [
              488,
              4,
              18
            ],
            "leadingComments": " Use JavaScript strings.\n"
          },
          {
            "path": [
              4,
              11,
              4,
              1,
              2,
              1,
              1
            ],
            "span": [
              488,
              4,
              13
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              1,
              2,
              1,
              2
            ],
            "span": [
              488,
              16,
              17
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              1,
              2,
              2
            ],
            "span": [
              491,
              4,
              18
            ],
            "leadingComments": " Use JavaScript numbers.\n"
          },
          {
            "path": [
              4,
              11,
              4,
              1,
              2,
              2,
              1
            ],
            "span": [
              491,
              4,
              13
            ]
          },
          {
            "path": [
              4,
              11,
              4,
              1,
              2,
              2,
              2
            ],
            "span": [
              491,
              16,
              17
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              3
            ],
            "span": [
              522,
              2,
              41
            ],
            "leadingComments": " Should this field be parsed lazily?  Lazy applies only to message-type\n fields.  It means that when the outer message is initially parsed, the\n inner message's contents will not be parsed but instead stored in encoded\n form.  The inner message will actually be parsed when it is first accessed.\n\n This is only a hint.  Implementations are free to choose whether to use\n eager or lazy parsing regardless of the value of this option.  However,\n setting this option true suggests that the protocol author believes that\n using lazy parsing on this field is worth the additional bookkeeping\n overhead typically needed to implement it.\n\n This option does not affect the public interface of any generated code;\n all method signatures remain the same.  Furthermore, thread-safety of the\n interface is not affected by this option; const methods remain safe to\n call from multiple threads concurrently, while non-const methods continue\n to require exclusive access.\n\n\n Note that implementations may choose not to check required fields within\n a lazy sub-message.  That is, calling IsInitialized() on the outer message\n may return true even if the inner message has missing required fields.\n This is necessary because otherwise the inner message would have to be\n parsed in order to perform the check, defeating the purpose of lazy\n parsing.  An implementation which chooses not to check required fields\n must be consistent about it.  That is, for any particular sub-message, the\n implementation must either *always* check its required fields, or *never*\n check its required fields, regardless of whether or not the message has\n been parsed.\n"
          },
          {
            "path": [
              4,
              11,
              2,
              3,
              4
            ],
            "span": [
              522,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              3,
              5
            ],
            "span": [
              522,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              3,
              1
            ],
            "span": [
              522,
              16,
              20
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              3,
              3
            ],
            "span": [
              522,
              23,
              24
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              3,
              8
            ],
            "span": [
              522,
              25,
              40
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              3,
              7
            ],
            "span": [
              522,
              34,
              39
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              4
            ],
            "span": [
              528,
              2,
              47
            ],
            "leadingComments": " Is this field deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for accessors, or it will be completely ignored; in the very least, this\n is a formalization for deprecating fields.\n"
          },
          {
            "path": [
              4,
              11,
              2,
              4,
              4
            ],
            "span": [
              528,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              4,
              5
            ],
            "span": [
              528,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              4,
              1
            ],
            "span": [
              528,
              16,
              26
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              4,
              3
            ],
            "span": [
              528,
              29,
              30
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              4,
              8
            ],
            "span": [
              528,
              31,
              46
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              4,
              7
            ],
            "span": [
              528,
              40,
              45
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              5
            ],
            "span": [
              531,
              2,
              42
            ],
            "leadingComments": " For Google-internal migration only. Do not use.\n"
          },
          {
            "path": [
              4,
              11,
              2,
              5,
              4
            ],
            "span": [
              531,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              5,
              5
            ],
            "span": [
              531,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              5,
              1
            ],
            "span": [
              531,
              16,
              20
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              5,
              3
            ],
            "span": [
              531,
              23,
              25
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              5,
              8
            ],
            "span": [
              531,
              26,
              41
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              5,
              7
            ],
            "span": [
              531,
              35,
              40
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              6
            ],
            "span": [
              535,
              2,
              58
            ],
            "leadingComments": " The parser stores options it doesn't recognize here. See above.\n"
          },
          {
            "path": [
              4,
              11,
              2,
              6,
              4
            ],
            "span": [
              535,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              6,
              6
            ],
            "span": [
              535,
              11,
              30
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              6,
              1
            ],
            "span": [
              535,
              31,
              51
            ]
          },
          {
            "path": [
              4,
              11,
              2,
              6,
              3
            ],
            "span": [
              535,
              54,
              57
            ]
          },
          {
            "path": [
              4,
              11,
              5
            ],
            "span": [
              538,
              2,
              25
            ],
            "leadingComments": " Clients can define custom options in extensions of this message. See above.\n"
          },
          {
            "path": [
              4,
              11,
              5,
              0
            ],
            "span": [
              538,
              13,
              24
            ]
          },
          {
            "path": [
              4,
              11,
              5,
              0,
              1
            ],
            "span": [
              538,
              13,
              17
            ]
          },
          {
            "path": [
              4,
              11,
              5,
              0,
              2
            ],
            "span": [
              538,
              21,
              24
            ]
          },
          {
            "path": [
              4,
              11,
              9
            ],
            "span": [
              540,
              11,
              13
            ],
            "trailingComments": " removed jtype\n"
          },
          {
            "path": [
              4,
              11,
              9,
              0
            ],
            "span": [
              540,
              11,
              12
            ]
          },
          {
            "path": [
              4,
              11,
              9,
              0,
              1
            ],
            "span": [
              540,
              11,
              12
            ]
          },
          {
            "path": [
              4,
              11,
              9,
              0,
              2
            ],
            "span": [
              540,
              11,
              12
            ]
          },
          {
            "path": [
              4,
              12
            ],
            "span": [
              543,
              0,
              549,
              1
            ]
          },
          {
            "path": [
              4,
              12,
              1
            ],
            "span": [
              543,
              8,
              20
            ]
          },
          {
            "path": [
              4,
              12,
              2,
              0
            ],
            "span": [
              545,
              2,
              58
            ],
            "leadingComments": " The parser stores options it doesn't recognize here. See above.\n"
          },
          {
            "path": [
              4,
              12,
              2,
              0,
              4
            ],
            "span": [
              545,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              12,
              2,
              0,
              6
            ],
            "span": [
              545,
              11,
              30
            ]
          },
          {
            "path": [
              4,
              12,
              2,
              0,
              1
            ],
            "span": [
              545,
              31,
              51
            ]
          },
          {
            "path": [
              4,
              12,
              2,
              0,
              3
            ],
            "span": [
              545,
              54,
              57
            ]
          },
          {
            "path": [
              4,
              12,
              5
            ],
            "span": [
              548,
              2,
              25
            ],
            "leadingComments": " Clients can define custom options in extensions of this message. See above.\n"
          },
          {
            "path": [
              4,
              12,
              5,
              0
            ],
            "span": [
              548,
              13,
              24
            ]
          },
          {
            "path": [
              4,
              12,
              5,
              0,
              1
            ],
            "span": [
              548,
              13,
              17
            ]
          },
          {
            "path": [
              4,
              12,
              5,
              0,
              2
            ],
            "span": [
              548,
              21,
              24
            ]
          },
          {
            "path": [
              4,
              13
            ],
            "span": [
              551,
              0,
              569,
              1
            ]
          },
          {
            "path": [
              4,
              13,
              1
            ],
            "span": [
              551,
              8,
              19
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              0
            ],
            "span": [
              555,
              2,
              32
            ],
            "leadingComments": " Set this option to true to allow mapping different tag names to the same\n value.\n"
          },
          {
            "path": [
              4,
              13,
              2,
              0,
              4
            ],
            "span": [
              555,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              0,
              5
            ],
            "span": [
              555,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              0,
              1
            ],
            "span": [
              555,
              16,
              27
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              0,
              3
            ],
            "span": [
              555,
              30,
              31
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              1
            ],
            "span": [
              561,
              2,
              47
            ],
            "leadingComments": " Is this enum deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for the enum, or it will be completely ignored; in the very least, this\n is a formalization for deprecating enums.\n"
          },
          {
            "path": [
              4,
              13,
              2,
              1,
              4
            ],
            "span": [
              561,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              1,
              5
            ],
            "span": [
              561,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              1,
              1
            ],
            "span": [
              561,
              16,
              26
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              1,
              3
            ],
            "span": [
              561,
              29,
              30
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              1,
              8
            ],
            "span": [
              561,
              31,
              46
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              1,
              7
            ],
            "span": [
              561,
              40,
              45
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              2
            ],
            "span": [
              565,
              2,
              58
            ],
            "leadingComments": " The parser stores options it doesn't recognize here. See above.\n"
          },
          {
            "path": [
              4,
              13,
              2,
              2,
              4
            ],
            "span": [
              565,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              2,
              6
            ],
            "span": [
              565,
              11,
              30
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              2,
              1
            ],
            "span": [
              565,
              31,
              51
            ]
          },
          {
            "path": [
              4,
              13,
              2,
              2,
              3
            ],
            "span": [
              565,
              54,
              57
            ]
          },
          {
            "path": [
              4,
              13,
              5
            ],
            "span": [
              568,
              2,
              25
            ],
            "leadingComments": " Clients can define custom options in extensions of this message. See above.\n"
          },
          {
            "path": [
              4,
              13,
              5,
              0
            ],
            "span": [
              568,
              13,
              24
            ]
          },
          {
            "path": [
              4,
              13,
              5,
              0,
              1
            ],
            "span": [
              568,
              13,
              17
            ]
          },
          {
            "path": [
              4,
              13,
              5,
              0,
              2
            ],
            "span": [
              568,
              21,
              24
            ]
          },
          {
            "path": [
              4,
              14
            ],
            "span": [
              571,
              0,
              583,
              1
            ]
          },
          {
            "path": [
              4,
              14,
              1
            ],
            "span": [
              571,
              8,
              24
            ]
          },
          {
            "path": [
              4,
              14,
              2,
              0
            ],
            "span": [
              576,
              2,
              47
            ],
            "leadingComments": " Is this enum value deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for the enum value, or it will be completely ignored; in the very least,\n this is a formalization for deprecating enum values.\n"
          },
          {
            "path": [
              4,
              14,
              2,
              0,
              4
            ],
            "span": [
              576,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              14,
              2,
              0,
              5
            ],
            "span": [
              576,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              14,
              2,
              0,
              1
            ],
            "span": [
              576,
              16,
              26
            ]
          },
          {
            "path": [
              4,
              14,
              2,
              0,
              3
            ],
            "span": [
              576,
              29,
              30
            ]
          },
          {
            "path": [
              4,
              14,
              2,
              0,
              8
            ],
            "span": [
              576,
              31,
              46
            ]
          },
          {
            "path": [
              4,
              14,
              2,
              0,
              7
            ],
            "span": [
              576,
              40,
              45
            ]
          },
          {
            "path": [
              4,
              14,
              2,
              1
            ],
            "span": [
              579,
              2,
              58
            ],
            "leadingComments": " The parser stores options it doesn't recognize here. See above.\n"
          },
          {
            "path": [
              4,
              14,
              2,
              1,
              4
            ],
            "span": [
              579,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              14,
              2,
              1,
              6
            ],
            "span": [
              579,
              11,
              30
            ]
          },
          {
            "path": [
              4,
              14,
              2,
              1,
              1
            ],
            "span": [
              579,
              31,
              51
            ]
          },
          {
            "path": [
              4,
              14,
              2,
              1,
              3
            ],
            "span": [
              579,
              54,
              57
            ]
          },
          {
            "path": [
              4,
              14,
              5
            ],
            "span": [
              582,
              2,
              25
            ],
            "leadingComments": " Clients can define custom options in extensions of this message. See above.\n"
          },
          {
            "path": [
              4,
              14,
              5,
              0
            ],
            "span": [
              582,
              13,
              24
            ]
          },
          {
            "path": [
              4,
              14,
              5,
              0,
              1
            ],
            "span": [
              582,
              13,
              17
            ]
          },
          {
            "path": [
              4,
              14,
              5,
              0,
              2
            ],
            "span": [
              582,
              21,
              24
            ]
          },
          {
            "path": [
              4,
              15
            ],
            "span": [
              585,
              0,
              603,
              1
            ]
          },
          {
            "path": [
              4,
              15,
              1
            ],
            "span": [
              585,
              8,
              22
            ]
          },
          {
            "path": [
              4,
              15,
              2,
              0
            ],
            "span": [
              596,
              2,
              48
            ],
            "leadingComments": " Is this service deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for the service, or it will be completely ignored; in the very least,\n this is a formalization for deprecating services.\n",
            "leadingDetachedComments": [
              " Note:  Field numbers 1 through 32 are reserved for Google's internal RPC\n   framework.  We apologize for hoarding these numbers to ourselves, but\n   we were already using them long before we decided to release Protocol\n   Buffers.\n"
            ]
          },
          {
            "path": [
              4,
              15,
              2,
              0,
              4
            ],
            "span": [
              596,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              15,
              2,
              0,
              5
            ],
            "span": [
              596,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              15,
              2,
              0,
              1
            ],
            "span": [
              596,
              16,
              26
            ]
          },
          {
            "path": [
              4,
              15,
              2,
              0,
              3
            ],
            "span": [
              596,
              29,
              31
            ]
          },
          {
            "path": [
              4,
              15,
              2,
              0,
              8
            ],
            "span": [
              596,
              32,
              47
            ]
          },
          {
            "path": [
              4,
              15,
              2,
              0,
              7
            ],
            "span": [
              596,
              41,
              46
            ]
          },
          {
            "path": [
              4,
              15,
              2,
              1
            ],
            "span": [
              599,
              2,
              58
            ],
            "leadingComments": " The parser stores options it doesn't recognize here. See above.\n"
          },
          {
            "path": [
              4,
              15,
              2,
              1,
              4
            ],
            "span": [
              599,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              15,
              2,
              1,
              6
            ],
            "span": [
              599,
              11,
              30
            ]
          },
          {
            "path": [
              4,
              15,
              2,
              1,
              1
            ],
            "span": [
              599,
              31,
              51
            ]
          },
          {
            "path": [
              4,
              15,
              2,
              1,
              3
            ],
            "span": [
              599,
              54,
              57
            ]
          },
          {
            "path": [
              4,
              15,
              5
            ],
            "span": [
              602,
              2,
              25
            ],
            "leadingComments": " Clients can define custom options in extensions of this message. See above.\n"
          },
          {
            "path": [
              4,
              15,
              5,
              0
            ],
            "span": [
              602,
              13,
              24
            ]
          },
          {
            "path": [
              4,
              15,
              5,
              0,
              1
            ],
            "span": [
              602,
              13,
              17
            ]
          },
          {
            "path": [
              4,
              15,
              5,
              0,
              2
            ],
            "span": [
              602,
              21,
              24
            ]
          },
          {
            "path": [
              4,
              16
            ],
            "span": [
              605,
              0,
              634,
              1
            ]
          },
          {
            "path": [
              4,
              16,
              1
            ],
            "span": [
              605,
              8,
              21
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              0
            ],
            "span": [
              616,
              2,
              48
            ],
            "leadingComments": " Is this method deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for the method, or it will be completely ignored; in the very least,\n this is a formalization for deprecating methods.\n",
            "leadingDetachedComments": [
              " Note:  Field numbers 1 through 32 are reserved for Google's internal RPC\n   framework.  We apologize for hoarding these numbers to ourselves, but\n   we were already using them long before we decided to release Protocol\n   Buffers.\n"
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              0,
              4
            ],
            "span": [
              616,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              0,
              5
            ],
            "span": [
              616,
              11,
              15
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              0,
              1
            ],
            "span": [
              616,
              16,
              26
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              0,
              3
            ],
            "span": [
              616,
              29,
              31
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              0,
              8
            ],
            "span": [
              616,
              32,
              47
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              0,
              7
            ],
            "span": [
              616,
              41,
              46
            ]
          },
          {
            "path": [
              4,
              16,
              4,
              0
            ],
            "span": [
              621,
              2,
              625,
              3
            ],
            "leadingComments": " Is this method side-effect-free (or safe in HTTP parlance), or idempotent,\n or neither? HTTP based RPC implementation may choose GET verb for safe\n methods, and PUT verb for idempotent methods instead of the default POST.\n"
          },
          {
            "path": [
              4,
              16,
              4,
              0,
              1
            ],
            "span": [
              621,
              7,
              23
            ]
          },
          {
            "path": [
              4,
              16,
              4,
              0,
              2,
              0
            ],
            "span": [
              622,
              4,
              28
            ]
          },
          {
            "path": [
              4,
              16,
              4,
              0,
              2,
              0,
              1
            ],
            "span": [
              622,
              4,
              23
            ]
          },
          {
            "path": [
              4,
              16,
              4,
              0,
              2,
              0,
              2
            ],
            "span": [
              622,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              16,
              4,
              0,
              2,
              1
            ],
            "span": [
              623,
              4,
              28
            ],
            "trailingComments": " implies idempotent\n"
          },
          {
            "path": [
              4,
              16,
              4,
              0,
              2,
              1,
              1
            ],
            "span": [
              623,
              4,
              19
            ]
          },
          {
            "path": [
              4,
              16,
              4,
              0,
              2,
              1,
              2
            ],
            "span": [
              623,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              16,
              4,
              0,
              2,
              2
            ],
            "span": [
              624,
              4,
              28
            ],
            "trailingComments": " idempotent, but may have side effects\n"
          },
          {
            "path": [
              4,
              16,
              4,
              0,
              2,
              2,
              1
            ],
            "span": [
              624,
              4,
              14
            ]
          },
          {
            "path": [
              4,
              16,
              4,
              0,
              2,
              2,
              2
            ],
            "span": [
              624,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              1
            ],
            "span": [
              626,
              2,
              627,
              39
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              1,
              4
            ],
            "span": [
              626,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              1,
              6
            ],
            "span": [
              626,
              11,
              27
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              1,
              1
            ],
            "span": [
              626,
              28,
              45
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              1,
              3
            ],
            "span": [
              627,
              6,
              8
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              1,
              8
            ],
            "span": [
              627,
              9,
              38
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              1,
              7
            ],
            "span": [
              627,
              18,
              37
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              2
            ],
            "span": [
              630,
              2,
              58
            ],
            "leadingComments": " The parser stores options it doesn't recognize here. See above.\n"
          },
          {
            "path": [
              4,
              16,
              2,
              2,
              4
            ],
            "span": [
              630,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              2,
              6
            ],
            "span": [
              630,
              11,
              30
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              2,
              1
            ],
            "span": [
              630,
              31,
              51
            ]
          },
          {
            "path": [
              4,
              16,
              2,
              2,
              3
            ],
            "span": [
              630,
              54,
              57
            ]
          },
          {
            "path": [
              4,
              16,
              5
            ],
            "span": [
              633,
              2,
              25
            ],
            "leadingComments": " Clients can define custom options in extensions of this message. See above.\n"
          },
          {
            "path": [
              4,
              16,
              5,
              0
            ],
            "span": [
              633,
              13,
              24
            ]
          },
          {
            "path": [
              4,
              16,
              5,
              0,
              1
            ],
            "span": [
              633,
              13,
              17
            ]
          },
          {
            "path": [
              4,
              16,
              5,
              0,
              2
            ],
            "span": [
              633,
              21,
              24
            ]
          },
          {
            "path": [
              4,
              17
            ],
            "span": [
              643,
              0,
              663,
              1
            ],
            "leadingComments": " A message representing a option the parser does not recognize. This only\n appears in options protos created by the compiler::Parser class.\n DescriptorPool resolves these when building Descriptor objects. Therefore,\n options protos in descriptor objects (e.g. returned by Descriptor::options(),\n or produced by Descriptor::CopyTo()) will never have UninterpretedOptions\n in them.\n"
          },
          {
            "path": [
              4,
              17,
              1
            ],
            "span": [
              643,
              8,
              27
            ]
          },
          {
            "path": [
              4,
              17,
              3,
              0
            ],
            "span": [
              649,
              2,
              652,
              3
            ],
            "leadingComments": " The name of the uninterpreted option.  Each string represents a segment in\n a dot-separated name.  is_extension is true iff a segment represents an\n extension (denoted with parentheses in options specs in .proto files).\n E.g.,{ [\"foo\", false], [\"bar.baz\", true], [\"qux\", false] } represents\n \"foo.(bar.baz).qux\".\n"
          },
          {
            "path": [
              4,
              17,
              3,
              0,
              1
            ],
            "span": [
              649,
              10,
              18
            ]
          },
          {
            "path": [
              4,
              17,
              3,
              0,
              2,
              0
            ],
            "span": [
              650,
              4,
              34
            ]
          },
          {
            "path": [
              4,
              17,
              3,
              0,
              2,
              0,
              4
            ],
            "span": [
              650,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              17,
              3,
              0,
              2,
              0,
              5
            ],
            "span": [
              650,
              13,
              19
            ]
          },
          {
            "path": [
              4,
              17,
              3,
              0,
              2,
              0,
              1
            ],
            "span": [
              650,
              20,
              29
            ]
          },
          {
            "path": [
              4,
              17,
              3,
              0,
              2,
              0,
              3
            ],
            "span": [
              650,
              32,
              33
            ]
          },
          {
            "path": [
              4,
              17,
              3,
              0,
              2,
              1
            ],
            "span": [
              651,
              4,
              35
            ]
          },
          {
            "path": [
              4,
              17,
              3,
              0,
              2,
              1,
              4
            ],
            "span": [
              651,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              17,
              3,
              0,
              2,
              1,
              5
            ],
            "span": [
              651,
              13,
              17
            ]
          },
          {
            "path": [
              4,
              17,
              3,
              0,
              2,
              1,
              1
            ],
            "span": [
              651,
              18,
              30
            ]
          },
          {
            "path": [
              4,
              17,
              3,
              0,
              2,
              1,
              3
            ],
            "span": [
              651,
              33,
              34
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              0
            ],
            "span": [
              653,
              2,
              29
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              0,
              4
            ],
            "span": [
              653,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              0,
              6
            ],
            "span": [
              653,
              11,
              19
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              0,
              1
            ],
            "span": [
              653,
              20,
              24
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              0,
              3
            ],
            "span": [
              653,
              27,
              28
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              1
            ],
            "span": [
              657,
              2,
              39
            ],
            "leadingComments": " The value of the uninterpreted option, in whatever type the tokenizer\n identified it as during parsing. Exactly one of these should be set.\n"
          },
          {
            "path": [
              4,
              17,
              2,
              1,
              4
            ],
            "span": [
              657,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              1,
              5
            ],
            "span": [
              657,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              1,
              1
            ],
            "span": [
              657,
              18,
              34
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              1,
              3
            ],
            "span": [
              657,
              37,
              38
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              2
            ],
            "span": [
              658,
              2,
              41
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              2,
              4
            ],
            "span": [
              658,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              2,
              5
            ],
            "span": [
              658,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              2,
              1
            ],
            "span": [
              658,
              18,
              36
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              2,
              3
            ],
            "span": [
              658,
              39,
              40
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              3
            ],
            "span": [
              659,
              2,
              40
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              3,
              4
            ],
            "span": [
              659,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              3,
              5
            ],
            "span": [
              659,
              11,
              16
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              3,
              1
            ],
            "span": [
              659,
              17,
              35
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              3,
              3
            ],
            "span": [
              659,
              38,
              39
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              4
            ],
            "span": [
              660,
              2,
              35
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              4,
              4
            ],
            "span": [
              660,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              4,
              5
            ],
            "span": [
              660,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              4,
              1
            ],
            "span": [
              660,
              18,
              30
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              4,
              3
            ],
            "span": [
              660,
              33,
              34
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              5
            ],
            "span": [
              661,
              2,
              34
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              5,
              4
            ],
            "span": [
              661,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              5,
              5
            ],
            "span": [
              661,
              11,
              16
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              5,
              1
            ],
            "span": [
              661,
              17,
              29
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              5,
              3
            ],
            "span": [
              661,
              32,
              33
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              6
            ],
            "span": [
              662,
              2,
              38
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              6,
              4
            ],
            "span": [
              662,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              6,
              5
            ],
            "span": [
              662,
              11,
              17
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              6,
              1
            ],
            "span": [
              662,
              18,
              33
            ]
          },
          {
            "path": [
              4,
              17,
              2,
              6,
              3
            ],
            "span": [
              662,
              36,
              37
            ]
          },
          {
            "path": [
              4,
              18
            ],
            "span": [
              670,
              0,
              799,
              1
            ],
            "leadingComments": " Encapsulates information about the original source file from which a\n FileDescriptorProto was generated.\n",
            "leadingDetachedComments": [
              " ===================================================================\n Optional source code info\n"
            ]
          },
          {
            "path": [
              4,
              18,
              1
            ],
            "span": [
              670,
              8,
              22
            ]
          },
          {
            "path": [
              4,
              18,
              2,
              0
            ],
            "span": [
              714,
              2,
              33
            ],
            "leadingComments": " A Location identifies a piece of source code in a .proto file which\n corresponds to a particular definition.  This information is intended\n to be useful to IDEs, code indexers, documentation generators, and similar\n tools.\n\n For example, say we have a file like:\n   message Foo {\n     optional string foo = 1;\n   }\n Let's look at just the field definition:\n   optional string foo = 1;\n   ^       ^^     ^^  ^  ^^^\n   a       bc     de  f  ghi\n We have the following locations:\n   span   path               represents\n   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.\n   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).\n   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).\n   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).\n   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).\n\n Notes:\n - A location may refer to a repeated field itself (i.e. not to any\n   particular index within it).  This is used whenever a set of elements are\n   logically enclosed in a single code segment.  For example, an entire\n   extend block (possibly containing multiple extension definitions) will\n   have an outer location whose path refers to the \"extensions\" repeated\n   field without an index.\n - Multiple locations may have the same path.  This happens when a single\n   logical declaration is spread out across multiple places.  The most\n   obvious example is the \"extend\" block again -- there may be multiple\n   extend blocks in the same scope, each of which will have the same path.\n - A location's span is not always a subset of its parent's span.  For\n   example, the \"extendee\" of an extension declaration appears at the\n   beginning of the \"extend\" block and is shared by all extensions within\n   the block.\n - Just because a location's span is a subset of some other location's span\n   does not mean that it is a descendent.  For example, a \"group\" defines\n   both a type and a field in a single declaration.  Thus, the locations\n   corresponding to the type and field and their components will overlap.\n - Code which tries to interpret locations should probably be designed to\n   ignore those that it doesn't understand, as more types of locations could\n   be recorded in the future.\n"
          },
          {
            "path": [
              4,
              18,
              2,
              0,
              4
            ],
            "span": [
              714,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              18,
              2,
              0,
              6
            ],
            "span": [
              714,
              11,
              19
            ]
          },
          {
            "path": [
              4,
              18,
              2,
              0,
              1
            ],
            "span": [
              714,
              20,
              28
            ]
          },
          {
            "path": [
              4,
              18,
              2,
              0,
              3
            ],
            "span": [
              714,
              31,
              32
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0
            ],
            "span": [
              715,
              2,
              798,
              3
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              1
            ],
            "span": [
              715,
              10,
              18
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              0
            ],
            "span": [
              739,
              4,
              42
            ],
            "leadingComments": " Identifies which part of the FileDescriptorProto was defined at this\n location.\n\n Each element is a field number or an index.  They form a path from\n the root FileDescriptorProto to the place where the definition.  For\n example, this path:\n   [ 4, 3, 2, 7, 1 ]\n refers to:\n   file.message_type(3)  // 4, 3\n       .field(7)         // 2, 7\n       .name()           // 1\n This is because FileDescriptorProto.message_type has field number 4:\n   repeated DescriptorProto message_type = 4;\n and DescriptorProto.field has field number 2:\n   repeated FieldDescriptorProto field = 2;\n and FieldDescriptorProto.name has field number 1:\n   optional string name = 1;\n\n Thus, the above path gives the location of a field name.  If we removed\n the last element:\n   [ 4, 3, 2, 7 ]\n this path refers to the whole field declaration (from the beginning\n of the label to the terminating semicolon).\n"
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              0,
              4
            ],
            "span": [
              739,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              0,
              5
            ],
            "span": [
              739,
              13,
              18
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              0,
              1
            ],
            "span": [
              739,
              19,
              23
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              0,
              3
            ],
            "span": [
              739,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              0,
              8
            ],
            "span": [
              739,
              28,
              41
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              0,
              8,
              999,
              0
            ],
            "span": [
              739,
              29,
              40
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              0,
              8,
              999,
              0,
              2
            ],
            "span": [
              739,
              29,
              35
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              0,
              8,
              999,
              0,
              2,
              0
            ],
            "span": [
              739,
              29,
              35
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              0,
              8,
              999,
              0,
              2,
              0,
              1
            ],
            "span": [
              739,
              29,
              35
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              0,
              8,
              999,
              0,
              3
            ],
            "span": [
              739,
              36,
              40
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              1
            ],
            "span": [
              746,
              4,
              42
            ],
            "leadingComments": " Always has exactly three or four elements: start line, start column,\n end line (optional, otherwise assumed same as start line), end column.\n These are packed into a single field for efficiency.  Note that line\n and column numbers are zero-based -- typically you will want to add\n 1 to each before displaying to a user.\n"
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              1,
              4
            ],
            "span": [
              746,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              1,
              5
            ],
            "span": [
              746,
              13,
              18
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              1,
              1
            ],
            "span": [
              746,
              19,
              23
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              1,
              3
            ],
            "span": [
              746,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              1,
              8
            ],
            "span": [
              746,
              28,
              41
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              1,
              8,
              999,
              0
            ],
            "span": [
              746,
              29,
              40
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              1,
              8,
              999,
              0,
              2
            ],
            "span": [
              746,
              29,
              35
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              1,
              8,
              999,
              0,
              2,
              0
            ],
            "span": [
              746,
              29,
              35
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              1,
              8,
              999,
              0,
              2,
              0,
              1
            ],
            "span": [
              746,
              29,
              35
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              1,
              8,
              999,
              0,
              3
            ],
            "span": [
              746,
              36,
              40
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              2
            ],
            "span": [
              795,
              4,
              41
            ],
            "leadingComments": " If this SourceCodeInfo represents a complete declaration, these are any\n comments appearing before and after the declaration which appear to be\n attached to the declaration.\n\n A series of line comments appearing on consecutive lines, with no other\n tokens appearing on those lines, will be treated as a single comment.\n\n leading_detached_comments will keep paragraphs of comments that appear\n before (but not connected to) the current element. Each paragraph,\n separated by empty lines, will be one comment element in the repeated\n field.\n\n Only the comment content is provided; comment markers (e.g. //) are\n stripped out.  For block comments, leading whitespace and an asterisk\n will be stripped from the beginning of each line other than the first.\n Newlines are included in the output.\n\n Examples:\n\n   optional int32 foo = 1;  // Comment attached to foo.\n   // Comment attached to bar.\n   optional int32 bar = 2;\n\n   optional string baz = 3;\n   // Comment attached to baz.\n   // Another line attached to baz.\n\n   // Comment attached to qux.\n   //\n   // Another line attached to qux.\n   optional double qux = 4;\n\n   // Detached comment for corge. This is not leading or trailing comments\n   // to qux or corge because there are blank lines separating it from\n   // both.\n\n   // Detached comment for corge paragraph 2.\n\n   optional string corge = 5;\n   /* Block comment attached\n    * to corge.  Leading asterisks\n    * will be removed. */\n   /* Block comment attached to\n    * grault. */\n   optional int32 grault = 6;\n\n   // ignored detached comments.\n"
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              2,
              4
            ],
            "span": [
              795,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              2,
              5
            ],
            "span": [
              795,
              13,
              19
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              2,
              1
            ],
            "span": [
              795,
              20,
              36
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              2,
              3
            ],
            "span": [
              795,
              39,
              40
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              3
            ],
            "span": [
              796,
              4,
              42
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              3,
              4
            ],
            "span": [
              796,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              3,
              5
            ],
            "span": [
              796,
              13,
              19
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              3,
              1
            ],
            "span": [
              796,
              20,
              37
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              3,
              3
            ],
            "span": [
              796,
              40,
              41
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              4
            ],
            "span": [
              797,
              4,
              50
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              4,
              4
            ],
            "span": [
              797,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              4,
              5
            ],
            "span": [
              797,
              13,
              19
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              4,
              1
            ],
            "span": [
              797,
              20,
              45
            ]
          },
          {
            "path": [
              4,
              18,
              3,
              0,
              2,
              4,
              3
            ],
            "span": [
              797,
              48,
              49
            ]
          },
          {
            "path": [
              4,
              19
            ],
            "span": [
              804,
              0,
              825,
              1
            ],
            "leadingComments": " Describes the relationship between generated code and its original source\n file. A GeneratedCodeInfo message is associated with only one generated\n source file, but may contain references to different source .proto files.\n"
          },
          {
            "path": [
              4,
              19,
              1
            ],
            "span": [
              804,
              8,
              25
            ]
          },
          {
            "path": [
              4,
              19,
              2,
              0
            ],
            "span": [
              807,
              2,
              37
            ],
            "leadingComments": " An Annotation connects some span of text in generated code to an element\n of its generating .proto file.\n"
          },
          {
            "path": [
              4,
              19,
              2,
              0,
              4
            ],
            "span": [
              807,
              2,
              10
            ]
          },
          {
            "path": [
              4,
              19,
              2,
              0,
              6
            ],
            "span": [
              807,
              11,
              21
            ]
          },
          {
            "path": [
              4,
              19,
              2,
              0,
              1
            ],
            "span": [
              807,
              22,
              32
            ]
          },
          {
            "path": [
              4,
              19,
              2,
              0,
              3
            ],
            "span": [
              807,
              35,
              36
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0
            ],
            "span": [
              808,
              2,
              824,
              3
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              1
            ],
            "span": [
              808,
              10,
              20
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              0
            ],
            "span": [
              811,
              4,
              42
            ],
            "leadingComments": " Identifies the element in the original source .proto file. This field\n is formatted the same as SourceCodeInfo.Location.path.\n"
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              0,
              4
            ],
            "span": [
              811,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              0,
              5
            ],
            "span": [
              811,
              13,
              18
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              0,
              1
            ],
            "span": [
              811,
              19,
              23
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              0,
              3
            ],
            "span": [
              811,
              26,
              27
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              0,
              8
            ],
            "span": [
              811,
              28,
              41
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              0,
              8,
              999,
              0
            ],
            "span": [
              811,
              29,
              40
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              0,
              8,
              999,
              0,
              2
            ],
            "span": [
              811,
              29,
              35
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              0,
              8,
              999,
              0,
              2,
              0
            ],
            "span": [
              811,
              29,
              35
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              0,
              8,
              999,
              0,
              2,
              0,
              1
            ],
            "span": [
              811,
              29,
              35
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              0,
              8,
              999,
              0,
              3
            ],
            "span": [
              811,
              36,
              40
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              1
            ],
            "span": [
              814,
              4,
              36
            ],
            "leadingComments": " Identifies the filesystem path to the original source .proto.\n"
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              1,
              4
            ],
            "span": [
              814,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              1,
              5
            ],
            "span": [
              814,
              13,
              19
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              1,
              1
            ],
            "span": [
              814,
              20,
              31
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              1,
              3
            ],
            "span": [
              814,
              34,
              35
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              2
            ],
            "span": [
              818,
              4,
              29
            ],
            "leadingComments": " Identifies the starting offset in bytes in the generated code\n that relates to the identified object.\n"
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              2,
              4
            ],
            "span": [
              818,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              2,
              5
            ],
            "span": [
              818,
              13,
              18
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              2,
              1
            ],
            "span": [
              818,
              19,
              24
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              2,
              3
            ],
            "span": [
              818,
              27,
              28
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              3
            ],
            "span": [
              823,
              4,
              27
            ],
            "leadingComments": " Identifies the ending offset in bytes in the generated code that\n relates to the identified offset. The end offset should be one past\n the last relevant byte (so the length of the text = end - begin).\n"
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              3,
              4
            ],
            "span": [
              823,
              4,
              12
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              3,
              5
            ],
            "span": [
              823,
              13,
              18
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              3,
              1
            ],
            "span": [
              823,
              19,
              22
            ]
          },
          {
            "path": [
              4,
              19,
              3,
              0,
              2,
              3,
              3
            ],
            "span": [
              823,
              25,
              26
            ]
          }
        ]
      }
    },
    {
      "name": "google/api/annotations.proto",
      "package": "google.api",
      "dependency": [
        "google/api/http.proto",
        "google/protobuf/descriptor.proto"
      ],
      "extension": [
        {
          "name": "http",
          "number": 72295728,
          "label": "LABEL_OPTIONAL",
          "type": "TYPE_MESSAGE",
          "typeName": ".google.api.HttpRule",
          "extendee": ".google.protobuf.MethodOptions",
          "jsonName": "http"
        }
      ],
      "options": {
        "javaPackage": "com.google.api",
        "javaOuterClassname": "AnnotationsProto",
        "javaMultipleFiles": true,
        "goPackage": "google.golang.org/genproto/googleapis/api/annotations;annotations",
        "objcClassPrefix": "GAPI"
      },
      "sourceCodeInfo": {
        "location": [
          {
            "span": [
              14,
              0,
              30,
              1
            ]
          },
          {
            "path": [
              12
            ],
            "span": [
              14,
              0,
              18
            ],
            "leadingDetachedComments": [
              " Copyright (c) 2015, Google Inc.\n\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n     http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n"
            ]
          },
          {
            "path": [
              2
            ],
            "span": [
              16,
              8,
              18
            ]
          },
          {
            "path": [
              3,
              0
            ],
            "span": [
              18,
              7,
              30
            ]
          },
          {
            "path": [
              3,
              1
            ],
            "span": [
              19,
              7,
              41
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              21,
              0,
              88
            ]
          },
          {
            "path": [
              8,
              999,
              0
            ],
            "span": [
              21,
              0,
              88
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              2
            ],
            "span": [
              21,
              7,
              17
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              2,
              0
            ],
            "span": [
              21,
              7,
              17
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              2,
              0,
              1
            ],
            "span": [
              21,
              7,
              17
            ]
          },
          {
            "path": [
              8,
              999,
              0,
              7
            ],
            "span": [
              21,
              20,
              87
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              22,
              0,
              34
            ]
          },
          {
            "path": [
              8,
              999,
              1
            ],
            "span": [
              22,
              0,
              34
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              2
            ],
            "span": [
              22,
              7,
              26
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              2,
              0
            ],
            "span": [
              22,
              7,
              26
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              2,
              0,
              1
            ],
            "span": [
              22,
              7,
              26
            ]
          },
          {
            "path": [
              8,
              999,
              1,
              3
            ],
            "span": [
              22,
              29,
              33
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              23,
              0,
              49
            ]
          },
          {
            "path": [
              8,
              999,
              2
            ],
            "span": [
              23,
              0,
              49
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              2
            ],
            "span": [
              23,
              7,
              27
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              2,
              0
            ],
            "span": [
              23,
              7,
              27
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              2,
              0,
              1
            ],
            "span": [
              23,
              7,
              27
            ]
          },
          {
            "path": [
              8,
              999,
              2,
              7
            ],
            "span": [
              23,
              30,
              48
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              24,
              0,
              39
            ]
          },
          {
            "path": [
              8,
              999,
              3
            ],
            "span": [
              24,
              0,
              39
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              2
            ],
            "span": [
              24,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              2,
              0
            ],
            "span": [
              24,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              2,
              0,
              1
            ],
            "span": [
              24,
              7,
              19
            ]
          },
          {
            "path": [
              8,
              999,
              3,
              7
            ],
            "span": [
              24,
              22,
              38
            ]
          },
          {
            "path": [
              8
            ],
            "span": [
              25,
              0,
              34
            ]
          },
          {
            "path": [
              8,
              999,
              4
            ],
            "span": [
              25,
              0,
              34
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              2
            ],
            "span": [
              25,
              7,
              24
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              2,
              0
            ],
            "span": [
              25,
              7,
              24
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              2,
              0,
              1
            ],
            "span": [
              25,
              7,
              24
            ]
          },
          {
            "path": [
              8,
              999,
              4,
              7
            ],
            "span": [
              25,
              27,
              33
            ]
          },
          {
            "path": [
              7
            ],
            "span": [
              27,
              0,
              30,
              1
            ]
          },
          {
            "path": [
              7,
              0
            ],
            "span": [
              29,
              2,
              27
            ],
            "leadingComments": " See `HttpRule`.\n"
          },
          {
            "path": [
              7,
              0,
              2
            ],
            "span": [
              27,
              7,
              36
            ]
          },
          {
            "path": [
              7,
              0,
              4
            ],
            "span": [
              29,
              2,
              27,
              38
            ]
          },
          {
            "path": [
              7,
              0,
              6
            ],
            "span": [
              29,
              2,
              10
            ]
          },
          {
            "path": [
              7,
              0,
              1
            ],
            "span": [
              29,
              11,
              15
            ]
          },
          {
            "path": [
              7,
              0,
              3
            ],
            "span": [
              29,
              18,
              26
            ]
          }
        ]
      },
      "syntax": "proto3"
    },
    {
      "name": "helloworld.proto",
      "package": "helloworld",
      "dependency": [
        "google/api/annotations.proto"
      ],
      "messageType": [
        {
          "name": "GreeterRequest",
          "field": [
            {
              "name": "name",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "name"
            }
          ]
        },
        {
          "name": "GreeterReply",
          "field": [
            {
              "name": "message",
              "number": 1,
              "label": "LABEL_OPTIONAL",
              "type": "TYPE_STRING",
              "jsonName": "message"
            }
          ]
        }
      ],
      "service": [
        {
          "name": "Greeter",
          "method": [
            {
              "name": "sayHello",
              "inputType": ".helloworld.GreeterRequest",
              "outputType": ".helloworld.GreeterReply",
              "options": {}
            },
            {
              "name": "sayGoodbye",
              "inputType": ".helloworld.GreeterRequest",
              "outputType": ".helloworld.GreeterReply",
              "options": {}
            }
          ]
        }
      ],
      "sourceCodeInfo": {
        "location": [
          {
            "span": [
              0,
              0,
              32,
              1
            ]
          },
          {
            "path": [
              12
            ],
            "span": [
              0,
              0,
              18
            ]
          },
          {
            "path": [
              2
            ],
            "span": [
              1,
              8,
              18
            ]
          },
          {
            "path": [
              3,
              0
            ],
            "span": [
              3,
              7,
              37
            ]
          },
          {
            "path": [
              6,
              0
            ],
            "span": [
              6,
              0,
              22,
              1
            ],
            "leadingComments": " The greeting service definition.\n"
          },
          {
            "path": [
              6,
              0,
              1
            ],
            "span": [
              6,
              8,
              15
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              0
            ],
            "span": [
              8,
              2,
              13,
              3
            ],
            "leadingComments": " Sends a greeting\n"
          },
          {
            "path": [
              6,
              0,
              2,
              0,
              1
            ],
            "span": [
              8,
              6,
              14
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              0,
              2
            ],
            "span": [
              8,
              16,
              30
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              0,
              3
            ],
            "span": [
              8,
              41,
              53
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              0,
              4
            ],
            "span": [
              9,
              4,
              12,
              6
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              0,
              4,
              999,
              0
            ],
            "span": [
              9,
              4,
              12,
              6
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              0,
              4,
              999,
              0,
              2
            ],
            "span": [
              9,
              11,
              28
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              0,
              4,
              999,
              0,
              2,
              0
            ],
            "span": [
              9,
              11,
              28
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              0,
              4,
              999,
              0,
              2,
              0,
              1
            ],
            "span": [
              9,
              12,
              27
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              0,
              4,
              999,
              0,
              8
            ],
            "span": [
              9,
              31,
              12,
              5
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              1
            ],
            "span": [
              16,
              2,
              21,
              3
            ],
            "leadingComments": " Sends a farewell\n"
          },
          {
            "path": [
              6,
              0,
              2,
              1,
              1
            ],
            "span": [
              16,
              6,
              16
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              1,
              2
            ],
            "span": [
              16,
              18,
              32
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              1,
              3
            ],
            "span": [
              16,
              43,
              55
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              1,
              4
            ],
            "span": [
              17,
              4,
              20,
              6
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              1,
              4,
              999,
              0
            ],
            "span": [
              17,
              4,
              20,
              6
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              1,
              4,
              999,
              0,
              2
            ],
            "span": [
              17,
              11,
              28
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              1,
              4,
              999,
              0,
              2,
              0
            ],
            "span": [
              17,
              11,
              28
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              1,
              4,
              999,
              0,
              2,
              0,
              1
            ],
            "span": [
              17,
              12,
              27
            ]
          },
          {
            "path": [
              6,
              0,
              2,
              1,
              4,
              999,
              0,
              8
            ],
            "span": [
              17,
              31,
              20,
              5
            ]
          },
          {
            "path": [
              4,
              0
            ],
            "span": [
              25,
              0,
              27,
              1
            ],
            "leadingComments": " The request message containing the user's name.\n"
          },
          {
            "path": [
              4,
              0,
              1
            ],
            "span": [
              25,
              8,
              22
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0
            ],
            "span": [
              26,
              2,
              18
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              4
            ],
            "span": [
              26,
              2,
              25,
              24
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              5
            ],
            "span": [
              26,
              2,
              8
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              1
            ],
            "span": [
              26,
              9,
              13
            ]
          },
          {
            "path": [
              4,
              0,
              2,
              0,
              3
            ],
            "span": [
              26,
              16,
              17
            ]
          },
          {
            "path": [
              4,
              1
            ],
            "span": [
              30,
              0,
              32,
              1
            ],
            "leadingComments": " The response message containing the greetings\n"
          },
          {
            "path": [
              4,
              1,
              1
            ],
            "span": [
              30,
              8,
              20
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0
            ],
            "span": [
              31,
              2,
              21
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              4
            ],
            "span": [
              31,
              2,
              30,
              22
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              5
            ],
            "span": [
              31,
              2,
              8
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              1
            ],
            "span": [
              31,
              9,
              16
            ]
          },
          {
            "path": [
              4,
              1,
              2,
              0,
              3
            ],
            "span": [
              31,
              19,
              20
            ]
          }
        ]
      },
      "syntax": "proto3"
    }
  ],
  "compilerVersion": {
    "major": 3,
    "minor": 2,
    "patch": 0,
    "suffix": ""
  }
}
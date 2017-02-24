#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

mkdir generated

protoc\
  --plugin=${DIR}/protoc-gen-logger \
  -I ${DIR}/../proto \
  ${DIR}/../proto/helloworld.proto \
  --logger_out=generated

protoc\
  --plugin=${DIR}/protoc-gen-express_server \
  -I ${DIR}/../proto \
  ${DIR}/../proto/helloworld.proto \
  --express_server_out=generated

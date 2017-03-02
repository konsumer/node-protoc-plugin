#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

mkdir generated 2> /dev/null

protoc\
  --plugin=${DIR}/protoc-gen-logger \
  -I ${DIR}/../proto \
  ${DIR}/../proto/helloworld.proto \
  --logger_out=generated

protoc\
  --plugin=${DIR}/protoc-gen-extendedlogger \
  -I ${DIR}/../proto \
  ${DIR}/../proto/helloworld.proto \
  --extendedlogger_out=generated
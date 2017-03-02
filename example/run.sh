#!/bin/bash

# here is how to run all the examples:

# get dir of this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# make a place for utput
mkdir ${DIR}/../generated 2> /dev/null

# test out simple JSON logger
protoc\
  --plugin=${DIR}/protoc-gen-logger \
  -I ${DIR}/../proto \
  ${DIR}/../proto/helloworld.proto \
  --logger_out=${DIR}/../generated

# test out more advanced JSON logger
protoc\
  --plugin=${DIR}/protoc-gen-extendedlogger \
  -I ${DIR}/../proto \
  ${DIR}/../proto/helloworld.proto \
  --extendedlogger_out=${DIR}/../generated
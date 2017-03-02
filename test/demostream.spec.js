/* global describe it expect */

const { Writable } = require('stream')
const { createReadStream } = require('fs')

const {CodeGeneratorRequest, CodeGeneratorResponse, CodeGeneratorResponseError} = require('../src/index')

const mockIn = () => createReadStream(`${__dirname}/helloworld.pbf`)
const mockOut = (done) => new Writable({
  write (chunk, encoding, callback) {
    expect(chunk).toMatchSnapshot()
    callback()
    done()
  }
})

describe('protoc-plugin', () => {
  describe('CodeGeneratorRequest', () => {
    it('should handle incoming CodeGeneratorRequest messages', done => {
      CodeGeneratorRequest(mockIn())
        .then(r => {
          expect(r).toMatchSnapshot()
          done()
        })
        .catch(done)
    })
  })

  describe('CodeGeneratorResponse', () => {
    it('should create outgoing CodeGeneratorResponse messages', done => {
      CodeGeneratorResponse(mockOut(done))([{name: 'test', content: 'CONTENTS'}])
    })
  })

  describe('CodeGeneratorResponseError', () => {
    it('should create outgoing CodeGeneratorResponse message for error', done => {
      CodeGeneratorResponseError(mockOut(done))('just testing')
    })
  })
})

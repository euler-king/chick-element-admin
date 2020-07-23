const Mock = require('mockjs')
const { param2Obj } = require('./utils')
const express = require('express')
const bodyParser = require('body-parser')
const { apiPrefix } = require('../settings')
const user = require('./user')
const role = require('./role')
const article = require('./article')
const search = require('./remote-search')

const mocks = [
  ...user,
  ...role,
  ...article,
  ...search
]

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function() {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

function createMethod(req, res) {
  let result = null
  const { body, type, path, query } = req

  var respond = {}
  for (const i of mocks) {
    if (i.url.indexOf(path) !== -1) {
      respond = i.response
      break
    }
  }
  if (respond instanceof Function) {
    // https://expressjs.com/en/4x/api.html#req
    result = respond({
      method: type,
      body: body,
      query: query
    })
  } else {
    result = respond
  }
  res.send(Mock.mock(result))
}

function mockMiddleware() {
  const app = express()
  app.use(bodyParser.json()) // 数据JSON类型
  for (const mock of mocks) {
    var url = mock.url.substring(apiPrefix.length, mock.url.length)

    if (mock.type === 'get') {
      app.get(url, (req, res) => createMethod(req, res))
    } else {
      app.post(url, (req, res) => createMethod(req, res))
    }
  }
  return { path: apiPrefix, handler: app }
}

module.exports = {
  mocks,
  mockXHR,
  mockMiddleware
}

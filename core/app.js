const http = require('http')
const Router = require('./router')
const enhanceReq = require('./request')
const enhanceRes = require('./response')

class Framework {
  constructor() {
    this.middlewares = []
    this.router = new Router()
  }

  use(fn) {
    this.middlewares.push(fn)
  }

  get(path, fn) {
    this.router.register('GET', path, fn)
  }

  post(path, fn) {
    this.router.register('POST', path, fn)
  }

  put(path, fn) {
    this.router.register('PUT', path, fn)
  }

  patch(path, fn) {
    this.router.register('PATCH', path, fn)
  }

  delete(path, fn) {
    this.router.register('DELETE', path, fn)
  }

  listen(port, cb) {
    const server = http.createServer((req, res) => {
      enhanceReq(req, () => {
        enhanceRes(res)
        const run = i => {
          if (i < this.middlewares.length) {
            this.middlewares[i](req, res, () => run(i + 1))
          } else {
            this.router.handle(req, res)
          }
        }
        try {
          run(0)
        } catch {
          res.status(500).json({ error: 'Internal Server Error' })
        }
      })
    })
    server.listen(port, cb)
  }
}

module.exports = Framework

class Router {
  constructor() {
    this.routes = {}
  }

  register(method, path, fn) {
    if (!this.routes[method]) this.routes[method] = {}
    this.routes[method][path] = fn
  }

  handle(req, res) {
    const method = req.method
    const path = req.url.split('?')[0]
    const fn = this.routes[method]?.[path]
    fn ? fn(req, res) : res.status(404).send('Not Found')
  }
}

module.exports = Router

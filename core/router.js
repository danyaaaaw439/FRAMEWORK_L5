class Router {
    constructor() {
      this.routes = {};
    }
  
    register(method, path, handler) {
      if (!this.routes[method]) this.routes[method] = {};
      this.routes[method][path] = handler;
    }
  
    handle(req, res) {
      const method = req.method;
      const url = req.url.split('?')[0];
  
      const handler = this.routes[method]?.[url];
  
      if (handler) {
        handler(req, res);
      } else {
        res.status(404).send('Not Found');
      }
    }
  }
  
  module.exports = Router;
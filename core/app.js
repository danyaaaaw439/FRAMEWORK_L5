const http = require('http');                 
const Router = require('./router');           
const enhanceReq = require('./request');      
const enhanceRes = require('./response');     

class Framework {
  constructor() {
    this.middlewares = [];
    this.router = new Router();
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  get(path, handler) {
    this.router.register('GET', path, handler);
  }

  post(path, handler) {
    this.router.register('POST', path, handler);
  }

  put(path, handler) {
    this.router.register('PUT', path, handler);
  }

  patch(path, handler) {
    this.router.register('PATCH', path, handler);
  }

  delete(path, handler) {
    this.router.register('DELETE', path, handler);
  }

  listen(port, callback) {
    const server = http.createServer((req, res) => {
      enhanceReq(req, () => {
        enhanceRes(res);

        const runMiddleware = (index) => {
          if (index < this.middlewares.length) {
            this.middlewares[index](req, res, () => runMiddleware(index + 1));
          } else {
            this.router.handle(req, res);
          }
        };

        try {
          runMiddleware(0);
        } catch (err) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
    });

    server.listen(port, callback);
  }
}

module.exports = Framework;
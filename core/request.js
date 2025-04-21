const { parse } = require('url');
const querystring = require('querystring');

module.exports = function enhanceReq(req) {
  const { query } = parse(req.url);
  req.query = querystring.parse(query || '');

  req.body = {};
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        req.body = JSON.parse(body);
      } catch {
        req.body = {};
      }
    });
  }
};
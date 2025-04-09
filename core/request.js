const { parse } = require('url')
const querystring = require('querystring')

module.exports = function(req, done) {
  const { query } = parse(req.url)
  req.query = querystring.parse(query || '')
  req.body = {}
  if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
    let body = ''
    req.on('data', c => (body += c))
    req.on('end', () => {
      try {
        req.body = JSON.parse(body)
      } catch {}
      done()
    })
  } else {
    done()
  }
}

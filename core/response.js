module.exports = function(res) {
  res.send = d => {
    res.writeHead(res.statusCode || 200, { 'Content-Type': 'text/plain' })
    res.end(d)
  }

  res.json = d => {
    res.writeHead(res.statusCode || 200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(d))
  }

  res.status = c => {
    res.statusCode = c
    return res
  }
}

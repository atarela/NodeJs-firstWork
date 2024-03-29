// in this file no routing usage
const http = require('http')
const url = require('url')
const qs = require('querystring')


const serverHandle = function (req, res) {
  const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (path === '/hello' && 'name' in params) {
    res.write('Hello ' + params['name'])
  } else {
    res.write('Hello anonymous')
  }

  res.end();
}

// Declare an http server
http.createServer(serverHandle).listen(8080)

// curl localhost:8080 or go to http://localhost:8080

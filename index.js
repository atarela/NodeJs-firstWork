//Here I use the routing to read what is in the handle file

const http = require('http')
const handles = require('./handle')
const server = http.createServer(handles.serverHandle);
server.listen(8081)
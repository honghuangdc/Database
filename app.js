var http = require('http')
var fs = require('fs')

var server = http.createServer((request, response) => {
  var url = request.url
  if (url === '/chyichin/album') {
    fs.readFile('./chyichin/json/album.json', function(err, data) {
      if (!err) {
        response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' })
        response.end(data)
      } else {
        throw err
      }
    })
  } else {
    console.log('错误')
  }
})

server.listen(7000);
console.log('Server is running at \033[36m http://127.0.0.1:7000/\033[0m');
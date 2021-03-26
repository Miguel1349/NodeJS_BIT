const http = require('http')// Importa el modulo http de node

const hostname = '127.0.0.1'// Dirección del servidor
const port = 3000// Puerto por donde se escucharan las peticiones

const server = http.createServer((req, res) => {// Crea el servidor
  res.statusCode = 200// indica que la petición se resolvio correctamente
  res.setHeader('Content-Type', 'text/plain')// tipo de respuesta
  res.end('Hello World!\n')// respuesta
})

server.listen(port, hostname, () => {// Se establece el listener para el servidor
  console.log(`Server running at http://${hostname}:${port}/`)// imprime en tanto esta arriba el servidor
})
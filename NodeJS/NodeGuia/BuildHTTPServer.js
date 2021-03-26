const http = require('http')// importa modulo http de node

const port = 3000// puerto de escucha

const server = http.createServer((req, res) => {// funcion para crear un servidor
    // cuerpo de la respuesta
  res.statusCode = 200// estado de la respuesta
  res.setHeader('Content-Type', 'text/html')// tipo de la respuesta
  res.end('<h1>Hello, World!</h1>')// Cuerpo de la respuesta
})

server.listen(port, () => {// establece el puerto por el cual el servidor esuchara las peticiones
  console.log(`Server running at port ${port}`)
})
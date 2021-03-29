/**
 * HTTP, HTTPS, HTTP2
 * Modulos de implementacion de protocolos de HTTP
 * Estas implmentaciones tienen funciones de bajo nivel
 * 1. Crear un objeto de servidor
 * 2. Llamar al listener para que se escuchen solicitudes del puerto especifico
 * 3. Registrar un controlador de eventos para eventos de request
 */
 const http = require('http');// usar HTTPS si se tiene un certificado
 const url = require('url');// para URL's
 const pathServe = require('path');// para manipular rutas
 const fsS = require('fs');// para archivos
 
 function serve(rootDirectory, port) {
     let server = new http.Server();// Se crea un nuevo servidor HTTP
     server.listen(port); // Escucha en el puerto especificado
     console.log(`Listening on port: ${port}`);
     server.on("request", (request, response) => {
         let endpoint = url.parse(request.url).pathname;// Obtiene la ruta de la url que trae la solicitud. ignora los parametros
         if(endpoint === "/test/mirror") {
             response.setHeader("Content-type", "text/plain; charset=UTF-8");
             response.writeHead(200);
             response.write(`${request.method} ${request.url} HTTP/${//Cuerpo de la respuesta
                 request.httpVersion
             }\r\n`);
             let headers = request.rawHeaders;
             for (let i = 0; i < headers.length; i++) {
                 response.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
             }
             response.write("\r\n");
             request.pipe(response);// Copia cualquier cuerpo del request al cuerpo del response, dado que ambos son flujos.
         }
         else if(endpoint === '/test/file') {
             let fileName = process.argv[2];
             fileName = fileName.replace(/\.\.\\/g, '');// No va a permitir ../ dentro
             fileName = pathServe.resolve(rootDirectory);
             console.log(fileName);
             let fileType;
             switch (pathServe.extname(fileName)) {
                case '.html':
                case '.htm':
                    fileType = 'text/html';
                    break;
                case '.js':
                    fileType = 'text/javascript';
                    break;
                case '.css':
                    fileType = 'text/css';
                    break;
                case '.png':
                    fileType = 'image/png';
                    break;
                case '.txt':
                    fileType = 'text/plain';
                    break;
                case '.json':
                    fileType = 'text/json';
                    break;
                default:
                    fileType = 'application/octet-stream';
                    break;
             }
             let stream = fsS.createReadStream(fileName);
             stream.once("readable", () => {
                 response.setHeader("Content-type", fileType);
                 response.writeHead(200);
                 stream.pipe(response);
             });
             stream.on('error', (err) => {
                 response.setHeader('Content-type', 'text/plain; charset=UTF-8');
                 response.writeHead(404);
                 response.end(err.message);
             });
         }
     });// Cuando lleguen solicitudes las manipulamos con esta función
 }
 
 serve(process.argv[2] || "/tmp", parseInt(process.argv[3]) || 8000);
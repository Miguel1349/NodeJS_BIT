console.log(process.argv);
/**
 * Firebase
 * https://www.npmjs.com/package/firebase
 * 
 * React-Bootstrap
 * https://www.npmjs.com/package/react-bootstrap
 * 
 * Buffers
 * Es un tipo de dato que nos ayuda a leer datos de archivos o de la red, buffer es una secuencia de bytes en lugar de una secuencia de
 * caracteres. Buffer es una subclase de la clase Uint8Array. BUffer esta diseñado para operar con cadenas de JavaScript, esto significa
 * que se pueden inicializar a partir de cadenas de caracteres o convertirse a cadenas de caracteres.
 * 
 * Caracteristicas del Buffer:
 * 1 - Asigna a cada caracter un numero entero
 * 
 * Codificaciones admitidas por un buffer de nodejs
 * ** UTF-8: valor por defecto
 * ** Unicode
 * ** UTF-16LE: Unicode de dos bytes
 * ** Latin1: para idiomas de Europa Occidental
 * ** ASCII: la tabla ASCII, 7 bits
 * ** Hexadecimal: Convierte cada byte en un par de digitos hexadecimales de ASCII
 * ** Base64: Convierte cada secuencia de 3 bytes en una secuencia de 4 caracteres ASCII
 */

let buffer = Buffer.from([0x41, 0x42, 0x43]);
console.log(buffer.toString());
console.log(buffer.toString("hex"));

let computer = Buffer.from("IBM 3111", "ascii");
console.log(computer.toString("ascii"));
console.log(computer.subarray(0, 3).map(x => x + 1).toString());

for (let i = 0; i < computer.length; i++) {
    computer[i]--;    
}
console.log(computer.toString("ascii"));

let ceros = Buffer.alloc(1024);
console.log(ceros);

let unos = Buffer.alloc(1028, 1);
console.log(unos);

let patterns = Buffer.alloc(1024, "DBEF", "hex");
console.log(patterns);

/**
 * Eventos
 */
const EventEmitter = require('events');
const net = require('net');

let server = new net.Server();
console.log(server instanceof EventEmitter);

server.on('connection', socket => {
    socket.end("Hello World!!!", "utf-8");
});

/**
 * Streams
 * ** Readable: son streams fuentes de datos, devuelve un fs.createReadStream
 * ** Writeable: Receptores o destinatarios de datos, devuelve un fs.createWriteStream
 * ** Duplex: combinan los dos anteriores(Writeable, Readable)
 * ** Transform: Transformadores, pueden leer y escribir con la diferencia que los datos que leen y escriben en un flujo de datos se
 *               transforman solo en legibles(Readable)
 */
const fs = require('fs');

function pipeFileToSocket(fileName, socket) {
    fs.createReadStream(fileName).pipe(socket);
}

/**
 * Process
 * arch: muestra la arquitectura del CPU
 * cwd: directorio de trabajo actual
 * chdir: settiar el directorio de tabajo actual
 * cpuUsage: reporta el uso de la CPU
 */
console.log(process.argv);
console.log(process.arch);
console.log(process.cwd());
// console.log(process.chdir());
console.log(process.cpuUsage());
console.log(process.env);

const os = require('os');
console.log(os.arch());
console.log(os.cpus());
console.log(os.type());

/*
 * Node a nivel de hardware
 */
/*console.log(process.arch); // La arquitectura de la CPU: "x64", por ejemplo.
console.log(process.cwd()); // Devuelve el directorio de trabajo actual.
//console.log(process.chdir()); // Establece el directorio de trabajo actual.
console.log(process.cpuUsage()); // Informa el uso de la CPU.
console.log(process.argv); // Una matriz de argumentos de la línea de comandos.
console.log(process.env); // Un objeto de variables de entorno.
console.log(process.execPath); // La ruta absoluta del sistema de archivos al ejecutable del nodo.
console.log(process.exit()); // Termina el programa.
console.log(process.exitCode); // Un código entero que se informará cuando se cierre el programa.
console.log(process.getuid()); // Devuelve el ID de usuario de Unix del usuario actual.
console.log(process.hrtime.bigint()); // Devuelve una marca de tiempo de nanosegundos de "alta resolución".
console.log(process.kill()); // Envía una señal a otro proceso.
console.log(process.memoryUsage()); // Devuelve un objeto con detalles de uso de memoria.
console.log(process.nextTick()); // Como setImmediate (), invoca una función pronto.
console.log(process.pid); // El ID de proceso del proceso actual.
console.log(process.ppid); // El ID del proceso padre.
console.log(process.platform); // El sistema operativo: "linux", "darwin" o "win32", por ejemplo.
console.log(process.resourceUsage()); // Devuelve un objeto con detalles de uso de recursos.
console.log(process.setuid()); // Establece el usuario actual, por id o nombre.
console.log(process.title); // El nombre del proceso que aparece en los listados `ps`.
console.log(process.umask()); // Establece o devuelve los permisos predeterminados para nuevos archivos.
console.log(process.uptime()); // Devuelve el tiempo de actividad de Node en segundos.
console.log(process.version); // Cadena de versión de Node
console.log(process.versions); // Cadenas de versión para las bibliotecas de las que depende Node.

/**
 * Ambiente del sistema operativo
 *//*
console.log(os.arch()); // Devuelve la arquitectura de la CPU. "x64" o "arm", por ejemplo.
console.log(os.constants); // Constantes útiles como os.constants.signals.SIGINT.
console.log(os.cpus()); // Datos sobre los núcleos de la CPU del sistema, incluidos los tiempos de uso.
console.log(os.endianness()); // El endianness nativo de la CPU "BE" o "LE".
console.log(os.EOL); // El terminador de línea nativo del sistema operativo: "\ n" o "\ r \ n".
console.log(os.freemem()); // Devuelve la cantidad de RAM libre en bytes.
console.log(os.getPriority()); // Devuelve la prioridad de programación del sistema operativo de un proceso.
console.log(os.homedir()); // Devuelve el directorio de inicio del usuario actual.
console.log(os.hostname()); // Devuelve el nombre de host de la computadora.
console.log(os.loadavg()); // Devuelve los promedios de carga de 1, 5 y 15 minutos.
console.log(os.networkInterfaces()); // Devuelve detalles sobre la red disponible. conexiones.
console.log(os.platform()); // Devuelve OS: "linux", "darwin" o "win32", por ejemplo.
console.log(os.release()); // Devuelve el número de versión del SO.
console.log(os.setPriority()); // Intenta establecer la prioridad de programación para un proceso.
console.log(os.tmpdir()); // Devuelve el directorio temporal predeterminado.
console.log(os.totalmem()); // Devuelve la cantidad total de RAM en bytes.
console.log(os.type()); // Devuelve SO: "Linux", "Darwin" o "Windows_NT", p. ej.
console.log(os.uptime()); // Devuelve el tiempo de actividad del sistema en segundos.
console.log(os.userInfo()); // Devuelve uid, nombre de usuario, inicio y shell del usuario actual.

/**
 * Modulo FS(FileSystem)
 * Es un API para trabajar con archivos y directorios
 * La mayoria de sus funciones son asincronas, pero tambien su contraparte sincrona
 * fs.readFile() => fs.readFileSync()
 * fs.promises.readFile() despues de la verison 10 de NodeJS
 * 
 * Paths:
 */
console.log(process.cwd());
console.log(__filename);// Ruta absoluta del archivo
console.log(__dirname);// Ruta del directorio actual
console.log(os.homedir()); // Muestra la ruta del directorio del usuario actual

const path = require('path');
console.log(path.sep); // Separador de la ruta según el S.O.
let directory = 'src/pkg/test.js';
console.log(path.basename(directory));
console.log(path.extname(directory));
console.log(path.dirname(directory));
console.log(path.basename(path.dirname(directory)));

// Normalize: corrige rutas
console.log(path.normalize("a/b/c/../d/"));
console.log(path.normalize("a/./b"));
console.log(path.normalize("//a//b//"));

// Joins
console.log(path.join("src", "pkg", "t.js"));

console.log(path.resolve());// Similar a process.pwd()
console.log(path.resolve('t.js'));// concatena la ruta con el argumento 't.js'
console.log(path.resolve('/tmp', 't.js'));
console.log(path.resolve('/a', '/b', 't.js'));
console.log(path.posix);// para trabajar paths en windows

// Lectura de archivos
// Sincona
const fsLib = require('fs');
let bufffer = fsLib.readFileSync('textPlano.txt');
console.log(bufffer);
let text = fsLib.readFileSync('textPlano.txt', 'utf-8');
console.log(text);

// Asincrona
fsLib.readFile('textPlano.txt', (err, buffer) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(buffer.toString());
    }
});

// Con promesas
fsLib.promises.readFile('textPlano.txt', 'utf-8')
    .then(processFileText => {
        console.log(processFileText.toString());
    })
    .catch(handleReadError => {
        console.log(handleReadError);
    });

// Lectura async - await
async function readFile(fileName, encoding = "utf-8") {
    let text = await fsLib.promises.readFile(fileName, encoding);
    console.log('text 2: ' + text);
}

readFile('textPlano.txt');

/**
 * Descriptores
 * Salida estandar a nivel de contenedores
 * No usar logs en archivos, para poner logs en un contenedor use log4j
 * 
 * stdOut
 */
function printFileInstdout(fileName, encoding = 'utf-8') {
    require
    fs.createReadStream(fileName, encoding).pipe(process.stdout);
}
 printFileInstdout('textPlano.txt');

// Escribir archivos
const configuration = {
    name: 'Miguel Angel',
    lastName: 'Blanco Lopez',
    age: 25
};
fs.writeFileSync(path.resolve(__dirname, "configuration.json"), JSON.stringify(configuration));

fs.appendFile("configuration.json", "Word - config extra", err => {
    if(err) {
        console.log(err);
    }
    else {
        let text = fs.readFileSync("configuration.json", 'utf8');
        console.log(text);
    }
});

/**
 * Metadatos de los archivos
 */
let stats = fs.statSync('configuration.json');
console.log(stats.isFile());
console.log(stats.isDirectory());
console.log(stats.size);
console.log(stats.atime);// Última vez que fue leido
console.log(stats.mtime);// Última modificación
console.log(stats.uid); // Terminologia de linux
console.log(stats.gid);// Terminologia de linux
console.log(stats.mode.toString(8)); // Permisos del archivo en octal

/**
 * Copia de archivos
 */
fs.copyFileSync("configuration.json", "configuration-copia.json");

/**
 * Escribir de 0 a 100 hacia abajo
 */
let output = fs.createWriteStream("configuration-copia.json");
for (let i = 0; i <= 100; i++) {
    output.write(`${i}\n`);
}
console.log(output.end());
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
     server.listeners(port); // Escucha en el puerto especificado
     console.log(`Listening on port: ${port}`);
     server.on("request", (request, response) => {
         let endpoint = url.parse(request.url).pathname;// Obtiene la ruta de la url que trae la solicitud. ignora los parametros
         if(endpoint === "/test/mirror") {
             response.setHeader("content-type", "text/plain; charset=UTF-8");
             response.writeHead(200);
             response.write(`${request.method} ${request.url} HTTP/${//Cuerpo de la respuesta
                 reques.httpVersion
             }\r\n`);
             let headers = request.rawHeaders;
             for (let i = 0; i < headers.length; i++) {
                 response.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
             }
             response.write("\r\n");
             request.pipe(response);// Copia cualquier cuerpo del request al cuerpo del response, dado que ambos son flujos.
         }
     });// Cuando lleguen solicitudes las manipulamos con esta función
 }
 
 serve(process.argv[2] || "/tmp", parseInt(process.argv[3]) || 8000);
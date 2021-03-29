const express = require('express');
const { route } = require('./routes/Routes');

const PORT = 9300

const server = express();
server.set('views', './views');
server.set('view engine', 'pug');

// server.use(express.json);
route(server);
/*server.use((request, response) => {
    response.status(404).send({message: 'No existe la ruta'})
});*/

server.listen(PORT, () => {
    console.log(`Server runing localhost:${PORT}`)
});
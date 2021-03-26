const EventEmitter = require('events')// Importa el modulo de eventos
const eventEmitter = new EventEmitter()// Instancia un objeto de EventEmitter

eventEmitter.on('start', (start, end) => {// Agrega el evento start, con argumentos
    console.log(`started from ${start} to ${end}`)
  })

  eventEmitter.emit('start', 1, 100)// Lanza el evento

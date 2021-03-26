console.log('x', 'y'); // imprime los objetos que se pasen como argumentos

// Cadena con formato
// %s se reemplaza por cadena, %d se reemplaza por numero
// otros: %i solo la parte entera de un numero, %o variable como objeto
console.log('My %s has %d year', 'cat', 3);

console.clear();// Limpia la consola

// Cuenta los elementos impresos
const oranges = ['orange', 'orange', 'apple'];
const apples = ['just one apple'];
oranges.forEach(fruit => {
    console.count(fruit);
});
apples.forEach(fruit => {
    console.count(fruit);
});

// imprimir la traza de la pila
const function2 = () => console.trace(); // imprime la traza de la pila de llamados
const function1 = () => function2();
function1();

// Calcular el tiempo de ejecución
const doSomething = () => console.log('test');
const measureDoingSomething = () => {
    console.time('doSomething()');// Inicio
    doSomething();
    console.timeEnd('doSomething()');// Fin
}
measureDoingSomething();

// Cambiar color del texto en consola
console.log('\x1b[33m%s\x1b[0m', 'Hi!!!');

// libreria chalk para dar estilos a las salidas en la consola
const chalk = require('chalk');// importa chalk
console.log(chalk.green('Hi!!!'));

// Barra de progreso en consola
const ProgressBar = require('progress');// importa progress

const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {// Timer para controlar la barra
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100);// tiempo que se ejecutara el intervalo

// leyendo datos desde la consola
const readline = require('readline').createInterface({// importa el modulo readLine de node
  input: process.stdin,// define la entrada
  output: process.stdout// define la salida
});

readline.question('What\'s your name?', name => {// muestra una pregunta en la consola y captura el dato ingresado
  console.log(`Hi ${name}!`)
  readline.close()// Libera el recurson
});

// Leyendo con el modulo inquirer
const inquirer = require('inquirer')// importa inquirer

var questions = [// objeto que definira el tipo de entrada a la consola
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

inquirer.prompt(questions).then(answers => {// captura el dato e imprime un mensaje
  console.log(`Hi ${answers['name']}!`)
})

const car = require('./Car');
console.log(car);

const bar = () => console.log('bar');

const baz = () => console.log('baz');

const ber = () => console.log('ber');

const bor = () => console.log('bor');

const foo = () => {
  console.log('foo');
  setImmediate(bor);// Ejecuta la función en la proxima iteracion del event loop
  process.nextTick(ber);// Ejecuta la función en la iteracion actual del event loop
  setTimeout(bar, 0);// segunda ejecución en la pila
  new Promise((resolve, reject) =>// Usando una promesa
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve));
  baz();// tercera ejecución en la pila
}

foo();// Entra en la pila, sera el primero en entrar y el ultimo en salir


// Timer con parametros
const saludo = (name, age) => {// Ejecuta una función dos segundos despues de su llamado
    console.log(`Hi ${name}, you are ${age} years old`);
}

setTimeout(saludo, 2000, 'Miguel', 25);

let i = 0;
const id = setInterval(() => {// Ejecuta una función cada dos segundos
   console.log(`value of i ${i}`);
   i++;
   if (i === 3) {
       clearInterval(id);// Cancela el intervalo
   }
}, 2000);
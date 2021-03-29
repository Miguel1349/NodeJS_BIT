/**
 * Fundamentalmente la programación asincronica en javascript se realiza con devoluciones de llamada(callback)
 * callback: es una función que se crea y luego se pasa(como argumento) a otra función, pero esta otra función invoca(devuelve la llamada)
 * a nuestra función cuando se cumple una condición o se produce un evento. este evento es asincrono
 * la invocación de la función de devolución 
 */

function cuadrado(x) {
    return x * x;
}

console.log("Before");
console.log(cuadrado(8));
console.log("After");

setTimeout(function() { console.log(cuadrado(9)) }, 3000);

function cuadradoAsync(x, callback) {
    setTimeout(() => callback(3), 100);
}
console.log("Before");
console.log(cuadradoAsync(4, result => console.log(`result ${result}`)));
console.log("After");

/**
 * Eliminar el detalle de las dependencias en los callbacks
 */
let seconds = 30;

function cuentaRegresiva(callback) {
    setInterval(() => {
        seconds--;
        callback();
    }, 1000);
}

function mostrarSegundos() {
    console.log(seconds);
}

// cuentaRegresiva(mostrarSegundos);

// callback hell: cuando se abusa del uso de los callback
// Errores en los callbacks: No se ejecuta la segunda llamada
import { readFile } from 'fs';

const CACHE = new Map();
function lecturaInconsistente(fileName, callback) {
    if(CACHE.has(fileName)) {
        callback(CACHE.get(fileName));
    }
    else {
        readFile(fileName, 'utf8', (err, data) => {
            CACHE.set(fileName, data);
            callback(data);
        });
    }
}

function leerArchivo(filename) {
    const LISTENERS = [];
    lecturaInconsistente(filename, valor => LISTENERS.forEach(listener => listener(valor)));
    return {onDataReady: listener => LISTENERS.push(listener)};
}

const reader1 = leerArchivo('data.txt');
reader1.onDataReady(data => {
    console.log(`Primera llamada a data ${data}`)
    const reader2 = leerArchivo('data.txt');
    reader2.onDataReady(data => console.log(`Segunda llamada a data ${data}`));
});

// Abusar de los callback en multiples funciones
let empanadas = 0;

function comprarEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales++;
    callback(empanadas);
}

function comprarTresEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 3;
    callback(empanadas);
}

function comprarCincoEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 5;
    callback(empanadas);
}

comprarEmpanadas(empanadas, primeraCompra => {
    console.log(`Empanadas: ${primeraCompra}`);
    // Me ha gustado!! Quiero 3 más
    comprarTresEmpanadas(primeraCompra, segundaCompra => {
        console.log(`Empanadas: ${segundaCompra}`)
        comprarCincoEmpanadas(segundaCompra, terceraCompra => {
            console.log(`Empanadas: ${terceraCompra}`);
        });
    });
});

/**
 * Promesas:
 * Las promesas se crearon en el estandar ES6 y si no se cumple es por que la promesa se ha rechazado
 * Souciona cosas como:
 * 1 - Legibilidad de código
 * 2 - Mejora el manejo de errores
 * 
 * Se manejan estados:
 * 1 - Resuelto
 * 2 - Rechazado
 */

 function comprarEmpanadasPromise(empanadasActuales) {
    const empanadas = empanadasActuales++;
    let promesa;
    return promesa = new Promise(resolve => resolve(empanadas));
}

function comprarTresEmpanadasPromise(empanadasActuales) {
    const empanadas = empanadasActuales + 3;
    let promesa;
    return promesa = new Promise(resolve => resolve(empanadas));
}

function comprarCincoEmpanadasPromise(empanadasActuales) {
    const empanadas = empanadasActuales + 5;
    let promesa;
    return promesa = new Promise(resolve => resolve(empanadas));
}

let empanadasPromesas = 0;
comprarEmpanadasPromise(empanadasPromesas)
    .then(
        result => {
            console.log(`Empanadas: ${result}`);
            // Ahora quiero mas!!
            comprarTresEmpanadasPromise(result).then(
                result => {
                    console.log(`Empanadas: ${result}`);
                    // 5 mas!!!
                    comprarCincoEmpanadasPromise(result).then(
                        result => {
                            console.log(`Empanadas: ${result}`);
                        }
                    );
                }
            );
        }
    );

/**
 * Async await
 */

let empanadasAsync = 0;
async function comprar() {
    const primeraCompra = await comprarEmpanadasPromise(empanadasAsync);
    console.log(`Empanadas async: ${primeraCompra}`);
    const segundaCompra = await comprarTresEmpanadasPromise(primeraCompra);
    console.log(`Empanadas async: ${segundaCompra}`);
    const terceraCompra = await comprarCincoEmpanadasPromise(segundaCompra);
    console.log(`Empanadas async: ${terceraCompra}`);
}

comprar();
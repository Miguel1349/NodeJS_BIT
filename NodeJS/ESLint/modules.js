/**
 * Modulos: permiten que grandes programas se ensamblen y funcionen correctamente.
 * Consiste en ocultar detalles de implementacion privada, matener ordenado el namespace global para que
 * los modulos no puedan modificar accidentalmente las variables y clases definidad por otros modulos.
 */
const stats1 = (function() {
    const sum = (x, y) => x + y;
    const square = x => x * x;

    function mean(data) {
        return data.reduce(sum)/data.length;
    }

    function stdDev(data) {
        let m = mean(data);
        return Math.sqrt(data.map(x => x -m).map(square).reduce(sum)/(data.length - 1));
    }

    return {mean, stdDev};
}());

console.log(stats1.mean([1, 3, 5, 7, 9]));
console.log(stats1.stdDev([1, 3, 5, 7, 9]));

const calculator1 = (function() {
    const multiplicar = (x, y) => x * y;
    const restar = (x, y) => x - y;
    const dividir = (x, y) => x / y;
    const sumar = (x, y) => x + y;
    return {multiplicar, restar, dividir, sumar};
}());

console.log(calculator1.multiplicar(3, 4));

const modules = {};
function require (moduleName) {
    return modules[moduleName];
};

modules['stats.js'] = (function() {
    const exports = {};
    const sum = (x, y) => x + y;
    const square = x => x * x;

    exports.mean = function(data) {
        return data.reduce(sum)/data.length;
    }

    exports.stdDev = function(data) {
        let m = mean(data);
        return Math.sqrt(data.map(x => x -m).map(square).reduce(sum)/(data.length - 1));
    }

    return exports;
}());

modules['calculator.js'] = (function() {
    const exports = {};
    exports.multiplicar = (x, y) => x * y;
    exports.restar = (x, y) => x - y;
    exports.dividir = (x, y) => x / y;
    exports.sumar = (x, y) => x + y;
    return exports;
}());

const stats = require('stats.js');
const calculadora = require('calculator.js');
console.log(stats.mean([1, 3, 5, 7, 9, 11]));
console.log(calculadora.sumar(5, 4));

/**
 * Modulos en ES6
 * Los modulos en ES6 son oficiales para la mayoria de los navegadores, excepto Internet Explorer. En los modulos de ES6 cada archivo tiene su
 * propio contexto privado y se puede usar las declaraciones de importación y exportación que estan en modo estricto
 */
export const PI = Math.PI;

export function convertirGradosARadianes(grados) {
    return grados * Math.PI / 180;
}

export class Circle {

    constructor(radio) {
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }

}

// Segunda alternativa para exportar (export)
const PI_2 = Math.PI;

function convertirGradosARadianes2(grados) {
    return grados * Math.PI / 180;
}

class Circle2 {

    constructor(radio) {
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }

}
// Segunda alternativa a exportar (export)
// Yo escogeria la segunda si son varias, si es un solo un export usaria la primera
export { PI_2, convertirGradosARadianes2, Circle2};

/* En el caso de solo querer exportar un solo elemento utilizamos la palabra default, funciona igual para funciones o constantes
 * En un modulo solo puede existir un defualt
 */
export default class BitSet { }

/* La palabra clave export solo debe aparecer en el nivel superior de nuestro código JavaScript, es decir, no se puede utilizar export dentro
 * de una clase, dentro de un ciclo, dentro de una función
 * La palabra export puede entenderse como la palabra public en java
 * 
 * 
 * import:
 * La palabra clave import importa los elementos exportados de los modulos
 * Supongamos que los archivos bitset.js y stats.js existen en alguna ruta en la maquina
 */
import BitSet from './bitset.js'; // elementos exportados con default

import { mean, stdDev } from './stats.js';// importando varios elementos 

/**
 * Para tener en cuenta y evitar errores:
 * 1 - Las importaciones solo pueden aparecer en el nivel superior del modulo
 * 2 - Por convención las importaciones se colocan al inicio del modulo(Buena practica de programación)
 * 3 - Para la ruta del modulo se pueden usar comillas simples o dobles ("path", 'path')
 */
import * as stats from './stats.js';// importa todos los elementos de un modulo

stats.mean();// llamado a los elementos exportados en stats.js

/**
 * Import para los casos especiales en los que se tenga un export default y otras exportaciones
 * Suponiendo que el archvio bitset.js, tenga default y otros elementos exportados
 */
import BitSet, { otroElementoExportado, otroSegundoElementoExportado } from './bitset.js';

// suponiendo que se va a importar un archivo que no tiene exports
import './archivoSinExports.js';

// import renombrado: se utiliza cuando se tenga que importar dos moudlos con elementos exportados que tengan nombres iguales
import { mean, stdDev } from './stats.js';
import { mean as meanOther, stdDev2 } from './otherstats.js';

/**
 * Tener en cuenta con los exports
 * 1 - Expresiones, por ejemplo Math.cos as ..., no se permite dentro del export
 */

// renombrando elementos exportados con default
import {default as BitSet_v2} from "./bitset.js";

// renombado en los exports
export {
    PI_2 as NumeroPI,
    convertirGradosARadianes2 as convertir,
    Circle2 as Circulo
};

/**
 * Re-exports: Re-expotaciones
 * Unir dos archivos o modulos en uno solo
 * Re-export desde nuevo arvhivo stat.js
 */
import { mean } from "./stats/mean.js";
import { stdDev } from "./stats/stdDev.js";

export {mean, stdDev};

// Re-export desde los import
export { mean } from '/stats/mean.js';
export { stdDev } from '/stats/stdDev.js';

// Re-export de todos los elementos desde los import
export * from '/stats/mean.js';
export * from '/stats/stdDev.js';

// Importar modulos re-exportados, tambien se puede renombrar
import { mean as meanOtherName, stdDev } from './stat.js';

// re-exportar elemnentos default
export { default as mean } from './stats/mean.js';
export { default as stdDev } from './stats/stdDev.js';


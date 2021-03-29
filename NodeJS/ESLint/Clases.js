/**
 * Clases JavaScript: Es un conjunto de objetos que heredan propiedades del objeto prototipo
 * El objeto prototipo es la caracteristica central de una clase
 * 
 * Anteriormente se declaraban de la siguiente manera:
 */
function Range(from, to) {
    // esto funciona como un constructor que crea nuevos objetos
    this.from = from;
    this.to = to;
}

// Funciona para rangos textuales, de fecha y numerico
Range.prototype = {
    includes: function(x) {
        return this.from <= x && x <= this.to;
    },// Función generadora que hace iterables los rangos de nuestra clase
    [Symbol.iterator]: function * () {
        for(let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },
    toString: function() {
        return "(" + this.from + "... " + this.to + ")";
    }
};

let range = new Range(1, 10);
console.log(range.includes(3));
console.log(range.toString());
console.log([...range]);

// Uso actual de las clases en JS
class RangeCurrent {
    
    constructor(from, to) {
        this.from = from;
        this.to = to;       
    }

    includes(x) {
        return this.from <= x && x <= this.to;
    }

    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }

    toString() {
        return "(" + this.from + "... " + this.to + ")";
    }

}

let rangeCurrency = new RangeCurrent(1, 10);
console.log(rangeCurrency.includes(5));
console.log(rangeCurrency.toString());
console.log([...rangeCurrency]);

class Span extends RangeCurrent{
    
    constructor(start, length) {
        if(length >= 0) {
            super(start, start + length);
        }
        else {
            super( start + length, start);
        }
    }

}

let span1 = new Span(1, 10);
console.log(span1.includes(5));
console.log(span1.toString());

// Función como expresión
let square = function(x) {
    return x * x;
}
console.log(square(6));

// Clase como expresión
let Square = class {
    constructor(x) {
        this.area = x * x;
    }
}
console.log(new Square(5).area);

// Metodos estaticos
class Cuadrado {

    static text = 'Hola';

    static calcularCuadrado(num) {
        return num * num;
    }
}

console.log(Cuadrado.calcularCuadrado(4));
console.log(Cuadrado.text);
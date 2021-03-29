function  Libro1(nombre, nHojas) {
    this.nombre = nombre;
    this.nHojas = nHojas;
}

Libro1.prototype = {
    calcularValor: function(valorHoja, categoria) {
        let valor = 0;
        switch (categoria) {
            case 1:
                valor = valorHoja * this.nHojas + (valorHoja * this.nHojas * 0.1);
                break;
            case 2:
                valor = valorHoja * this.nHojas + (valorHoja * this.nHojas * 0.2);
                break;
            default:
                valor = valorHoja * this.nHojas + (valorHoja * this.nHojas * 0.3);
                break;
        }
        return valor;
    },
    toString: function() {
        return `${this.nombre} - # de Paginas ${this.nHojas * 2}`;
    }
}

let libro = new Libro1('La divina comedia', 300);
console.log(libro.calcularValor(200, 1));
console.log(libro.toString());


class Libro {

    constructor(nombre, nHojas) {
        this.nombre = nombre;
        this.nHojas = nHojas;
    }

    calcularValor(valorHoja, categoria) {
        let valor = 0;
        switch (categoria) {
            case 1:
                valor = valorHoja * this.nHojas + (valorHoja * this.nHojas * 0.1);
                break;
            case 2:
                valor = valorHoja * this.nHojas + (valorHoja * this.nHojas * 0.2);
                break;
            default:
                valor = valorHoja * this.nHojas + (valorHoja * this.nHojas * 0.3);
                break;
        }
        return valor;
    }

    toString() {
        return `${this.nombre} - # de Paginas ${this.nHojas * 2}`;
    }

}

let libro1 = new Libro('Doctor Sueño', 500);
console.log(libro1.calcularValor(450, 2));
console.log(libro1.toString());
class DivisionPorCero extends Error {

    constructor(description) {
        super(description);
    }

    get name() {
        return 'División por cero(0)';
    }

}

let error2 = new DivisionPorCero("No se puede dividor por cero");
console.log(error2.name);
console.log(error2.message);

class IndexOut extends Error {

    constructor(description) {
        super(description);
        this.description = description;
    }

    get name() {
        return 'Indice fuera de rango';
    }

}

let error3 = new IndexOut("Indice no encontrado");
console.log(error3.name);
console.log(error3.message);
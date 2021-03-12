/**
 * Ejemplo Time
 * Simulando registro de ingreso
 */
let hora  = '7:00:00 AM';
let empleados = new Map();
empleados.set("Juana de arco", []);
empleados.set("Cleopatra", []);
empleados.set("Alister Crowlley", []);

regTime("Juana de arco", 0, 1, 1);
regTime("Juana de arco", 0, 2, 2);
regTime("Juana de arco", 0, 0, 3);

regTime("Cleopatra", 0, 0, 1);
regTime("Cleopatra", 0, 0, 2);
regTime("Cleopatra", 0, 0, 3);

regTime("Alister Crowlley", 6, 0, 1);
regTime("Alister Crowlley", 30, 0, 2);
regTime("Alister Crowlley", 8, 0, 3);

function regTime(empleado, miniuto, segundo, dia) {
    empleados.get(empleado).push(new Date(2021, 2, dia, 7, miniuto, segundo));
}

empleados.forEach((key, value) => {
    console.log(`*** ${value}:`);
    let count = 0;
    for(let date of key) {
        if(hora !== date.toLocaleTimeString()) {
            console.log(`${date.getDay()}: Llego tarde`);
            count++;
        }
        else {
            console.log(`${date.getDay()}: A tiempo`);
        }
    }
    if (count >= 3) {
        console.log('Otra mas y sera despedido');
    }
    else if (count === 0) {
        console.log('Continue así');
    }
    else {
        console.log('Cuide sus horarios');
    }
    count = 0;
});
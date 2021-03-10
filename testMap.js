/*
 * Map para actividades para los dias del calendario
 */
let mes = new Map();
mes.set("marzo", new Map());
mes.get("marzo").set(1, 'Inducción Corporativa');
mes.get("marzo").set(2, 'Semillero Nodejs');
mes.get("marzo").set(9, 'No hacer nada');
mes.set("febrero", new Map());
mes.get("febrero").set(13, 'Buscar camello');
mes.get("febrero").set(25, 'Realizar pruebas técnicas');

// Listamos las tareas de marzo
lstActivities("marzo");

// Adicionar tarea a febrero
mes.get("febrero").set(28, "Enviar papeleria");
lstActivities("febrero");

// Eliminar actividades
mes.set("enero", new Map());
mes.get("enero").set(15, "Reunión con el jefe");
mes.get("enero").set(18, "Pelea con el jefe");
lstActivities("enero");
mes.get("enero").delete(18);
lstActivities("enero");
mes.delete("enero");// se eliminan las actividades de enero, no son buenas referencias ;)
console.log(mes.get("enero"));// confirmo "delete"

// Función para listar las actividades
function lstActivities(search) {
    for(let [key, value] of mes) {
        if(key === search) {
            for(let [keyD, valueD] of value) {
                console.log(`${keyD}: ${valueD}`);
            }
        }
    }
}
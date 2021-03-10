let persona = {
    nombre: 'Miguel',
    apellido: 'Blanco',
    hobbies: new Set()
}

persona.hobbies.add("Escuchar Musica");
persona.hobbies.add("Tocar Guitarra");
persona.hobbies.add("Leer");

console.log(persona);

persona.hobbies.add("Caminar");
persona.hobbies.add("Ver peliculas");

console.log(persona);

// Enumerar hobbies
let i = 1;
persona.hobbies.forEach(hobby => {
    console.log(`${i} - ${hobby}`);
    i++;
});

persona.hobbies.delete("Ver peliculas");
console.log(persona);
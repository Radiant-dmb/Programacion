const persona = {
    nombre: 'Daniel',
    edad: 24,
    correo: 'd.mateo@sapalomera.cat',
    subscripciones: {
        web: true,
        correo: true,
    },
    coloresFavoritos: ['Azul', 'Rojo'],
    saludo: function(){
        alert('Hola! Mi nombre es ' + persona.nombre)
    }
};
// persona.saludo();   
// console.log(persona.saludo())

// Se puede llamar a una propiedad de un objeto de distintas formas, la primera y la más normal es esta:
console.log(persona.nombre);
// La segunda, es esta:
console.log(persona['edad']);

const varCorreo = 'correo';
console.log(persona[varCorreo]);

// Se puede añadir una nueva propiedad a un objeto de la siguiente manera, aunque no esté creado desde un principio.
persona.pais = 'Mexico';
persona.pais = 'España';

console.log(persona);
persona.saludo();
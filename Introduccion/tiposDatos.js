// cadenas de texto
// para definir una cadena de texto en una variable, tiene que comenzar y acabar con ' o con ".
// si queremos añadir comillas dentro de la variable misma, podemos empezar con ' y dentro añadir " o vicebersa, de la siguiente manera.

/*
let frase1 = 'Mi nombre es "Daniel"';
let frase2 = "Mi nombre es 'Daniel";
*/

// Esta no es la unica manera de añadir comillas dentro de una variable, también se puede hacer así:
// let frase3 = "Mi nombre es \"Daniel\"";

// Numeros
// Podemos tener numeros positivos y negativos

/*
let numero = 3;
let numeroNeg = -3;
*/

// Arrays - Listas. Van marcados con []

/*
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
*/

// Si queremos acceder a un elemento concreto de la lista, podemos hacerlo llamando a la variable de la lista seguido de la posicion en la que está 
// el elemento dentro de un corchete, tal que así:
// console.log(numeros[0]); //Esto devuelve el número 1, que es el que está en la posición 0 de la lista.

// En los Arrays, se pueden guardar distintos tipos de datos a la vez.
//let lista = [1, 'Hola', true, {Nombre: 'Daniel'}, [1,2,3]];

// para acceder al valor de una clave de un objeto dentro de una lista, lo podemos hacer así:
//console.log(lista[3].Nombre);

// Para acceder a los valores concretos de una lista dentro de otra lista, podemos hacerlo así
//console.log(lista[4][0]);

// Objetos
// Podemos tener distintos tipos de datos dentro de un objeto, también podemos añadir listas
// y otros objetos dentro del objeto.

/*let ficha = {
    Nombre: 'Daniel',
    edad: 24,
    carné: false,
    hobbies: ['videojuegos', 'lectura'],
    Libros: {
        Autor: 'Brandon Sanderson',
        Titulo: 'Mistborn'
    }
};
*/

//Para acceder a los distintos datos dentro de un objeto, lo podemos llamar así:
// console.log(ficha.Nombre,ficha.hobbies[1],ficha.Libros.Titulo);

// Funciones. Primero se declara y luego se llama.
/*
function hola() {
    console.log('Hola')
}

hola();
*/
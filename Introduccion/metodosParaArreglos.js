const colores = ['verde', 'rojo', 'azul'];

//console.log(colores);

/* 
	📌 .length 
	(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/

// console.log(colores.length);

/*
	📌 .toString() 
	Nos permite transformar un arreglo a una cadena de texto.
	Por ejemplo para poder mostrarlo en el navegador.
*/

// document.body.innerHTML = colores.toString();

/*
	📌 .join()
	Nos permite transformar un arreglo a una cadena de texto y separar cada elemento. 
*/

// document.body.innerHTML = colores.join('/');

/*
	📌 .sort()
	Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica. NO SOLO LO ORDENA EN EL MOMENTO DE LLAMAR A LA FUNCION. SI NO QUE LO DEJA ORDENADO DE FORMA PERMANENTE.
*/

/*
document.body.innerHTML = colores.sort().join(' / ')

const letras = ['c', 'b', 'd', 'a'];
console.log(letras.sort());

const numeros = [3, 2, 4, 1];
console.log(numeros.sort());
*/

/*
	📌 .reverse()
	Nos permite ordenar un arreglo de forma descendente. 
*/

// const letras = ['c', 'b', 'd', 'a'];
// console.log(letras.reverse());

/*
	📌 .concat()
	Nos permite juntar dos arreglos en uno solo. 
*/

/*
const arreglo1 = [1, 2, 3];
const arreglo2 = ['A', 'B', 'C'];
const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3)
*/

/* 
	📌 .push()
	Nos permite agregar un elemento al final de un arreglo.
*/

 colores.push('Amarillo');
 console.log(colores);
 console.log(colores.sort());
 console.log(colores);

/*
	📌 .pop()
	Nos permite eliminar el ultimo elemento de un arrreglo. 
*/

colores.pop();
console.log(colores); //Como hemos hecho un sort antes y se ha "sobreescrito" la lista, en vez de borrarse el amarillo, se borra el verde por pasar al ultimo de la lista con sort().

/* 
	📌 .shift()
	Elimina el primer elemento de un arreglo y recorre los elementos.
*/
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
// const diaEliminado = dias.shift();
// console.log(diaEliminado);
console.log(dias[0]);

/*
	📌 .unshift()
	Agrega un elemento al inicio del arreglo y empuja los elementos.
*/
dias.unshift('Carlos');
console.log(dias);

/* 
	📌 .splice()
	Nos permite insertar elementos a un arreglo donde le especifiquemos.
	- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
	- 2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada.
	- Resto de parametros - Los elementos a insertar.
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.splice(0, 0, 'Rafael', 'Roberto');
console.log(amigos);
amigos.splice(3, 0, 'Daniel', 'Andrea');
console.log(amigos);

/* 📌 .slice()
	Nos permite copiar una parte de un arreglo a otro.
	- 1er parametro - Posición desde donde queremos copiar.
	- 2do parametro - Hasta antes de que elemento copiar.
*/
const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas);
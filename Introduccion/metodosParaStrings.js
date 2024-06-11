/*
	📌 .length - Devuelve el número de caracteres de una cadena de texto.
*/
// const texto = 'Hola yo soy Carlos!';
// console.log(texto.length);

/*
	📌 .indexOf() .lastIndexOf() - Devuelve el index del primer/último caracter especificado.
    O lo que es lo mismo, la primera posicion desde el comienzo o el final (segun el método) en la que se encuentra el carácter especificado.
*/
// const texto = 'Hola yo soy Carlos!';
// console.log(texto.indexOf('o'));
// console.log(texto.lastIndexOf('o'));

/*
	📌 .slice() - Devuelve un fragmento de una cadena de texto.
	1er parametro - index desde donde queremos cortar
	2do parametro (opcional) - index hasta donde queremos cortar
*/
// const texto = 'Hola yo soy Carlos!';
// const index = texto.indexOf('s');
// const lastIndex = texto.lastIndexOf('s');
// console.log(texto.slice(index, lastIndex + 1));
// console.log(texto.slice(12, 18));
// console.log(texto.slice(-7, -1));
// console.log(texto);

/*
	📌 .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/

 const texto = 'albion online es un mmorpg no lineal en el que escribes tu propia historia sin limitarte a seguir un camino prefijado, explora un amplio mundo abierto con cinco biomas unicos, todo cuanto hagas tendra su repercusíon en el mundo, con su economia orientada al jugador de albion los jugadores crean practicamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quien eres, cambia de arma y armadura para pasar de caballero a mago o juego como una mezcla de ambas clases, aventurate en el mundo abierto y haz frente a los habitantes y las criaturas de albion, inicia expediciones o adentrate en mazmorras en las que encontraras enemigos aun mas dificiles, enfrentate a otros jugadores en encuentros en el mundo abierto, lucha por los territorios o por ciudades enteras en batallas tacticas, relajate en tu isla privada donde podras construir un hogar, cultivar cosechas, criar animales, unete a un gremio, todo es mejor cuando se trabaja en grupo [musica] adentrate ya en el mundo de albion y escribe tu propia historia.';
 console.log(texto.replace('albion', 'Tarisland')); 
 // SOLO CAMBIA EL PRIMER ALBION QUE ENCUENTRA! TIMO - PARA REEMPLAZAR TODAS LAS ENTRADAS, HAY QUE AÑADIR / /g en el primer parámetro para indicarle que lo queremos de forma global, aplicado a todas las entradas.
 console.log(texto.replace(/albion/g,'Tarisland'));

 /*
	📌 .split() - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.

	1er parametro - el caracter que funcionara como separador.
*/

// const texto = 'Hola yo soy Carlos!';
// console.log(texto.split(' '));

/*
	📌 .toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/

// console.log(texto.toUpperCase());
// console.log(texto.toLowerCase());

/*
	📌 Métodos para eliminar espaciados:
	.trim() - Devuelve una cadena de texto (String)	
	que elimina los espacios en blanco al inicio y final de una cadena de texto.

	.trimStart() - Igual que .trim() pero solo elimina espacios del inicio.
	.trimEnd() - Igual que .trim() pero solo elimina espacios del final.
*/
const texto = '     Hola yo soy Carlos!    ';
console.log(texto);
console.log(texto.trim());
console.log(texto.trimStart());
console.log(texto.trimEnd());
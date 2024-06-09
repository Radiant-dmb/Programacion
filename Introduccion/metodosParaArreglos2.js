/* 📌 .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
*/
const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
// console.log(nombres.indexOf('Sergio'));

/* 
	📌 .lastIndexOf() 
	Obtenemos el último index de un elemento.
*/
// console.log(nombres.lastIndexOf('Rafael'));

/* 	
	📌 .forEach()
	Nos permite ejecutar una funcion por cada elemento
*/

// nombres.sort().forEach( (nombre, index) => {
//     console.log(`Hola ${nombre} (${index})`);
// })
    
/* 
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/

// const resultado = nombres.find((nombre) => {
// 	if (nombre[0] === 'E') {
// 		return nombre;
// 	}
// });
// console.log(resultado);

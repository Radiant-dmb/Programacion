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

/* 
	📌 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/

//  const nombresMayus = nombres.map( (nombre) => {
//  	return nombre.toUpperCase();
//  });
//  
//  const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
//  
// const nombresMayusConR = nombres.map((nombre) => {
// 	if (nombre[0] === 'R'){
// 		return nombre.toUpperCase();
// 	}
// })
// 
// nombresMayusConR.forEach((nombre) => nombre != undefined ? console.log(nombre) : '');

/* 📌 .filter()
	Nos permite ejecutar una función por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
	La diferencia entre .map y .filter es que .map te crea una lista nueva con el resultado de la funcion aplicada a cada elemento y .filter se usa para crear una lista nueva
	con los elementos que cumplan el criterio de la función indicada. (con .map, si no cumple el requisito, igual te lo añade a la lista como undefined.)
*/

const nombresConR = nombres.filter((nombre) => nombre[0] == 'R' ? console.log(nombre) : '');
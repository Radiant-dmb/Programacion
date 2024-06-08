/* Existen varios tipos de variable 
   Var sería como una variable global que afecta a todo el código.
   Let es una variable de bloque que se puede modificar.
   Const es una variable de bloque que NO se puede modificar. Tiene un valor fijo
*/

// Se puede concatenar cadenas de texto de la siguiente forma
/* const nombre = "Dani";
const apellido = "Mateo";
const nombreCompleto = nombre + apellido;

console.log(nombreCompleto)
*/

// También se puede hacer una operación directamente dentro de la variable
/* 
const suma = 4 + 4;

console.log(suma)
*/

// A diferencia de otros lenguajes, en JS puedes definir una variable con un tipo de dato, y luego sobreescribirla con otro tipo de dato completamente distinto.
// Esto es posible:
let variable1 = 'hola';
variable1 = 13;

//Acabamos de modificar una variable con cadena de texto por un valor numérico. Si no recuerdo mal, en Python había que utilizar una función para convertir el tipo de dato a otro.
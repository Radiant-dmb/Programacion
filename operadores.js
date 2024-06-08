/* Tipos de operadores
    = Asignacion -> define variables
    + suma 
    - resta
    * multiplicacion
    / division
    % modulo
    ++ aumento
    -- Disminución
*/

/* IMPORTANTE DANI QUE NOS CONOCEMOS. DIFERENCIAS ENTRE MODULO Y DIVISION:
 SI DIVIDIMOS 3/3, DA 1, SI DIVIDIMOS 3/9, DA 3, PERO SI DIVIDIMOS 3/10 O 3/11, SIGUE DANDO 3.
 CON EL MÓDULO %, LO QUE NOS DEVUELVE ES LO QUE SOBRA DE LA DIVISION. ES DECIR,
 SI HACEMOS 3%10 NOS DARÁ 1, Y SI HACEMOS 3%11 NOS DARÁ 2

 ++ o -- nos facilita trabajo cuando hacemos cuentas atras o cuentas en general.
 por ejemplo, si hacemos :
 let numero = 1;
 numero = numero + 1; es lo mismo que hacer numero++
 lo mismo pasa con --
 
 */

 /*📌 Operadores de Asignación
	+=	Suma un numero al valor de una variable. numero = numero + 5; es lo mismo que numero += 5;
	-=	Resta un numero al valor de una variable.
	*=	Resta un numero al valor de una variable.
	/=	Resta un numero al valor de una variable.
	%=	Obtiene el sobrante de una division y lo asigna a la variable.
*/

/* 📌 Operadores de Comparación:
Nos permiten comparar valores
	==		Igual que
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en typo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario
*/

// const resultado = 5 > 1; // true
// const resultado = 20 <= 20; // true
// const resultado = 10 == 10; // True (Solo compara el valor)
// const resultado = 10 === '10'; // false (compara si el valor es igual y si el tipo es igual)
const resultado = 7 > 10 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero';
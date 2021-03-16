/**
 * Comparations
 *
 */

// Mayor/menor que: a > b, a < b.
// Mayor/menor o igual que: a >= b, a <= b.
// Igual: a == b (ten en cuenta el doble signo ==. Un solo símbolo a = b significaría una asignación).
// Distinto. En matemáticas la notación es ≠, pero en JavaScript se escribe como una asignación con un signo de exclamación delante: a != b.

// Una comparación retorna un valor. En este caso, el valor es un booleano.

// console.log(2 > 5)
// console.log(2 > 1); // true (correcto)
// console.log(2 == 1); // false (incorrecto)
// console.log(2 != 1); // true (correcto)

// Comparacion en cadena
// Para ver si una cadena es “mayor” que otra, JavaScript utiliza el llamado orden “diccionario” u “lexicográfico”.
// En otras palabras, las cadenas se comparan letra por letra.

// console.log('Z' > 'A')
// console.log('river' > 'boca')
// console.log('gol' > 'penal')

// Comparación de diferentes tipos
// console.log('2' > 1); // true, la cadena '2' se convierte en el número 2
// console.log(2 > '1'); // true, la cadena '2' se convierte en el número 2
// console.log('01' == 1); // true, la cadena '01' se convierte en el número 1

// NaN es un valor numérico especial que retorna falso para todas las comparaciones.

/**
 * Igualdad estricta
 *
 */

console.log(2 == 2);
console.log(2 == 1);
console.log(2 === '2');
console.log(2 == '2');

// https://www.sitepoint.com/javascript-truthy-falsy/
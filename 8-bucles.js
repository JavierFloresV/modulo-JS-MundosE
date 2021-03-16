/**
 * Bucles while and for
 *
 */


// while 
// Mientras que la condition (condición) sea true, el código del cuerpo del bucle será ejecutado.

// while (condition) {
//   // código
//   // llamado "cuerpo del bucle"
// }

// let index = 3;

// while (index < 9) {
//     console.log(index);
//     index++;
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// break and continue

for (let i = 0; i < 10; i++) {
    // si es verdadero, saltar el resto del cuerpo
    if (i % 2 == 0) continue;
    if (i === 10) break
    console.log(i)
}
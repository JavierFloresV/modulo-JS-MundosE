/**
 * Condicionales
 *
 */

// La sentencia if(...) evalúa la condición en los paréntesis, y convierte el resultado en booleano si el resultado es true ejecuta un bloque de código.

// const age = 31

// if (age > 18) { console.log('Eres mayor de edad') } else if (age < 18) { console.log('Eres menor de edad') } else { console.log('TIenes 18 años !!') }

// El número 0, un string vacio "", null, undefined, y NaN se convierte en false. Por esto son llamados valores “falso”.
// El resto de los valores se convierten en true, entonces los llamaremos valores “verdadero”.

let myTeam = 'river'

if (myTeam == 'river') {
    console.log('dale river')
} else {
    console.log('salí de acá')
}

const newAge = 73
if (newAge > 30) {
    console.log('estás viejete')
} else if (newAge < 30) {
    console.log('Dale')
} else {
    console.log('tas en el horno')
}
// condition ? condition2 ? condition 3 ? true 1 : true 2 : true 3 : false 1 : false 2 : false 3

newAge > 18 ? console.log('sos mayor de edad') : console.log('sos menor de edad')
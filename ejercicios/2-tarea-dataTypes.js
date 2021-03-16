/*************************************
 *
 *             Ejercicios
 *
 **************************************/

/*

console.log(`
  Strings:
  1. Crear 3 variables cada una debe tener un dato especifico (name, age, nationality)
  2. Escribir 1 console.log armando la siguiente frase "Hola me llamo ..., el doble de mi edad es ... y soy ..."
  Boolean:
  1. Crear 1 variable con el siguiente resultado, tu edad es mayor a 90 ?
  Null and Undefined
  1. Crear 2 variables cada una deberia tener un dato especifico (name, age)
  2. Escribir un console.log con el siguiente resultado "Hola me llamo null y tengo undefined años"
`)
*/

let Name = 'Javier',
    Age = '32',
    Nationality = 'salvadoreño'
console.log(`Hola me llamo ${Name}, tengo ${Age} años. El doble de mi edad es ${2*Age} y soy de nacionalidad ${Nationality}`)

console.log(`es mi edad mayor a 90?`)
console.log(Age > 90)

let myNewAge,
    myAnotherName = null
console.log(`Hola me llamo ${myAnotherName} y tengo ${myNewAge} años`)
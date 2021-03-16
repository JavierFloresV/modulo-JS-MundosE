 /*************************************
  *
  *             Ejercicios
  *
  **************************************/

 // console.log(`
 //   Usa el bucle for para mostrar usando console.log números pares del 2 al 10 inclusive.
 //   Remplazar este while por for (la salida debe ser la misma)
 // `)

 //  let i = 0;
 //  while (i < 3) {
 //      console.log(`numero ${i}!`);
 //      i++;
 //  }

 // RESULTADOS

 // números pares del 2-10

 for (let i = 2; i <= 10; i++) {
     if (i % 2) continue;
     console.log(i)
 }

 // reemplazar while por for
 //  let i = 0;
 //  while (i < 3) {
 //      console.log(`numero ${i}!`);
 //      i++;
 //  }

 for (let u = 0; u < 3; u++) {
     console.log(`número ${u}!`)
 }
/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
  for (let i = 1; i <= 20; i++) {
    console.log(i)
  }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
  let i = 0
  let suma = 0
  while (i < 100) {
    suma += i
    if (i % 10 === 0) {
      console.log(`${i} es multiplo de 10 y el valor de suma es: ${suma}`)
    }
    i++
  }
  console.log(`El resultado final es ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
  for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
  let nombres = ["cristian", "juan", "pedro", "maria", "ana", "bruno", "mateo"]
  for (let i = 0; i < nombres.length; i++) {
    let myString = nombres[i].toString()
    console.log(myString)
  }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
  let miString = "Hola Mundo"
  let miArray = miString.toLowerCase().split("")
  let misVocales = ["a", "e", "i", "o", "u"]
  let miSet = miString.split("")
  let miContador = 0
  
  for (let i = 0; i < miSet.length; i++) {
    if (misVocales.includes(miSet[i])) {
      miContador++
    }
  }
  console.log(`El número de vocales es: ${miContador}`)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
  let myArray = [2,3,5,86,8,4,72,2,3]
  let resultado = 1
  for (let i = 0; i < myArray.length; i++){
    console.log(typeof myArray[i] )
    resultado *= myArray[i]
  }

  console.log(`El resultado es: ${resultado}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
  let miNumero = 5
  for (let i = 1; i <= 10; i++){
    console.log(`${miNumero} x ${i} = ${miNumero * i}`)
  }

// 8. Usa un bucle para invertir una cadena de texto
  let miCadena = "Hola Mundo!!!$"
  let miCadenaInvertida = ""
  for (let i = miCadena.length - 1; i >= 0; i--){
    miCadenaInvertida += miCadena[i]
  }
  console.log(miCadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
  let miFibonacci = [0, 1]
  for (let i = 2; i < 10; i++){
    miFibonacci.push(miFibonacci[i - 1] + miFibonacci[i - 2])
  }
  console.log(miFibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
  let miNuevoArray = []
  for (let i = 0; i < miFibonacci.length; i++){
    if (miFibonacci[i] > 10) {
      miNuevoArray.push(miFibonacci[i])
    }
  }
  console.log(miNuevoArray)

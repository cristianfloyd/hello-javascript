/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
  function suma(numero1, numero2){
    return numero1 + (numero2)
  }

  console.log(suma(5,6))
  const suma2 =  (numero1, numero2) => numero1 + numero2
  console.log(  suma2(5,6))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
  let miArrayNumeros = [1,2,3,4,5,6,7,8,9,10,20,2,55,56]
  function mayor(arrayNumeros){
    let numeroMayor = arrayNumeros[0]
    for(let i = 1; i < arrayNumeros.length; i++) {
        if(arrayNumeros[i] > numeroMayor) {
            numeroMayor = arrayNumeros[i]
        }
    }
    return numeroMayor  
  }
  console.log(mayor(miArrayNumeros))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
  function contarVocales(str) {
      const vocales = "aeiouAEIOU"
      let contador = 0
      for (let i = 0; i < str.length; i++) {
          if (vocales.includes(str[i])) {
              contador++
          }
      }
      return contador
  }
  console.log(contarVocales("Hola Mundo"))


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
  function mayusculas(arrayStrings) {
      return arrayStrings.map(str => str.toUpperCase())
  }
  console.log(mayusculas(["hola", "mundo"]))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
  function esPrimo(numero) {
    if (numero <= 1) {
        return false
    }
    for (let i = 2; i < numero; i++) { // si el modulo de numero/i es igual a 0, entonces no es primo
        if (numero % i === 0) {         // se itera "i" hasta que i sea igual a numero
            return false
        }
    }
    return true
  }
  console.log(esPrimo(23))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
  function elementosComunes(array1, array2) {
      return array1.filter(elemento => array2.includes(elemento))
  }
  console.log(elementosComunes([1,2,3,4,5], [3,4,5,6,7]))

  const interseccion = (array1, array2) => array1.filter(elemento => array2.includes(elemento))
  console.log(interseccion([1,2,3,4,5], [3,"5",6,7]))


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
  let miArrayNumeros2 = [1,2,3,4,5,6,7,8,9,10,20,2,55,56]
  function sumaPares(arrayNumeros) {
    let suma  = 0
    for (let i = 0;i < arrayNumeros.length; i++){
      if(arrayNumeros[i] % 2 === 0) {
        suma += arrayNumeros[i]
      }
    }
    return suma
  }
  console.log(sumaPares(miArrayNumeros2))


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
  function cuadrado(arrayNumeros) {
    return arrayNumeros.map(elemento => elemento ** 2)
  }
  console.log(miArrayNumeros2)
  console.log(cuadrado(miArrayNumeros2))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
  function inverso(cadena){
    let max = cadena.length
    let inverso = ""
    for (let i = max - 1; i >= 0; i--) {
      inverso += cadena[i]
    }
    return inverso
  }
  console.log(inverso("Hola Mundo"))


// 10. Crea una función que calcule el factorial de un número dado
  function factorial(numero) {
    let i = 1
    let factorial = 1
    while (i<=numero) {
      factorial *= i
      i++
    }
    return factorial
  }
  console.log(factorial(5))
  

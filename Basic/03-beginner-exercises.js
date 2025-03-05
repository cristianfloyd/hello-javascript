/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
  // Este es un comentario de una linea
// 2. Escribe un comentario en varias líneas
  /*
  Este es un comentario 
  de varias lineas
  */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
  let nombre = "cristianfloyd";
  let age = 47
  let height = 1.75
  let isStudent = true
  let nothing = null
  let undefindedStudent
  let mySimbol = Symbol('arca')
  let numeroGrande = 123164646879789316464121313n

// 4. Imprime por consola el valor de todas las variables
  console.log(nombre)
  console.log(age)
  console.log(height)
  console.log(isStudent)
  console.log(nothing)
  console.log(undefindedStudent)
  console.log(mySimbol)
  console.log(numeroGrande)

// 5. Imprime por consola el tipo de todas las variables
  console.log(typeof nombre)
  console.log(typeof age)
  console.log(typeof height)
  console.log(typeof isStudent)
  console.log(typeof nothing)
  console.log(typeof undefindedStudent)
  console.log(typeof mySimbol)
  console.log(typeof numeroGrande)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
  nombre = 'arca'
  age = 37
  height = 1.65
  isStudent = false
  nothing = null
  undefindedStudent = undefined
  console.log(undefindedStudent, typeof undefindedStudent)
  mySimbol = Symbol('cristianfloyd')
  numeroGrande = BigInt(100)
  console.log(numeroGrande, typeof numeroGrande)


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
  nombre = BigInt(1234)
  console.log(nombre, typeof nombre)
  age = BigInt(100)
  console.log(typeof height,typeof (height = 'alto'))
  isStudent = 'estudiante'
  nothing = 'nada'
  undefindedStudent = 'indefinido'
  mySimbol = 22
  numeroGrande = 'grande'

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
  const NOMBRE = "cristianfloyd"
  const AGE = 47
  const HEIGHT = 1.75
  const IS_STUDENT = true
  const NOTHING = null
  const UNDEFINDED_STUDENT = undefined
  const MY_SIMBOL = Symbol('arca')
  const NUMERO_GRANDE = BigInt(1234567890)


// 9. A continuación, modifica los valores de las constantes
  // Los valores de las constantes no se pueden modificar en el programa

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
  // const MY_SIMBOL = BigInt()
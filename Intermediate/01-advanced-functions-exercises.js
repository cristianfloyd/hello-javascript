/*
Clase 1 - Funciones avanzadas (29/01/2025)
Vídeo: https://www.twitch.tv/videos/2367024319?t=00h08m45s
*/

// 1. Crea una función que retorne a otra función
function saludo(nombre) {
  console.log(`Hola ${nombre}`)
}

function saludar(nombre) {
  return saludo(nombre)
}

saludar('Juan')

// 2. Implementa una función currificada que multiplique 3 números
function multiplicar(a) {
  return function (b) {
    return function (c) {
      return a * b * c
    }
  }
}

console.log(multiplicar(2)(3)(4))
const multiplicarPorDos = multiplicar(2)
const multiplicarPorTres = multiplicarPorDos(3)
const multiplicarPorCuatro = multiplicarPorTres(4)
console.log(multiplicarPorCuatro)

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(base, exponente){
  if (exponente === 0){
    return 1
  }
  return base * potencia(base, exponente - 1)
}

let exponente = 16
let base = 2
console.log(`potencia(${base}, ${exponente}) = ${potencia(base, exponente)}`)



// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(valorInicial) {
  let valor = valorInicial
  return {
    increment: function() {
      valor++
    },
    decrement: function() {
      valor--
    },
    getValue: function() {
      return valor
    }
  }
}
const counter = createCounter(10)
console.log(`Valor inicial: ${counter.getValue()}`)
counter.increment()
console.log(`Valor después de incrementar: ${counter.getValue()}`)
counter.decrement()
counter.decrement()
console.log(`Valor después de decrementar: ${counter.getValue()}`)

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
const suma = function sum(...numbers) {
  let result = 0
  for (let number of numbers) {
      result += number
  }
  return result
}

function sumManyTimes(multiplier, ...numbers) {
  return suma(...numbers) * multiplier
}
console.log(sumManyTimes(10, 1, 2, 3, 4))



// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sumaCallback(callback, ...numbers) {
  return callback(...numbers)
}

console.log(`El resultado de la suma es: ${sumaCallback(suma, 1, 2, 3, 4, 5)}`)
//--------------------------------
function sumaCallback2(callback, ...numbers) {
  let resultado = 0
  resultado = suma(...numbers)
  callback(resultado)
}

const imprimir = function (resultado) {
  console.log(`El resultado de la suma es: ${resultado}`)
}
sumaCallback2(imprimir, 1, 2, 3, 4, 5,6,8,7,9,10)





// 7. Desarrolla una función parcial
function parcial(a) {
  return function (b) {
    return a + b
  }
}

const sumaParcial = parcial(10)
console.log(sumaParcial(25))

function mother(a){
  return function(b){
    return function(c){
      return a + b + c
    }
  }
}

const procesador = mother(100)
const memoria = procesador(200)
console.log(`El valor del combo es: ${memoria(32)}`)






// 8. Implementa un ejemplo que haga uso de Spread






// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico
/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function errorConsole() {
  console.error("Este es un error");
}
errorConsole()

// 2. Crea una función que utilice warn correctamente
function warnConsole() {
  console.warn("Este es un warning");
}
warnConsole()

function divisionEntera(numero1, numero2) {
  let data = numero1 / numero2
  if(!Number.isInteger(data)) {
    console.warn("La división no es entera")
    return data
  }
  return data
}
console.log(divisionEntera(5, 2))

// 3. Crea una función que utilice info correctamente
function infoConsole() {
  console.info("Este es un info");
}
infoConsole()

// 4. Utiliza table
let myObjectList = {
  "Frutas": ["Manzana", "Pera", "Naranja"],
  "Verduras": ["Lechuga", "Tomate", "Zanahoria"],
  "Productos": ["Leche", "Huevos", "Pan"]
}
console.table(myObjectList)

// 5. Utiliza group
console.group("Frutas")
console.log("Manzana")
console.log("Pera")
console.log("Naranja")
console.groupEnd()

// 6. Utiliza time
console.time("Tiempo de ejecución")
for (let i = 0; i < 100000000; i++) {}
console.timeEnd("Tiempo de ejecución")

// 7. Valida con assert si un número es positivo
function suma(numero1, numero2) {
  let data = numero1 + numero2
  console.assert(data > 0, {numero1, numero2, data})
  return data
}
console.log(suma(5, -12))

// 8. Utiliza count
function contar(numero1, numero2) {
  let data = numero1 ** numero2
  for (let i = 0; i < data; i++) {
    console.count("Contador")
  }
}
contar(10,2)

// 9. Utiliza trace
function traceConsole() {
  console.trace("Este es un trace")
}
function logConsole() {
  console.log(traceConsole())
}
console.log(typeof logConsole())

// 10. Utiliza clear
console.clear()

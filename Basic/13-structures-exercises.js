/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
  let myArray = ['perro', 'gato', 'pájaro', 'pez', 'conejo']

// 2. Añade dos más. Uno al principio y otro al final
  myArray.unshift("tigre")
  myArray.push("serpiente")
  console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición
  myArray.splice(2, 1)
  console.log(myArray)

// 4. Crea un set que almacene cinco libros
  let mySet = new Set([
    "El señor de los anillos",
    "El código da vinci",
    "Harry Potter",
    "El principito",
    "1984",
  ])
  console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
  mySet.add("git and github")
  mySet.add("1984")
  console.log(mySet)
  
// 6. Elimina uno concreto a tu elección
  mySet.delete("El principito")
  console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
  let myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
  ])
  console.log(myMap)



// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
  let nro = 5
  if (myMap.has(nro)) {
    console.log(`El mes numero ${nro} es ${myMap.get(nro)}`)  
  }

// 9. Añade al mapa una clave con un array que almacene los meses de verano
  myMap.set("verano", ["Diciembre", "Enero", "Febrero"])
  console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
  let miArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  let miSet = new Set(miArray)
  miSet.forEach((value) => console.log(value))
  let miMap = new Map([])
  console.log(miMap)

  miSet.forEach(value => (miMap.set(value, value)))
  console.log(miMap)
  miMap.set("set", miSet)
  console.log(miMap)
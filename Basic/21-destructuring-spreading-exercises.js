/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
  let myArray = ["Cristian", "bruno", "mateo", "color",]
  let [value1, value2] = myArray
  console.log(value1, value2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
  let [value3, value4, value5, value6, value7 = 0] = myArray
  console.log(value3, value4, value5, value6, value7)

// 3. Usa desestructuración para extraer dos propiedades de un objeto}  
  let myObject = {
    tipo: "notebook",
    marca: "HP",
    modelo: "Pavilion",
    color: "negro",
    precio: 500,
    caracteristicas: {
      procesador: "i5",
      memoria: "8GB",
      disco: "1TB",
    }
  }
  let {tipo, marca} = myObject
  console.log(`tipo: ${tipo}`,`marca: ${marca}`)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
  let {tipo: equipo, marca: fabricante} = myObject
  console.log(`equipo: ${equipo}`,`fabricante: ${fabricante}`)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
  let {caracteristicas: {procesador, memoria}} = myObject
  console.log(`procesador: ${procesador}`,`memoria: ${memoria}`)

// 6. Usa propagación para combinar dos arrays en uno nuevo
  let myArray2 = ["azul", "rojo", "verde", "amarillo"]
  let myArray3 = [...myArray, ...myArray2]
  console.log(myArray3)

// 7. Usa propagación para crear una copia de un array
  let myArray4 = [...myArray3]
  console.log(myArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
  let myObject2 = {
    nombre: "cristian",
    apellido: "floyd",
    estado: "propietario",
    edad: 25
  }
  let miObjetoNuevo = {...myObject, ...myObject2}
  console.log(miObjetoNuevo)

// 9. Usa propagación para crear una copia de un objeto
  let miObjeto = {...miObjetoNuevo}
  console.log(miObjeto)


// 10. Combina desestructuración y propagación

  let miObj = {...myObject2, ...{caracteristicas: {...myObject.caracteristicas}}}
  console.log("desestructuracion y propagacion combinados")
  console.log(miObj)
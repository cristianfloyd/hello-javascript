/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
  let miObjeto = {
    nombre: "Cristian",
    apellido: "Floyd",
    edad: 47,
  }

// 2. Accede y muestra su valor
  console.log(miObjeto.nombre)
  console.log(miObjeto.apellido)
  console.log(miObjeto.edad)


// 3. Agrega una nueva propiedad
  miObjeto.profesion = "Desarrollador"
  console.log(miObjeto)

// 4. Elimina una de las 3 primeras propiedades
  delete miObjeto.edad
  console.log(miObjeto)
  console.log(typeof miObjeto)

// 5. Agrega una función e invócala
  miObjeto.tarea = function() {
    console.log("Estoy trabajando")
  }
  miObjeto.tarea()

  
// 6. Itera las propiedades del objeto
  for (let propiedad in miObjeto) {
    console.log(miObjeto[propiedad])
  }

// 7. Crea un objeto anidado
  let miObjeto2 = {
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
  console.log(miObjeto2)
  
  // 8. Accede y muestra el valor de las propiedades anidadas
  console.log(`procesador: ${miObjeto2.caracteristicas.procesador}`)
  console.log(`memoria: ${miObjeto2.caracteristicas.memoria}`)
  console.log(`disco: ${miObjeto2.caracteristicas.disco}`)
  
  

// 9. Comprueba si los dos objetos creados son iguales
  console.log(miObjeto === miObjeto2)


// 10. Comprueba si dos propiedades diferentes son iguales
  console.log(miObjeto.nombre === miObjeto2.tipo)
  

/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

class Computer {
  constructor(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
  }
}
let myComputer = new Computer("HP", "Pavilion")
// 1. Captura una excepción utilizando try-catch

  try {
    console.log(myComputer.nombre())
  } catch {
    console.log("se ha producido un error")
  }

// 2. Captura una excepción utilizando try-catch y finally
  try {
    console.log(myComputer.nombre())
  } catch (error) {
    console.log("se ha producido un error:" , error.message)
  } finally {
    console.log(myComputer.modelo)
  }

// 3. Lanza una excepción genérica
  myComputer.nombre = function(value) {
    if (typeof value == "string") {
      return value
    } else {
      throw new Error("Solo se soportan caracteres para el nombre")
    }
  }
  // console.log(myComputer.nombre(2))

// 4. Crea una excepción personalizada
class ErrorNombre extends Error {
  constructor(message, value) {
    super(message)
    this.value = value
  }

  pritValue(value){
    console.log("Valor ingresado:", value)
  }
}

// 5. Lanza una excepción personalizada
  myComputer.nombre2 = function(value) {
    if (!value) {
      return
    } else if (!(typeof value == "string")) {
      throw new ErrorNombre("El valor no es un sring", value)
    }
    return value
  }


  try {
    console.log(typeof 44)
    console.log(myComputer.nombre2(44))
  } catch (error) {
    if (error instanceof ErrorNombre) {
      error.pritValue
    } 
    else {
      console.log("Error generico", error)
    }
  }

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
  let myName = "Cristian"
  let lastName = "Floyd"
  let fullName = myName + " " + lastName
  console.log(fullName)

// 2. Muestra la longitud de una cadena de texto
  console.log(fullName.length)

// 3. Muestra el primer y último carácter de un string
  console.log(fullName[0])
  console.log(fullName[fullName.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string
  console.log(fullName.toUpperCase())
  console.log(fullName.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
  let multiLine = `Hola
  Mi nombre es:
    ${fullName}`

  console.log(multiLine)
// 6. Interpola el valor de una variable en un string
  let myInterpolate = `Hola, mi nombre es ${fullName}`
  console.log(`${myInterpolate}, Saludos!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
  let myReplace = "Quita Los Espacios En Blanco"
  console.log(myReplace.replaceAll(" ","-").toLowerCase())

// 8. Comprueba si una cadena de texto contiene una palabra concreta
  let resultado = myReplace.includes("Quita")
  console.log(resultado)

// 9. Comprueba si dos strings son iguales
  console.log(myReplace.includes(myInterpolate))

// 10. Comprueba si dos strings tienen la misma longitud
  let longitud1 = myInterpolate.length
  let longitud2 = myReplace.length
  console.log("Tienen la misma longitud: ", longitud1 === longitud2)
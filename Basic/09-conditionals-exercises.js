/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
  let myName = "CristianFloyd"
  if (myName) {
    console.log(myName)
  }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
  let usuario = "userxx"
  let password = "71234"
  if (usuario === "userxx" && password === "71234") {
    console.log(`Bienvenido ${usuario}`)
  } else {
    console.log("Usuario o contraseña incorrectos")
  }


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
  let numero = 10
  if(numero > 0){
    console.log("El numero es positivo")
  } else if(numero < 0){
    console.log("El numero es negativo")
  } else {
    console.log("El numero es cero")
  }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
  let edad = 16
  if(edad >= 18){
    console.log("Puedes votar")
  } else {
    let dif = 18 - edad
    console.log("No puedes votar", "te faltan", dif, "años para la mayoria de edad")
  }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
  let age = 16
  let resultado = age >= 18 ? "adulto" : "menor"
  console.log(resultado)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
  let mes = 3
  if(mes >= 1 && mes < 3 || mes == 12){
    console.log("Verano")
  } else if (mes >= 3 && mes < 6){
    console.log("Otoño")
  } else if (mes >= 6 && mes < 9){
    console.log("Invierno")
  } else if (mes >= 9 && mes < 12){
    console.log("Primavera")
  } else {
    console.log("Mes incorrecto")
  }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
  if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
    console.log("31 días")
  } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
    console.log("30 días")
  } else if (mes == 2){
    console.log("28 días")
  } else {
    console.log("Mes incorrecto")
  }

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
  let idioma = "pt"
  switch (idioma) {
    case "es":
      console.log("Hola")
      break
    case "en":
      console.log("Hello")
      break
    case "fr":
      console.log("Bonjour")
      break
    default:
      console.log("Idioma no soportado")
  }

// 9. Usa un switch para hacer de nuevo el ejercicio 6
  switch (mes) {
    case 1:
    case 2:
    case 12:
      console.log("Verano")
      break
    case 3:
    case 4:
    case 5:
      console.log("Otoño")
      break
    case 6:
    case 7:
    case 8:
      console.log("Invierno")
      break
    case 9:
    case 10:
    case 11:
      console.log("Primavera")
      break
    default:
      console.log("Mes incorrecto")
  }

// 10. Usa un switch para hacer de nuevo el ejercicio 7
  switch(mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("31 días")
      break
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("30 días")
      break
    case 2:
      console.log("28 días")
      break
    default:
      console.log("Mes incorrecto")
  }
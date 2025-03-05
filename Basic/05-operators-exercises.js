/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
  let a = 10 + 10
  let b = 20 - 10
  let c = 30*30
  let d = 10/5
  let e = 10%3
  let f = 10**2

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
  a += 10
  b -= 10
  c *= 30
  d /= 5
  e %= 3
  f **= 2
  console.log(a, b, c, d, e, f)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
  console.log(a > b)
  console.log(a >= b)
  console.log(b < d)
  console.log(d <= f)
  console.log(a === a )

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
  console.log(b === a )
  console.log(b !== b )
  console.log(d > f)
  console.log(d >= f)
  console.log(a === b)


// 5. Utiliza el operador lógico and
  console.log(b === b && d > f)
  console.log(b*a && b)
  
  // 6. Utiliza el operador lógico or
  console.log(a || b)

// 7. Combina ambos operadores lógicos
  console.log(b === 0 && a <10 || a > b)

// 8. Añade alguna negación
  console.log(!(b === 0 && a <10 || a > b))
  console.log(!(b === b && d > f))

// 9. Utiliza el operador ternario
  console.log(a > b ? 'a es mayor que b' : 'a es menor que b')


// 10. Combina operadores aritméticos, de comparáción y lógicas
  a += c < f ? console.log(a) : console.log(b || f)

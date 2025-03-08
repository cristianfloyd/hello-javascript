/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
  class MiClase {
    constructor(propiedad1, propiedad2) {
      this.propiedad1 = propiedad1
      this.propiedad2 = propiedad2
    }
  }


// 2. Añade un método a la clase que utilice las propiedades
  MiClase.prototype.miMetodo = function() {
    return this.propiedad1 + this.propiedad2
  }
  


// 3. Muestra los valores de las propiedades e invoca a la función
  let miClase = new MiClase(5,10)
  console.log(miClase.propiedad1)
  console.log(miClase.propiedad2)
  console.log(miClase.miMetodo())



// 4. Añade un método estático a la primera clase
  MiClase.miMetodoEstatico = function() {
    return 'Hola mundo'
  }


// 5. Haz uso del método estático
  console.log(MiClase.miMetodoEstatico())


// 6. Crea una clase que haga uso de herencia
  class ordenador {
    constructor(cpu,ram) {
      this.cpu = cpu
      this.ram = ram
    }
  }

  class notebook extends ordenador {
    constructor(cpu,ram, pantalla, tamaño) {
      super(cpu,ram)
      this.pantalla = pantalla
      this.tamaño = tamaño
    }
  }

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 
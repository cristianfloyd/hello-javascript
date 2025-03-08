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
  class notebookLenovo extends notebook {
    #color
    #modelo
    #disco
    constructor(cpu,ram, pantalla, tamaño, modelo, color,disco) {
      super(cpu,ram, pantalla, tamaño)
      this.#modelo = modelo
      this.#color = color
      this.#disco = disco
    }

    get modelo() {
      return this.#modelo
    }
    get color() {
      return this.#color
    }
    get disco() {
      return this.#disco
    }
    set disco(value) {
      this.#disco = value
    }
  }

  let miNotebook = new notebookLenovo('i5',8,15,15,'IdeaPad 3', 'negro','256GB')
  console.log(miNotebook.modelo)
  console.log(miNotebook.color)
  console.log(miNotebook.disco)
  
  
  // 8. Modifica la clase con getters y setters para que use propiedades privadas
  console.log('quiero cambiar el disco')
  miNotebook.disco = '512GB'
  console.log(miNotebook.disco)
  console.log(miNotebook)


// 9. Utiliza los get y set y muestra sus valores
  console.log("Mi notebook es de color " + miNotebook.color + " y es modelo " + miNotebook.modelo)
  console.log("tiene un disco de " + miNotebook.disco + " y planeo cambiarlo por un disco de 1TB")
  miNotebook.disco = '1TB'
  console.log(miNotebook.disco)


// 10. Sobrescribe un método de una clase que utilice herencia 
  class notebookHp extends notebook {
    #modelo
    #color
    #disco
    constructor(cpu,ram, pantalla, tamaño, modelo, color,disco) {
      super(cpu,ram, pantalla, tamaño)
      this.#modelo = modelo
      this.#color = color
      this.#disco = disco
    }
    get modelo() {
      return this.#modelo
    }
    get color() {
      return this.#color
    }
    get disco() {
      return this.#disco
    }
    set disco(value) {
      this.#disco = value
    }
    getInformacion() {
      return `El modelo es ${this.#modelo}, el color es ${this.#color} y el disco es de ${this.#disco}`
    }
  }

  let miNotebookHp = new notebookHp('i7',8,15,15,'think pad', 'gris','256GB')
  console.log(miNotebookHp.getInformacion())
  miNotebookHp.getInformacion = () => {return 'Notebook hp' }
  console.log(miNotebookHp.getInformacion())

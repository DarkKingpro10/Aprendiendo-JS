class Persona {//Usamos para las clases PascalCase
  constructor(nombre, edad) {//Para definir un constructor usamos la palabra reservada constructor
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar = (string) => {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }

  describir() {
    // return "Tu nombre: "+this.nombre;
    return `${this.nombre}, ${this.edad} años`;
  }
}

class Empleado extends Persona {
  static salario = [100, 6];
  // NO HACER ESTO salario = new Array; salario.push(100) etc.
  constructor(nombre, edad, sueldo) {
    super(nombre, edad);
    this.sueldo = sueldo;
  }

  describir() {
    return super.describir() + `, ${this.sueldo}`;
  }
}

class Cliente extends Persona {
  #valorPrivado;
  constructor(nombre, edad, direccion, valorPrivado) {
    super(nombre, edad);
    this.direccion = direccion;
    this.#valorPrivado = valorPrivado;
  }

  describir() {
    return super.describir() + `, ${this.direccion}`;
  }

  get valorPrivado() {
    return this.#valorPrivado;
  }

  set valorPrivado(nuevoValor) {
    this.#valorPrivado = nuevoValor;
  }
}

const empleado = new Empleado("Ronald", "22", 500);
console.log(empleado.describir)
const arreglodeSueldos = Empleado.salario.map((salario) => {
  return salario * 2
})

console.log(arreglodeSueldos);

const cliente = new Cliente("Jesus", "22", "Calle 123", [1000, 5]);

console.log(cliente.valorPrivado);
console.log(cliente.describir());

cliente.valorPrivado = [800, 10];
console.log(cliente.valorPrivado);

/**
 * Output:

Ronald, 22 años, 500
[ 200, 12 ]
[ 1000, 5 ]
Jesus, 22 años, Calle 123
[ 800, 10 ]
 * 
 */
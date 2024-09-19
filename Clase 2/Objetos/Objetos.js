const persona3 = {
  name : "text3",
  age: 14,
  describir: function(apellido){
    return `${this.name}, ${this.age} años, apellido = ${apellido}`;
  }
}

const persona4 = {
  name : "text4",
  age: 16
}

const persona5 = {
  ...persona4, //Spread Operator
  papa: "U"
}

console.log("Usando el de Persona 3 " + persona3.describir("Perez"));

//Método CALL -> Llama a una función con un objeto que toma como contexto
console.log("Usando CALL " + persona3.describir.call(persona4, "Perez"));
//Método APLY -> Llama a una función con un objeto que toma como contexto
console.log("Usando APLY " +  persona3.describir.apply(persona4,["Perez"]));
//Método BIND -> LLama a una función con un objeto que toma como contexto pero no lo ejecuta directamente
const describirPersona4 = persona3.describir.bind(persona4, "HOLA BIND");

console.log("Usando BIND "+describirPersona4());
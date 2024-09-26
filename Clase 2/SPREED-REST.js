function a(...args){//REST OPERATOR
  const [a, b, c] = args;

  console.log(a, b, c);
  for(const as of args){
    console.log(as);
  }
}

a(1,2,3,7,8,9,10);

//SPREDD OPERATOR
const reactor = [1,2];

const b = [...reactor,4,5];
console.log(b);

const persona4 = {
  name : "text4",
  age: 16
}

const persona5 = {
  ...persona4, //Spread Operator
  papa: "U"
}


console.log(persona5)

// ... -> Visualmente se ven iguales el Spreed y el Rest operator.

//Pero lógicamente.


///Destructuración para arreglos.

const a = ["Hola", "B", 1];

const [saludo, letra, numero] = a;

console.log(saludo, letra, numero);

/// [a, b] -> ["Hola", "B"]

//Destructuración para objetos
const literal = {
  padre: "HOla",
  madre: 4
}

const {madre} = literal; //Esta constante no se puede modificar debido a que es una copia del original sin hacer referencia en memoria.

literal.madre = "Holaaaaa"

console.log(literal.madre);

console.log(madre)


//SIMULAR SOBRECARGA CON REST 
function nombre(a, b){
  console.log(a, b)
}

nombre(1,2);

//Destructuración 

//La sobrecarga en JS nativo no existe.
function sobrecarga(...params){//Va poder recibir un arreglo de parametros ideterminados

  const [edad, nombre, fraseFavorita] = params;

  if(params.length >= 3){
    console.log(edad, nombre, fraseFavorita)
  }

  if(params.length == 2){
    const [edad1, edad2] = params;
    console.log(edad1 + edad2);
  }

}

sobrecarga(1, "Hola", "RONALD")

sobrecarga(2,10)

//SPREED OPERATOR se utiliza normalmente para crear copias superficiales de arreglos y objetos.
//Cuando se desea modificar una propiedad de un objeto

const arregloSpreed = [1, 2, 3, 4, 5];
const copia = [...arregloSpreed, 6, 7, 8];

const objeto = {
  altura: 5,
  peso: "12kg",
  tipo: "Planta"
}

const pokemon = {...objeto, tipo: "Carne", carnada: "YO"};

objeto.altura = 10;

console.log(objeto)
console.log(pokemon)

//Problema cuando sob objetos muy complejos de copiar
const objeto2 = {
  altura: 5,
  peso: "12kg",
  tipo: "Planta",
  habilidades: [" Photosíntesis", "Crecimiento rápido"]
}

const pokemon1 = {...objeto, tipo: "Carne"};

pokemon1.habilidades.push("Fuerza sobrehumana"); 

console.log(objeto2); 
console.log(pokemon1);

/**
 * Al imprimir objeto1 y pokemon1 ambos tienen en el arreglo de habilidades Fuerza sobrehumana, porque es una copia superficial de un objeto complejo
 * 
 */

/**COPIAS PROFUNDAS */
const objeto3 = {
  altura: 5,
  peso: "12kg",
  tipo: "Planta",
  habilidades: [" Photosíntesis", "Crecimiento rápido"]
}

const pokemon3 = structuredClone(objeto);//Crea una copia profunda pero añada una carga de procesamiento muchisimo mayor al spreed.

pokemon.habilidades.push("FUERZA");

console.log(objeto3);
console.log(pokemon3)
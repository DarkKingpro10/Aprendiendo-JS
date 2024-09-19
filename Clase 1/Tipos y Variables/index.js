/**TIPO */
/**
 * No es necesario especificar el tipo de una variable ya que este es implicito
 */
var nombreVariable = 1;//->number
var string = "hola";//->string
var booleano = true;//->boolean
var unde = undefined;//->undefined
var nulo = null;//->null

/**Variables */
var variable1 = 1; //No es recomendable usar debido a que puede ser modificada en cualquier parte del código

// function f1(){
//   variable1 = "hola";
// }
const constante = 1;//Es más recomendado usar que var 

function f2(){
  //Tercer tipo de variable 
  let variable = 1;
}

function f3(){
  let variable = "hola";
}

/**EJEMPLO */
var arreglo = [1,2,3,4,5,6,7,8,9,10];
function cambiar(){
  let suma = 0;
  const arreglo2 = arreglo.map(function (n){
    return n+1;
  })

  arreglo.forEach(element => {
    //suma = element + suma;
    suma += element;
  });

  console.log(suma)
  console.table(arreglo2)
}
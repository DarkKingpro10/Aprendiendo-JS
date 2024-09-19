/**
 * Scope: El alcance de una función o el alcance de una variable
 * me refiero a desde donde puede ser modificado o tiene acceso dentro del archivo
 */

//FUNCIONES DECLARADAS
function f1(){
 //Funciones que se declaran con function
}

//FUNCIONES COMO EXPRESIONES
const f2 = function(mensaje){
  console.log(mensaje);
}

//ARROW FUNCTION
const f3 = ()=>{
  console.log("Hola");
}

//FUNCIONES AUTOEJECUTADAS
(function() {
  console.log("hola");
} ( ));

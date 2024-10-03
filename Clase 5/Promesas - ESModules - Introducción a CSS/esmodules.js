export default function funcionDefault() {
  console.log("Hola soy una función default");
  console.log("No importa como me importes solo conque haga referencia al mismo archivo ahí estoy")
}

export function funcionNoDefault() {
  console.log("A la hora de importarme debes poner bien mi nombre")
}


/**
 * las funciones default se importan:
 * import funcionDefault from "./esmodules.js";
 * 
 * incluso puedes cambiarle nombre sin problemas
 * import nuevoNombre from "./esmodules.js";
 * 
 * las funciones no default se importan:
 * import prueba, {funcionNoDefault} from "./esmodules.js";
    Deben declararse dentro de llaves y el nombre debe ser el mismo del de la función

    Si se desea cambiar el nombre puede usarse la palabra reservada as

    import prueba, {funcionNoDefault as nuevoNombre} from "./esmodules.js";
 */

/**IMPORTS DINÁMICOS PARA FUNCIONES*/

async function LogIn() {
  //Supongamos que dentro de esta función se evalua si el log in fue correcto
  let logIn = true;

  if (logIn) {
    import("./moduloDinamico.js").then(({default: funcionDinamica, funcionDinamica2}) =>{
      funcionDinamica();
      funcionDinamica2();
    });

    //Tambien se puede hacer de esta manera
    import("./moduloDinamico.js").then((modulo) =>{
      modulo.default();
      modulo.funcionNoDefault();
    });	

    //Tambien se puede hacer de esta manera
    const {default: nombremosDeOtraForma, funcionDinamica2} = await import("./moduloDinamico.js");
    
    nombremosDeOtraForma();
    funcionDinamica2();
  }
  else {
    //Se hace otra lógica como importar otros modulos
  }
}
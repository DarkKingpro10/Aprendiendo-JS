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
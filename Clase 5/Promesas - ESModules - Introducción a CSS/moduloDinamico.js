/**Este archivo solo representa un modulo que puede ser cargado dinamicamente */

/**La ventaja de los modulos dinamicos esque en vez de añadir el import al inicio del archivo, se agregar o importa el archivo o las funciones de este unicamente cuando se necesitan */

//CASO DE USO

/**
 * Inicialmente se tiene una aplicación que dependiendo del log in ejecuta una serie de funciones que se guardaron en un archivo llamado admin.js
 * Si se pone el import al inicio obteniendo las funciones, se esta importando ese modulo cuando no se esta seguro que se valla a usar
 * 
 * Pero si se importa dinamicamente solo se van a importar las funciones que se necesiten, en este caso solo se importa el archivo admin.js
 * y cuando se necesite se importa solo esa funcion
 *
 * Esto mejora la eficiencia y el rendimiento de la aplicación ya que cargará más rapido (el sitio web) al pesar menos,
 */

const funcionDinamica = () => {
  console.log("Funcion dinamica");
};

function funcionDinamica2(){
  console.log("Funcion dinamica 2")
}

export default funcionDinamica;
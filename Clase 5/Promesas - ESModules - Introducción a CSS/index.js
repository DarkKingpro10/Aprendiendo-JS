// import prueba, {funcionNoDefault} from "./esmodules.js";

import { getData } from "./Promesas.js"

//Añadimos evento de escucha cuando el documento de ha cargado con exito
// document.addEventListener("DOMContentLoaded", (e) => {

// })

//En este caso lo haremos con el botón
document.getElementById("btn-cargar").addEventListener("click", (e) => {
  cargarUsuarios();
})

async function cargarUsuarios() {
  //Declaramos una variable para acumular las cards
  let usersCard = '';

  //Obtenemos el contenedor
  const userContainer = document.getElementById("user-container");

  //Como devuelve un objeto con varios valores a mi solo me importa los results que es un arreglo de objetos
  const { results: users } = await getData();

  //Recorremos el arreglo mediante forEach ya que necesitamos el indice
  users.forEach((user, index) => {
    //Concatenamos las cards con template strings a la variable acumuladora

    //Para concatenar la info necesitamos saber como esta estructurado el json, yo ya lo se.

    //Observar que se creo un atributo nuevo llamado data-id y le pasamos el indice. Se le podría pasar lo que sea y crear atributos a lo que sea
    usersCard += `
    <article class="card">
        <img loading="lazy" src="${user.picture.large}" alt="Imagen de ${user.name.first + " " + user.name.last}" class="user__img" data-id="${index}">

        </img>
        <div class="user__data">
          <p class="user__data__name">${user.name.first + " " + user.name.last}</p>
          <p class="user-data-gender">${user.gender}</p>
          <p class="user__data__email">${user.email}</p>
        </div>
      </article>
    `
  })

  //Ahora que ya hemos recorrido todo el arreglo y concatenado las cards lo insertamos en el contenedor

  userContainer.innerHTML = '';//Primero quitamos los skeleton
  userContainer.innerHTML = usersCard;//Ahora si lo insertamos

  /**Ahora una vez cargado e insertado podemos realizar cualquier acción que el sistema lo requiera en este caso quiero que al darle click a cada imagen de una alerta indicando el indice de la imagen en el arreglo */

  //Obtenemos todos los elementos de imagen y le asignamos un evento click y le pasamos la función
  document.querySelectorAll(".user__img").forEach((img) => {
    img.addEventListener("click", mostrarIndice)
  })
  
};

function mostrarIndice(e) {
  //Debido a que se uso data-id en el template string lo podemos obtener con dataset.id ya que se consideran DATA Atributes.

  //al acceder mediante el dataset accedes al nombre siguiente del guion, si hay varios entonces se usa camelCase

  /**
   * <div data-nombre-usuario></div>
   * 
   * dataset.nombreUsuario //Así se accede
   * 
   */

  //Usamos el método de SweetAlert2 para mostrar un mensaje

  //No lo importamos ya que no podemos acceder con module pero al cargarlo antes en el html podemos usar sus métodos
  Swal.fire({
    title: 'Indice',
    text: `El indice de la imagen es ${e.target.dataset.id}`,
    icon: 'info',
    confirmButtonText: 'BIEN'
  })
}

//Evento para cuando llegue al final de la página
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.body.offsetHeight;

  if (scrollPosition >= documentHeight) {
    console.log('Llegaste al final de la página');
    // Aquí puedes agregar el código que deseas ejecutar cuando se llega al final de la página podría ser inifinity scroll (Cargar más cards)
  }
});
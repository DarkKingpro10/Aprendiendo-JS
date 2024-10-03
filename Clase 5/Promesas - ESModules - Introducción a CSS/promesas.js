/**
 * Las promesas son un tipo de JS que nos permiten ejecutar
 * código asíncrono, con la capacidad de poder finalizar la ejecución del código dentro de la promesa después de haber realizado la tarea.
 * 
 * 
 * Debido a que JS solo usa un hilo de procesamiento del CPU las funciones se ejecutan linea por linea, lo que provoca que si deseamos que un código se ejecute solo después de la finalización del anterior era problema.
 * 
 * Ahora con las promesas podemos hacer eso
 */

//Ejemplo de Promesas
//LAs promesas reciben un callback con dos métodos propios de ella

//Resolve se ejecuta una vez terminada la promesa y este recibe como parámetro lo que desea devolver

//Reject se ejecuta si hay algún error en la promesa y queremos definir por ende recibe el error
const promise = new Promise((resolve) => {
  //Simularemos una petición HTTP asíncrona con el método timeOut de JS, este método ejecuta un código pasado un tiempo en ms, recibe callback: Función a ejecutar, ms:Tiempo en el que se va a ejecutar.

  setTimeout(() => {
    resolve({ data: 'Datos del servidor' })
  }, 2000)
});

const promiseWithError = new Promise((resolve, reject) => {
  // Simulamos una solicitud HTTP asíncrona
  setTimeout(() => {
    // Si la solicitud falla, llamamos a reject
    reject(new Error('Error al obtener datos del servidor'));
  }, 3000);
});

/**LAS PROMESAS SE PUEDEN CONSUMIR DE DOS FORMAS */

//Método antiguo pero que igual se sigue usando

//USANDO THEN

//Then es usado cuando se consume una promesa y recibe un callback que recibe el parametro que devuelve la promesa
function usingThen() {
  promise.then((data) => {
    console.log(data)//{data: 'Datos del servidor'}
  })
    .catch((error) => {//La ventaja de Then esque posee su propio método para percibir si hay un error en toda la ejecución del then
      console.error(`Error: ${error.message}`);
    })
    .finally(() => {
      //Método que se ejecuta al finalizar ya sea el catch o then
    })
}

//La ventaja y desventaja esque puede causarse un then hell que es cuando multiples then son anidados
function thenHell() {
  promise.then((data) => {
    console.log(data); //Como andamos probando vamos a volver a devolver la misma promesa

    return promise;
  })
    .then(() => {
      console.log("Nueva promesa")
      return promiseWithError;//Ahora devolvemos el error
    }
  )
    .catch(error => console.log(error.message))
}

//USANDO async/await el método más moderno que resuelve el then hell pero trae el try catch hell
//Para ello hay que especificar que es una función asyncrona con sync antes del function

// const asynFn = async ()=>{}; //Para declarar arrow function asíncrona

async function usingAsyncAwait() {
  const data = await promise;//Con await consumimos la promesa

  //Ejecutamos el código que queramos lo cual queda mucho más limpio y legible
  console.log(data)
}


//El problema esque este método no recibe errores por ende hay que cubrir todo el método con un try catch
async function tryCatchHell() {
  try {
    const data = await promise;
    console.log(data);

    console.log("Nueva promesa");

    const posibleErrorXD = await promiseWithError;//Esto dará error
    console.log("Esto ya no se muestra por el error")
  } catch (error) {
    console.log(error.message)
  }
}

//Obtenemos contenido de la API
const USERS_URL = "https://randomuser.me/api?results=10&seed=prueba";//Por motivos prácticos ya esta parametrizada pero puede parametrizarse usando template strings

export async function getData(page = 1) {
  //Usamos el método fetch para realizar una petición HTTP

  //En este caso la petición es de método GET por ende el FETCH no requiere más parámetros
  try {
    const res = await fetch(`https://randomuser.me/api?results=10&seed=prueba?page=${page}`);
    
    //Verificamos que la petición se halla realizado bien
    if(!res.ok) throw new Error("Error al realizar la petición de los usuarios");
    
    //La API nos da los datos en formato JSON por ende debemos convertirlo a un objeto literal usando el método .json()
    return await res.json();

  } catch (error) {
    return new Error(error.message)
  }
}

/**Ejemplos de uso de fetch para distintos casos:
 * 
 * En la vida real los headers, method y body dependerán del  como se construya la API
 * 
 * const userData = { name: 'Juan', age: 30 };
 * Método POST: 
 * fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
 * 
    Método PUT
    fetch('https://api.example.com/users/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    Método DELETE
    fetch('https://api.example.com/users/1', {
      method: 'DELETE'
    })
 * 
 */
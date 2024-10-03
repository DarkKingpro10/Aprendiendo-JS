//LO QUE HAREMOS EN LA TIENDA EN LINEA

//Fingiremos una base de datos con LocalStorage -> Esto nos permite persistir los datos a traves de las sesiones del navegador

//Usamos la propiedad del objeto windows 


//AÑADIR
const myObject = { name: 'John', age: 30, occupation: 'Developer' };

// Convertimos el objeto a string
const jsonString = JSON.stringify(myObject);

// Lo guardamos en el localStorage
localStorage.setItem('myObject', jsonString);

//RECUPERAR
// Recuperamos el string del localStorage
const storedString = localStorage.getItem('myObject');

//Convertimos el string a objeto
const objectRecover = JSON.parse(jsonString);

//MODIFICAR
const myObjectModify = { ...objectRecover, occupation: "Backend"};

// Convertimos el objeto a string
const jsonStringModify = JSON.stringify(myObjectModify);
localStorage.setItem('myObject', jsonStringModify);
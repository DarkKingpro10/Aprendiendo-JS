const padre = (fn)=>{
  fn();
}

function callback(){
  console.log("Soy el callback");
}

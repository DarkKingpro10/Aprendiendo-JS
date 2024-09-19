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
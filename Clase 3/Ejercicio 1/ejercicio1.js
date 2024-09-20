const message = "murcielago leon jirafa cebra elefante rinoceronte hipopotamo ardilla mapache zorro lobo oso puma jaguar tigre leopardo gato perro caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco tigre jaguar leopardo oso lobo zorro mapache ardilla elefante rinoceronte hipopotamo cebra jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago tucan loro canario colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago flamenco pinguino tucan loro canario colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo leon jirafa murcielago caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo leon jirafa murcielago caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco murcielago leon jirafa cebra elefante rinoceronte hipopotamo ardilla mapache zorro lobo oso puma jaguar tigre leopardo gato perro caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo jirafa leon murcielago pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon paloma colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon paloma colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon"

const res = message.toLocaleLowerCase().split(" ").reduce((acc, palabra) => {

  if (acc.includes(palabra)) {//Evaluamos si se encuentra en el acumulador
    const index = acc.indexOf(palabra)//Obtiene la posición de la palabra en el arreglo
    acc[index + 1]++; //-> acc[index+1] = acc[index+1] + 1

    // acc[acc.indexOf(word) + 1] += 1;

    // ganso -> NO
    //LO METO 1 acc->[ganso,1]
    //ganso -> SI
    //index = 0
    //acc[0+1]=1
    //acc[index+1] = 1 -> 1++ ->2

    //acc -> [ganso, 2]

    //1° gato -> NO ENtRA -> else -> LO AGREGA -> acc = [gato, 1]
    //2° perro -> NO ENTRA -> else -> LO AGREGA -> acc = [gato, 1, perro, 1]
    //3° gato -> SI ENTRA -> OBTIENE LA POSICIÓN OSEA (0) -> SI A LA POSICIÓN LE SUMAMOS 1 QUE HAY? 1 -> acc = [gato, 2, perro, 1]

  } else {
    acc.push(palabra, 1)//Lo agrega y agrega un 1 despues
  }

  return acc;
}, []).join("");

//Consola -> consola

//elefante jirafa -> [elefante, jirafa]

//e -> [l,fante jirafa]

//[gato,2] -> gato2


//SEGUNDO MÉTODO Y MEJOR FORMA
/**
 * 
 * const res = message.toLocaleLowerCase().split(" ");

// const animalCounts = [];
var mensaje = "";
res.forEach(animal => {
  const count = res.filter(a => a === animal).length;

  //paloma -> [paloma...............]; cuentalos -> palomas se repite 15veces

  // animalCounts.push({ animal, count });
  mensaje += `${animal}${count} `;
  //[{animal: animal, count: 5}]
});

for(const animal of res){
  //next, break
  //try catch
  const count = res.filter(a => a === animal).length;
  mensaje += `${animal}${count} `;
}

 * 
 */
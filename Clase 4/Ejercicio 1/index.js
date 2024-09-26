/**
 * El objeto platillo estará definido
 * {
 *    id: string
 *    nombre: string,
 *    precio: number,
 *    descripción: string,
 *    tipo: string
 * }
 */

const TIPO_PLATILLO = {
  ENTRADA: "Entrada",
  PLATO_PRINCIPAL: "Plato Principal",
  POSTRE: "Postre",
  BEBIDA: "Bebida",
};

//Modificar a todos los objetos
//NO SE RECOMIENDA HACER
Object.prototype.imprimirArreglo = function () {
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      console.log(`${key}: ${this[key]}`);
    }
  }
}

class Restaurante {
  static platillos = [];//Ya se que va ser un arreglo de objetos

  static agregarPlatillo(platillo) {

    try {
      this.platillos.push(platillo);
      return true;
    } catch (error) {
      return false;
    }
  }

  static modificarPlatillo(pPlatillo) {
    const index = this.platillos.findIndex((platillo) => platillo.id === pPlatillo.id);
    //-1 si no lo encuentra, si lo encuentra devuelve el indice
    console.log(index);
    if (index !== -1) {//Como lo encontro lo modificamos
      this.platillos[index] = pPlatillo;
      return true;
    }
    return false;
  }

  static eliminarPlatillo(id) {
    const index = this.platillos.findIndex((platillo) => platillo.id === id);
    if (index !== -1) {
      this.platillos.splice(index, 1);
      return true;
    }
    return false;
  }

  static mostrarMenu() {
    for (const platillo of this.platillos) {
      try {
        console.log(platillo.imprimirArreglo());
        console.log("--------------");
      } catch (error) {
        continue;
      }
    }
  }

  static agruparPlatillos(){
    const agrupados = Object.groupBy(this.platillos, ({tipo})=>tipo);

    console.log(agrupados);
  }
}

const platillo1 = {
  id: crypto.randomUUID(),
  nombre: "Hamburguesa",
  precio: 10,
  descripcion: "Hamburguesa de res",
  tipo: TIPO_PLATILLO.PLATO_PRINCIPAL,
};

const platillo2 = {
  id: crypto.randomUUID(),
  nombre: "Pizza",
  precio: 12,
  descripcion: "Pizza de pepperoni",
  tipo: TIPO_PLATILLO.PLATO_PRINCIPAL,
};

Restaurante.agregarPlatillo(platillo1);
Restaurante.agregarPlatillo(platillo2);

const platillo1Modificado = {...platillo1, nombre: "Hamburguesa de res"};

Restaurante.modificarPlatillo(platillo1Modificado);

Restaurante.eliminarPlatillo(platillo2.id);

Restaurante.mostrarMenu();
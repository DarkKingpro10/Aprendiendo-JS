const input1 = document.getElementById("numero1");
const input2 = document.getElementById("numero2");
const respuesta = document.getElementById("respuesta");

class Operaciones {
  static resultado = 0;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sumar() {
        return this.num1 + this.num2;
    }

    restar() {
        return this.num1 - this.num2;
    }

    multiplicar() {
        return this.num1 * this.num2;
    }

    dividir() {
        if (this.num2 === 0) {
            return "No se puede dividir por cero";
        } else {
            return this.num1 / this.num2;
        }
    }
}

function calcular(){
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  const operacion = new Operaciones(num1, num2);

  const resultadoSuma = operacion.sumar();

  respuesta.value = resultadoSuma;
}
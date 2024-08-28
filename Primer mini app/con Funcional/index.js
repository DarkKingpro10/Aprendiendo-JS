const input1 = document.getElementById("numero1");
const input2 = document.getElementById("numero2");
const respuesta = document.getElementById("respuesta");

function calcular() {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    respuesta.value = num1 + num2;
}
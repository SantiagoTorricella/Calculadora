// FUNCIONES ARITMETICAS //

function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}
// ==================== //

// FUNCION GLOBAL PARA OPERAR (ver simbolos como parametros) //

function operate(operador, a, b) {
  if (operador === "+") {
    return suma(a, b);
  }
  if (operador === "-") {
    return resta(a, b);
  }
  if (operador === "*") {
    return multiplicar(a, b);
  }
  if (operador === "/") {
    return dividir(a, b);
  } else {
    alert("Ingrese un opearador valido");
  }
}
// ===================== //

const display = document.getElementById("display");
const botonesDigitos = document.querySelectorAll(".digito");
const operacionesAritmeticas = document.querySelectorAll(".operacion");
const igual = document.querySelector(".igual");

let variableDisplay = "";
let displayANumero = "";
let displayAuxNumero = "";
let primeraVariable = "";
let auxVariable = "";
let operacion = "";
let resultadoFinal = "";

botonesDigitos.forEach((boton) => {
  boton.addEventListener("click", () => {
    display.innerText += boton.innerText;
    variableDisplay += boton.innerText;
    console.log(variableDisplay);
  });
});

operacionesAritmeticas.forEach((boton) => {
  boton.addEventListener("click", () => {
    auxVariable = variableDisplay;
    operacion = boton.innerText;
    console.log(operacion);
    display.innerText = "";
    variableDisplay = "";
  });
});

igual.addEventListener("click", () => {
  displayANumero = parseInt(variableDisplay);
  displayAuxNumero = parseInt(auxVariable);
  resultadoFinal = operate(operacion, displayAuxNumero, displayANumero);
  console.log(resultadoFinal);
  display.innerText = "";
  display.innerText = resultadoFinal;
  variableDisplay = resultadoFinal;
});

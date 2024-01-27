
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado")

let numeroIngresado = numero.value;


if (calcular) {
  calcular.addEventListener("click", () => {
    let numeroIngresado = numero.value;

    let numeroFloat = parseFloat(numeroIngresado);

    if (isNaN(numeroFloat)) {
      resultado.textContent = "El dato de entrada no es un número válido.";
      return;
    }

    let resultadoFahrenheit = (numeroFloat * 1.8) + 32;
    let resultadoKelvin = numeroFloat + 273.15;

    resultado.textContent = `
      Los grados ingresados en grados Fahrenheit son: ${resultadoFahrenheit}
      Los grados ingresados en grados Kelvin son: ${resultadoKelvin}
    `;
  });
}
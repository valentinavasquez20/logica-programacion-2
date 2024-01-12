const celcius = prompt("Ingrede los grados celcius: ")
console.log(celcius)

function fahrenheit() {
  conv1 = (1.8 * celcius) + 32
  return conv1
}

function kelvin() {
  conv2 = celcius + 273.5
  return conv2
}

console.log("Los grados celcius a fahrenheit es: ", fahrenheit())

document.write("Los grados celcius a Fahrenheit es: ",fahrenheit(),"  ");
document.write("Los grados celcius a Kelvin es: ",kelvin());

function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}
function celsiusToKelvin(c) {
  return c + 273.15;
}
function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}
function fahrenheitToKelvin(f) {
  return (f - 32) * 5 / 9 + 273.15;
}
function kelvinToCelsius(k) {
  return k - 273.15;
}
function kelvinToFahrenheit(k) {
  return (k - 273.15) * 9 / 5 + 32;
}
function converter() {
  let fromValue = document.getElementById("fromValue").value;
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;
  let result;

  if (fromUnit === toUnit) {
    result = fromValue; 
  } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
    result = celsiusToFahrenheit(fromValue);
  } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
    result = celsiusToKelvin(fromValue);
  } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
    result = fahrenheitToCelsius(fromValue);
  } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
    result = fahrenheitToKelvin(fromValue);
  } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
    result = kelvinToCelsius(fromValue);
  } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
    result = kelvinToFahrenheit(fromValue);
  }

  document.getElementById("toValue").value = result + " " + toUnit;
}
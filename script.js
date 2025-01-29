function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function convertirTemperatura() {
    let celsius;

    while (true) {
        celsius = prompt("Ingrese la temperatura en grados Celsius:");

        if (!isNaN(celsius) && celsius !== null && celsius !== "") {
            celsius = parseFloat(celsius);
            break;
        } else {
            alert("Error: Debe ingresar un número válido. Inténtelo de nuevo.");
        }
    }
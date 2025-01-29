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
    const fahrenheit = celsiusToFahrenheit(celsius);
    const kelvin = celsiusToKelvin(celsius);

    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);

    document.getElementById("resultado").innerHTML = `

        <p>Grados Celsius: ${celsius.toFixed(2)}</p>
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
    `;
}
convertirTemperatura();
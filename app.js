//Funciones para convertir a grados Kelvin y Fahrenheit
const convertirAKelvin = (grados) => {
    return grados + 273.15;
};

const convertirAFahrenheit = (grados) => {
    return (grados * 1.8) + 32;
};

//condición del ciclo
let detener = false;
while (!detener) {
    //obtener la entrada del usuario
    const entrada = prompt(`Ingrese la temperatura en °Centigrados: `);

    //validar si se ingresó un numero
    if (entrada === "" || Number.isNaN(Number(entrada))) {
        alert("Por favor, ingrese un numero");
    } else {
        const temperatura = Number(entrada);
        console.log(`La temperatura en grados Kelvin es: ${convertirAKelvin(temperatura)}`);
        console.log(`La temperatura en grados Fahrenheit es: ${convertirAFahrenheit(temperatura)}`);
        detener = true;
    }
}




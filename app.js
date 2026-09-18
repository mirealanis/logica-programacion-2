//Funciones para cambiar el tipo a grados Kelvin y Fahrenheit
const convertirAKelvin = (grados) => {
    const kelvin = grados + 273.15;
    return kelvin;
};

const convertirAFahrenheit = (grados) => {
    const Fahrenheit = (grados * 1.8) + 32;
    return Fahrenheit;
};

//obtener la entrada del usuario
const centigrados = Number(prompt(`Ingrese la temperatura en °Centigrados: `));

console.log(`La temperatura en grados Kelvin es:` + convertirAKelvin(centigrados));

console.log(`La temperatura en grados Fahrenheit es:` + convertirAFahrenheit(centigrados));




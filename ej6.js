const prompt = require('prompt-sync')();

let ninos = Number(prompt('Introduce la cantidad de niños: '));
let ninas = Number(prompt('Introduce la cantidad de niñas: '));

let total = ninos + ninas;

if (total === 0) {
    console.log('Error: no hay estudiantes en el curso.');
} else {
    let porcentajeNinos = (ninos / total) * 100;
    let porcentajeNinas = (ninas / total) * 100;

    console.log(`El porcentaje de niños es: ${porcentajeNinos.toFixed(2)}%`);
    console.log(`El porcentaje de niñas es: ${porcentajeNinas.toFixed(2)}%`);
}

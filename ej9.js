//Realizar algoritmo que nos diga si una persona puede acceder a cursar 
// un ciclo formativo de grado superior o no. Para acceder a un grado 
// superior, si se tiene un título de bachiller, en caso de no tenerlo, 
// se puede acceder si hemos superado una prueba de acceso.

const prompt = require('prompt-sync')();
const mensajeAccesoGSOk = "¡Puedes acceder a GS!";
const mensajeAccesoGSNo = "No puedes acceder a GS.";

console.log("Ayudante matrícula");
console.log("==================");

let tieneBachiller = prompt("¿Tienes el título de bachiller? (S/N) ")
    .toLowerCase()
    .trim();

if (tieneBachiller === 's') {
    console.log(mensajeAccesoGSOk);
} else if (tieneBachiller === 'n') {
    let tienePruebaAcceso = prompt("¿Tienes superada la prueba de acceso? (S/N) ")
        .toLowerCase()
        .trim();

    if (tienePruebaAcceso === 's') {
        console.log(mensajeAccesoGSOk);
    } else if (tienePruebaAcceso === 'n') {
        console.log(mensajeAccesoGSNo);
    } else {
        console.log(`Opcion introducida ${tienePruebaAcceso} no corresponde con opciones validas (S/N)`);
    }
} else {
    console.log(`Opcion introducida ${tieneBachiller} no corresponde con opciones validas (S/N)`);
}

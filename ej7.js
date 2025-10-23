const prompt = require('prompt-sync')();

let mes = prompt('Introduce un mes del año: ');
let importe = Number(prompt('Introduce un importe: '));

let total;

if (mes === 'octubre') {
    total = importe * 0.15;
    total = importe - descuento;
    console.log('Se aplica un descuento del 15% en octubre.');
} else {
    total = importe;
    console.log ('no se aplica ningun deecuento');
}

console.log(`El importe total a pagar es: ${total.toFixed(2)}`);

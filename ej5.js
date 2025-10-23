const prompt = require('prompt-sync')();

let num = Number(prompt('Introduce un número: '));

if (num <= 0) {
    console.log('Error: el número introducido es inválido.');
} else {
    let cuadrado = num ** 2;
    let raiz = Math.sqrt(num);
    console.log(`Del número ${num}, su potencia es ${cuadrado} y su raíz es ${raiz}`);
}

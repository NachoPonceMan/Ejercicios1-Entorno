const prompt = require('prompt-sync')();

let numero = Number(prompt('Introduce un numero entero: '));

if (numero === 0) {
    console.log('El numero no es par ni impar.');
} else if (numero % 2 === 0) {
    console.log('El numero es par.');
} else {
    console.log('El numero es impar.');
}

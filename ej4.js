const prompt = require(`prompt-sync`)();

let numero = prompt ('Introduce tres numeros:')
let numero1 = prompt ();
let numero2 = prompt ();
let numero3 = prompt ();

let resultado;

if (numero1 < 0) {
resultado = numero1*numero2*numero3;
console.log('El primer numero es negativo')
console.log('El producto de los tres numeros es;', resultado);
} else { 
resultado = numero1 + numero2 + numero3;
console.log('El primer numero es positivo')
console.log('La suma de los numeros es:', resultado)
}
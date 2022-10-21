const a = 2;
const b = 3;
const c = 5;
const d = 9;
let x;

if (!(d > 5)) {
    x = (a + b) * d;
} else {
    x = (a - b) / c
}

//console.log("X = " + x)

/*
Declare um valor numerico
- É maior que 10?
    - Se sim, maior que 10
    - Se não, menor que 10

const numero = 101;

if (numero > 100) {
    console.log("É maior")
} else {
    console.log("É menor")
} */

/* O mesmo, mas com else if */
const numero1 = 50;
const numero2 = 50;

const soma = numero1 + numero2;

if (soma > 100) {
    console.log("É maior")
} else if (soma === 100) {
    console.log("Bingo")
} else {
    console.log("É menor")
}
/* 
Crie um programa para medir o comprimento da circuneferencia 
Comprimento = 2*PI*R
PI = 3,1415
R = 8
*/
let dois = 2;
let pi = 3.1415;
let r = 8;
let comprimento = dois * pi * r;

//console.log(`O comprimento da circuneferencia é ${comprimento}`);

/* OPERADORES RELACIONAIS

=       atribuição
==      igual -> compara apenas o valor
===     igual -> compara o valor e o tipo
!=      diferente -> verifica apenas o valor
!==     diferente -> verifica o valor e o tipo 
<       menor
>       maior
<=      menor igual
>=      maior igual
*/

// Faça um programa que armazene duas frases e compare se elas são iguais
let frase1 = "coma tapioca, gostoso demais";
let frase2 = "sad and brazilian";
let diferenca = frase1 == frase2

//console.log (`A frase ${frase1} é igual da ${frase2} isso é ${diferenca}`)

// Faça um programa que armazene 2 números e retorne se o primeiro é maior que o segundo
let numero1 = 10
let numero2 = 20
let menor = numero1 < numero2

//console.log (`O número ${numero1} é menor que o ${numero2}, isso é ${menor}`)

/* CONDICIONAIS
    if      (se)
    else    (senão)
    else if
*/
/*
let nrecebeu = "não recebeu"
let recebeu = "recebeu"

if (nrecebeu == "não recebeu") {
    console.log ("você está pobre :(")
} else {
    console.log ("vamos às compras baby!")
}*/

// Comparar 3
let acima = "acima"
let media = "media"
let abaixo = "abaixo"

if (media == "acima") {
    console.log ("passou de ano bb!")
} else if (abaixo == "media") {
    console.log ("passou raspando tal qual os motoqueiros do ifood")
} else {
    console.log ("não passou D:")
}

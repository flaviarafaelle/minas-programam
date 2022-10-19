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
//    console.log ("passou raspando tal qual os motoqueiros do ifood")
} else {
//    console.log ("não passou D:")
}

/*
Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor que 20 reais. 
Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.

Exemplo: 
produto: R$ 18,00 -> 18 * 45% -> R$ 26,10
produto: R$ 21,00 -> 21 * 30% -> R$ 27,30
*/

let prod1 = 18
let prod2 = 21
let lucro1 = 8.1
let lucro2 = 6.3

const multiplicacao1 = prod1 + lucro1
const multiplicacao2 = prod2 + lucro2

if (prod1 > 20) {
  console.log (`Com lucro de 45% o valor da venda foi ${multiplicacao1}`)
} else if (prod2 > 20) {
  console.log (`Com lucro de 30% o valor da venda foi ${multiplicacao2}`)
} else {
  console.log ("O comerciante não vendeu")
}



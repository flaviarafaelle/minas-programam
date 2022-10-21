/*
Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor que 20 reais. 
Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.

Exemplo: 
produto: R$ 18,00 -> 18 * 45% -> R$ 26,10
produto: R$ 21,00 -> 21 * 30% -> R$ 27,30
*/

let prod1 = 18
let prod2 = 21
let lucro1 = 1.45
let lucro2 = 1.3

const multiplicacao1 = prod1 + lucro1
const multiplicacao2 = prod2 + lucro2

if (prod2 > 20) {
  console.log (`Com lucro de 45% o valor da venda foi ${multiplicacao1}`)
} else {
  console.log (`Com lucro de 30% o valor da venda foi ${multiplicacao2}`)
}
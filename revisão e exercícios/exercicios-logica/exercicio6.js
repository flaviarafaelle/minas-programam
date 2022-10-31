// 2) Retornar frutas tratadas com somente a primeira letra maiúscula e as demais minúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

for(let i = 0; i < frutas.length; i++){
    const primeiraLetra = frutas[i].charAt(0).toUpperCase()
    const demaisLetras = frutas[i].substring(1).toLocaleLowerCase()

    console.log(primeiraLetra + demaisLetras)
}

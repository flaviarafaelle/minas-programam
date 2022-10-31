/* Dado um array de objetos: */

const usuarios = [
    { nome: "Jordana", idade: 18 },
    { nome: "Lilian", idade: 28 },
    { nome: "Janaina", idade: 19 }
];

/*Imprima todos nome e idade da variável usuários.
A saída deverá ser:
Jordana
18
Lilian
28
...*/

for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].nome)
    console.log(usuarios[i].idade)
}
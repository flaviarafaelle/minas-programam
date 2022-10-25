/* O método splice() altera o conteúdo de uma lista, adicionando
novos elementos enquanto remove elementos antigos.*/

const massas = ['Lasanha', 'Pizza', 'Macarronada'];
massas.splice(1, 0, 'Nhoque');

console.log(massas)
//Posição inicial: 1
//Elementos a remover: 0
//A adicionar: 'nome do objeto'
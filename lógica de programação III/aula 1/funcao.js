// Você vai abrir um restaurante, crie 4 pratos para o seu restaurante
// ele deve ser criado no formato de objeto contendo os seguntes dados
// nome, descricao, quantidade em gramas, nota do chef
// em seguida adicione esses pratos em um array chamado cardapio

const doce1 = {
    nome: "Brigadeiro",
    descricao:"De chocolate ou beijinho",
    quantidade: "5 unidades",
    notaDoChefe: 4.5,
}

const doce2 = {
    nome: "Bolo",
    descricao:"De cenoura, chocolate ou laranja",
    quantidade: "1 fatia",
    notaDoChefe: 4.5,
}

const doce3 = {
    nome: "Cookie",
    descricao:"De Chocolate, red velvet ou tradicional",
    quantidade: "2 unidades",
    notaDoChefe: 5,
}

const doce4 = {
    nome: "Brownie",
    descricao:"De Chocolate",
    quantidade: "1 fatia",
    notaDoChefe: 4,
}

//const cardapio = [doce1, doce2, doce3, doce4]
//console.log(cardapio)

// Usem o for ou o while para exibir de uma maneira agradável 
// o seu cardápio para a sua cliente

/*
console.log("####################################");
console.log("Bem vinda ao restaurante da Lis!!!!");
console.log("----");

for (let i = 0; i < cardapio.length; i++) {
  console.log(`Prato: ${cardapio[i].nome}\n${cardapio[i].descricao}`);
  console.log(
    cardapio[i].quantidade +
      " gramas de pura delicia e nota " +
      cardapio[i].notaDoChef +
      " pelo chef!"
  );
  console.log("--------------------------------");
}
*/

const cardapio = [];

function adicionarDoceAoCardapio(nome, descricao, quantidade, notaDoChef) {
    const doces = {
        nome: nome,
        descricao: descricao,
        quantidade: quantidade,
        notaDoChef: notaDoChef,
    };

    console.log(doces)
}

adicionarDoceAoCardapio("ola")
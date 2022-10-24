/*
  Crie um programa que leia a idade do nadador e o classifique em uma das categorias:
  "Infantil A": 5 a 7 anos
  "Infantil B": 8 a 11 anos
  "Juvenil A": 12 a 13 anos
  "Juvenil B": 14 a 17 anos
  "Adulto": maiores de 18 anos

  Caso a pessoa não tenha idade para nenhuma das categorias 
  o programa deve retornar "Você ainda não pode competir!" 
*/

const idade = 4;

if (idade < 5) {
  console.log("Você ainda não pode competir!")
} else if ((idade >= 5) && (idade <= 7)) {
  console.log("Você vai competir na Infantil A")
} else if ((idade >= 8) && (idade <= 11)) {
  console.log("Você vai competir na Infantil B")
} else if ((idade >= 12) && (idade <= 13)) {
  console.log("Você vai competir na Juvenil A")
} else if ((idade >= 14) && (idade <= 17)) {
  console.log("Você vai competir na Juvenil B")
} else {
  console.log("Você vai competir na categoria Adulto")
}

/*
notas:
foi dificil, estava no caminho certo, mas esqueci totalmente do || e &&
*/

/*
  Parabéns, você evoluiu e depois de empreender em um restaurante, agora você
  tem um banco e gerencia ele. 

  1. Crie um programa que cadastra pessoas (nome, cpf, idade, saldo, confiabilidade(de 0 a 10));
      - Crie um Array Clientes e crie uma função que adiciona clientes.
  2. Crie uma função que verifica pelo cpf se a pessoa é sua cliente.
  3. Crie uma função que debita o saldo da pessoa caso ela saque um valor.
*/

const clientes = [];

function adicionarClientes(nome, cpf, idade, saldo, confiabilidade) {
    const novoCliente = {
        nome: nome,
        cpf: cpf,
        idade: idade,
        saldo: saldo,
        confiabilidade: confiabilidade,
    };

  console.log(`Cliente ${nome} adicionada com sucesso!`);
  clientes.push(novoCliente);
}

adicionarClientes("Artu", 123, 24, "1541548", 7,);
adicionarClientes("Flavia", 321, 19, "647", 9,);

console.log({clientes})

//  2. Crie uma função que verifica pelo cpf se a pessoa é sua cliente.

  function verificarCpf(cpf) {
    for (let i = 0; i < clientes.length; i++) {
      console.log(clientes[i].cpf);

      if (clientes[i].cpf === cpf) {
        console.log(`${clientes[i].nome} é nossa cliente.`);
        return
      }
    }
    console.log("Cliente não existe");
  };
verificarCpf(123)

  // 3. Crie uma função que debita o saldo da pessoa caso ela saque um valor.
function debitar(cpf, valor) {
  for (let i = 0; i < clientes.length; i++) {
    if (cpf === clientes[i].cpf) {
      const novoSaldo = clientes[i].saldo - valor;
      
      clientes[i].saldo = novoSaldo;
      
      console.log(
        `O saldo de ${clientes[i].nome} foi debitado\nSaldo atual: R$${clientes[i].saldo}`
      );
    }
  }
}

console.log(clientes);
debitar(123, 95);
console.log(clientes)
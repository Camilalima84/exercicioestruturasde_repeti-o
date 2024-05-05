let saldo = parseFloat(prompt("informe a quantidade de dinheiro inicial:"))
let opcao = ""// aqui a avariavel tem o valor vazio


do {
    // aqui o saldo que foi guardado na variavel, vai ser mostrado.
   opcao = prompt("Saldo disponível: R$ " + saldo +
   "\n1 - Adicionar dinheiro" +
   "\n2 - Remover dinheiro" +
   "\n3 - Sair") 

   switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
      break
    case "2":
      saldo -= prompt("Informe o valor a ser removido:")
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Entrada inválida.")
      break
  }

} while (opcao !== "3")// aqui se a opção   for 3 ele para 
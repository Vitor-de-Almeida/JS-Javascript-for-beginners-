let quantidadeDeDinheiro = Number(prompt("Quanto de dinheiro você tem:"))
let opcao = 0
do {
    opcao = Number(prompt("Você tem R$ " + quantidadeDeDinheiro +
    "\nDeseja selecionar quais das opções abaixo:" +  
    "\n1 Adicionar" + 
    "\n2. Remover" + 
    "\n3. Sair"))
    switch(opcao) {
        case 1:
            quantidadeDeDinheiro += Number(prompt("Digite o valor a ser adicionado: "))
            break
        case 2:
            quantidadeDeDinheiro -= Number(prompt("Digite o valor a ser subtraido: "))
             break
        case 3:
            alert("Saindo")
            break
        default:
            alert("Opção Inválida")
            break
    }
} while (opcao !== 3)
alert("Operação encerrada com um total de dinheiro sacado no valor de R$ " + quantidadeDeDinheiro)

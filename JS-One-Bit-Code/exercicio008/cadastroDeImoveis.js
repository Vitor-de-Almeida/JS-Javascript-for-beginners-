imoveis = []
let opcao = 0

do {
    opcao = Number(prompt("Seja bem vindo(a) a imobiliária Chuvisco\n" +
    "O total de imóveis cadastrados é: \n" + imoveis.length +
    "1. Cadastro de Imóveis\n" +
    "2. Mostrar todos os Imóveis disponíveis\n" + 
    "3. Sair do menu\n"))

    switch (opcao) {
        case 1:
        const imovel = {}
        imovel.nomeDoProprietario = prompt("Digite o nome do proprietário do imóvel: ")
        imovel.quantidadeDeQuartos = prompt("Digite a quantidade de quartos: ")
        imovel.quantidadeDeBanheiros = prompt("Digite a quantidade de banheiros: ")
        imovel.garagem = prompt("O ímovel possuí garagem? {S/N}: ")
        break
        case 2:
        alert(imoveis)
        break
        case 3:
            alert("Encerrando")
        break
        default:
            alert("Opção inválida")
        break
    }

} while (opcao != 3)
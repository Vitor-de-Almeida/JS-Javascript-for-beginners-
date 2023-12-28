imoveis = []
let opcao = 0

do {
    opcao = Number(prompt("Seja bem vindo(a) a imobiliária Chuvisco\n" +
    "O total de imóveis cadastrados é: " + imoveis.length +
    "\n1. Cadastro de Imóveis\n" +
    "2. Mostrar todos os Imóveis disponíveis\n" + 
    "3. Sair do menu\n"))

    switch (opcao) {

        case 1:

        let imovel = {}
        imovel.nomeDoProprietario = prompt("Digite o nome do proprietário do imóvel: ")
        imovel.quantidadeDeQuartos = prompt("Digite a quantidade de quartos: ")
        imovel.quantidadeDeBanheiros = prompt("Digite a quantidade de banheiros: ")
        imovel.garagem = prompt("O ímovel possuí garagem? {Sim/Não}: ")

        let salvar = prompt("Proprietário: " + imovel.nomeDoProprietario + 
        "\nQuantida de Quartos: " + imovel.quantidadeDeQuartos +
        "\nQuantidade de Banheiro: " + imovel.quantidadeDeBanheiros +
        "\nPossuí garagem: " + imovel.garagem +
        "\nDeseja salvar esse ímovel [Sim / Não] ?")
        
        if (salvar.toLowerCase() === "sim") {
            imoveis.push(imovel)
            alert("Imóvel salvo com sucesso!")
        }
        break

        case 2:

        for (let i = 0; i < imoveis.length; i++) {
            alert([i+1] + "º Imóvel\n" + 
            "Proprietário: " + imoveis[i].nomeDoProprietario + 
            "\nQuantidade de Quartos: " + imoveis[i].quantidadeDeQuartos + 
            "\nQuantidade de Banheiros: " + imoveis[i].quantidadeDeBanheiros + 
            "\nPossui garagem: " + imoveis[i].garagem + "\n\n" )
        }
        break
       
        case 3:
            alert("Encerrando")
        break
        
        default:
            alert("Opção inválida")
        break
    }

} while (opcao !== 3)
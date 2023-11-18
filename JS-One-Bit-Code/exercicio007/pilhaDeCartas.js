let baralho = []
baralhocartas = 'Abra a caixa do Baralho 7 Cassinos. Nele, temos as seguintes cartas:\n'
for (let indice = 0; indice < baralho.length; indice++) {
    baralhocartas += ("- " + baralho[indice] + "\n")
}

do {
    escolha = Number(prompt(
    "Cartas no baralho: " + baralho.length +
    "Escolha a opção desejada:\n" + 
    "1. Adicionar uma carta;\n" + 
    "2. Puxar uma carta;\n" + 
    "3. Sair"))
    
    switch (escolha) {
        case 1: 
        adicionar = String(baralho.push("Carta " + [baralho.length+1]))
        break
        case 2: 
        removerfinal = baralho.pop()
        if (!removerfinal) {
            alert("Não há nenhuma carta no baralho")
        } else {
            alert("A carta puxada é a " + removerfinal)
        }
        break
        case 3:
        break
        default:
        alert("Opção inválida. Tente as opções disponíveis")
        break
    }
    } while (escolha !== 3)
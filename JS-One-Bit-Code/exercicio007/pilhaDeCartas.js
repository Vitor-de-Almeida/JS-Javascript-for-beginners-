let baralho = ["Carta 1", "Carta 2", "Carta 3", "Carta 4", "Carta 5"]
baralhocartas = 'Abra a caixa do Baralho 7 Cassinos. Nele, temos as seguintes cartas:\n'
for (let indice = 0; indice < baralho.length; indice++) {
    baralhocartas += ("- " + baralho[indice] + "\n")
}

alert(baralhocartas)

do {
    escolha = Number(prompt("Escolha a opção desejada:\n" + 
    "1. Adicionar uma carta;\n" + 
    "2. Puxar uma carta;\n" + 
    "3. Sair"))
    
    switch (escolha) {
        case 1: 
        adicionar = String(baralho.push("Carta " + [baralho.length+1]))
        break
        case 2: 
        removerfinal = baralho.pop()
        alert("A carta puxada é a " + removerfinal)
        break
        case 3:
        break
        default:
        alert("Opção inválida. Tente as opções disponíveis")
        break
    }
    } while (escolha !== 3)
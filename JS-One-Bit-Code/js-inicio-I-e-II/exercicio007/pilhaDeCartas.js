let baralho = []
escolha = 0

do {
    escolha = Number(prompt(
    "Cartas no baralho: " + baralho.length +
    "Escolha a opção desejada:\n" + 
    "1. Adicionar uma carta;\n" + 
    "2. Puxar uma carta;\n" + 
    "3. Sair"))
    
    switch (escolha) {
        case 1: 
        novaCarta = prompt("Qual é a carta?")
        baralho.push(novaCarta)
        break
        case 2: 
        removerCartaFinal = baralho.pop()
        if (!removerCartaFinal) {
            alert("Não há nenhuma carta no baralho")
        } else {
            alert("A carta puxada é a " + removerCartaFinal)
        }
        break
        case 3:
        break
        default:
        alert("Opção inválida. Tente as opções disponíveis")
        break
    }
    } while (escolha !== 3)
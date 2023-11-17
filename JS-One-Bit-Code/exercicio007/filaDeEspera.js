let filaDeEspera = []
let escolha = ''
let adicionar = ''
let removerinicio = ''

do {

let gafanhotos = ""
for (let indice = 0; indice < filaDeEspera.length; indice++) {
    gafanhotos += ((indice + 1) + "º  - " + filaDeEspera[indice] + "\n")
}

escolha = Number(prompt("Pacientes:\n" + gafanhotos +
"Escolha a opção desejada:\n" + 
"1. Adicionar\n" + 
"2. Consultar paciente\n" + 
"3. Sair"))

switch (escolha) {
    case 1: 
    adicionar = filaDeEspera.push(prompt('Digite o nome do novo paciente:'))
    break
    case 2: 
    removerinicio = filaDeEspera.shift()
    if (removerinicio) {
        alert("O próximo paciente a ser atendido é o senhor(a) " + removerinicio)
    } else {
        alert("Não há pacientes a serem atendidos!") 
    }
    break
    case 3:
    break
    default:
    alert("Opção inválida. Tente as opções disponíveis")
    break
}

} while (escolha !== 3)




let filaDeEspera = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
let gafanhotos = ''
let escolha = 0
let adicionar = ''
let removerinicio = ''
gafanhotos = ("Fila de Espera do Hospital Pequeno Gafanhoto\n")

for (let indice = 0; indice < filaDeEspera.length; indice++) {
    gafanhotos += ((indice + 1) + "º " + filaDeEspera[indice] + "\n")
}

alert(gafanhotos)

do {
escolha = Number(prompt("Escolha a opção desejada:\n" + 
"1. Adicionar\n" + 
"2. Consultar paciente\n" + 
"3. Sair"))

switch (escolha) {
    case 1: 
    adicionar = filaDeEspera.push(prompt('Digite o nome do novo paciente:'))
    break
    case 2: 
    removerinicio = filaDeEspera.shift()
    alert("O próximo paciente a ser atendido é o senhor(a) " + removerinicio)
    break
    case 3:
    break
    default:
    alert("Opção inválida. Tente as opções disponíveis")
    break
}

} while (escolha !== 3)




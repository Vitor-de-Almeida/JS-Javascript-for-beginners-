const nomeCarro1 = prompt("Escreva o nome do primeiro carro: ")
const velocidadeCarro1 = Number(prompt("Escreva a velocidade do primeiro carro: "))

const nomeCarro2 = prompt("Escreva o nome do segundo carro: ")
const velocidadeCarro2 = Number(prompt("Escreva a velocidade do segundo carro: "))

if (velocidadeCarro1 > velocidadeCarro2) {
    alert(`O carro ${nomeCarro1} é mais rápido!`)
}
else if (velocidadeCarro1 === velocidadeCarro2) {
    alert(`Ambos os carros tem a mesma velocidade!`)
}
else {
    alert(`O carro ${nomeCarro2} é mais rápido!`)
}
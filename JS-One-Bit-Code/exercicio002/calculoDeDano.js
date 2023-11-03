const nomePrimeiroPersonagem = prompt("Digite o nome do primeiro personagem: ")
const poderDeAtaquePrimeiroPersonagem = Number.parseFloat(prompt("Digite o poder de ataque do primeiro personagem: "))

const nomeSegundoPersonagem = prompt("Digite o nome do segundo personagem: ")
const poderDeVidaSegundoPersonagem = Number(prompt("Digite a quantidade de pontos de vida do segundo personagem: "))
const poderDeDefesaSegundoPersonagem = Number(prompt("Digite o poder de defesa do segundo personagem: "))
let poderDeEscudoSegundoPersonagem = prompt("Digite se o segundo personagem possuí escudo: ").toLowerCase()

let dano = 0

if ((poderDeAtaquePrimeiroPersonagem > poderDeDefesaSegundoPersonagem) && poderDeEscudoSegundoPersonagem == 'n' ) {
    dano = poderDeAtaquePrimeiroPersonagem - poderDeDefesaSegundoPersonagem
}

else if ((poderDeAtaquePrimeiroPersonagem > poderDeDefesaSegundoPersonagem) && poderDeEscudoSegundoPersonagem == 's') {
    dano =  (poderDeAtaquePrimeiroPersonagem - poderDeDefesaSegundoPersonagem)/2
}

else if (poderDeAtaquePrimeiroPersonagem < poderDeDefesaSegundoPersonagem) {
    dano =  0
}

if (poderDeEscudoSegundoPersonagem == "n") {
    poderDeEscudoSegundoPersonagem = "Não possui"
}
else if (poderDeEscudoSegundoPersonagem == "s") {
    poderDeEscudoSegundoPersonagem = "Possui"
}

let quantidadeDeVida = poderDeVidaSegundoPersonagem - dano

alert (
    `Primeiro personagem:\nNome: ${nomePrimeiroPersonagem}\nPoder de Ataque: ${poderDeAtaquePrimeiroPersonagem.toFixed(2)}
\nSegundo personagem:\nNome: ${nomeSegundoPersonagem}\nQuantidade de Vida: ${poderDeVidaSegundoPersonagem.toFixed(2)}
Poder de Defesa: ${poderDeDefesaSegundoPersonagem}\nPossuí escudo: ${poderDeEscudoSegundoPersonagem}
\nApós a batalha, o ${nomePrimeiroPersonagem} causou ${dano} de dano ao ${nomeSegundoPersonagem}, o deixando com ${quantidadeDeVida} de vida restante.`
)
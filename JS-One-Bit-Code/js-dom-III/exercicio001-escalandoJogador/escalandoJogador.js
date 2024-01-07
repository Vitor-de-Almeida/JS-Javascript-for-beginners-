function escalarJogador() {

    const posJogador = window.document.querySelector('input#posicao').value
    const nomeJogador = window.document.querySelector('input#nome').value
    const numeroJogador = window.document.querySelector('input#numero')
    const numeroJogadorValor = Number(numeroJogador.value)

    const jogadorUl = window.document.getElementById('jogadoresEscalados')
    const jogadorLi = window.document.createElement('li')
    jogadorLi.id = numeroJogadorValor

    const confirmacao = confirm ('O jogador escalado joga na posição ' +  posJogador + ', conhecido pelo nome de ' +  nomeJogador + ', usando a camisa de número ' +  numeroJogadorValor + '.')

    if (confirmacao) {jogadorLi.innerHTML = 'O jogador escalado joga na posição ' +  posJogador + ', conhecido pelo nome de ' +  nomeJogador + ', usando a camisa de número ' +  numeroJogadorValor + '.' 

    alert('Jogador incluído com sucesso')
    }

    jogadorUl.appendChild(jogadorLi)
}

function removerJogador() {

    const RemoverJogadorUl = window.document.getElementById('jogadoresEscalados')
    const selecionarJogador = window.document.querySelector('input#remover').value
    const jogadorLi = window.document.getElementById(selecionarJogador)

    if (jogadorLi) {
        RemoverJogadorUl.removeChild(jogadorLi) 
    } else {
        alert('Número de camisa inválido ou jogador não encontrado')
    }
}
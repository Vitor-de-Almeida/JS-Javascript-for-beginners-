function escalarJogador() {

    const posJogador = window.document.querySelector('input#posicao').value
    const nomeJogador = window.document.querySelector('input#nome').value
    const numeroJogador = window.document.querySelector('input#numero').value

    const confirmacao = confirm ('Escalar o ' + nomeJogador + ' como ' + posJogador + '?')

    if (confirmacao) {

    const jogadorUl = window.document.getElementById('jogadoresEscalados')
    const jogadorLi = window.document.createElement('li')
    jogadorLi.id = numeroJogador
    alert('Jogador incluído com sucesso')
    jogadorLi.innerHTML = ('O jogador escalado joga na posição ' +  posJogador + ', conhecido pelo nome de ' +  nomeJogador + ', usando a camisa de número ' +  numeroJogador + '.') 
    jogadorUl.appendChild(jogadorLi)

    window.document.querySelector('input#posicao').value = ''
    window.document.querySelector('input#nome').value = ''
    window.document.querySelector('input#numero').value = ''
    }
}

function removerJogador() {

    const selecionarJogador = window.document.querySelector('input#remover').value
    const jogadorLi = window.document.getElementById(selecionarJogador)

    const confirmacao = confirm('Remover o jogador?')

    if (confirmacao) {
        if (jogadorLi) {
            window.document.getElementById('jogadoresEscalados').removeChild(jogadorLi) 
            window.document.querySelector('input#remover').value = '' 
        } else {
            alert('Número de camisa inválido ou jogador não encontrado')
        }
        
    } else {
        alert('Remoção cancelada')
    }
}
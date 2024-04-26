// Elementos do DOM
let playerOneNameInput = document.getElementById("namePlayerOne");
let playerTwoNameInput = document.getElementById("namePlayerTwo");
let buttonPlayersName = document.getElementById('buttonPlayersName');
let buttonText = document.getElementById('table-title');
let XO = document.querySelectorAll('.charKey');

// Configurações iniciais
let playerOneName = '';
let playerTwoName = '';
let currentPlayer = 'X';

// Adiciona o evento de clique ao botão para iniciar o jogo
buttonPlayersName.addEventListener('click', function() {
    // Obtém os nomes dos jogadores
    playerOneName = playerOneNameInput.value;
    playerTwoName = playerTwoNameInput.value;
    
    // Exibe a vez do jogador
    buttonText.innerText = 'É a vez do jogador: ' + playerOneName;
    
    // Inicia o jogo
    playGame();
});

// Função para verificar condições de vitória
function verificarVitoria() {
    // Todas as combinações possíveis para ganhar
    const combinacoesVencedoras = [
        [0, 1, 2], // Linha superior
        [3, 4, 5], // Linha do meio
        [6, 7, 8], // Linha inferior
        [0, 3, 6], // Coluna esquerda
        [1, 4, 7], // Coluna do meio
        [2, 5, 8], // Coluna direita
        [0, 4, 8], // Diagonal principal
        [2, 4, 6]  // Diagonal secundária
    ];
    
    // Verifica cada combinação
    for (const combinacao of combinacoesVencedoras) {
        const [a, b, c] = combinacao;
        // Verifica se há uma linha, coluna ou diagonal com três símbolos iguais
        if (XO[a].innerText && XO[a].innerText === XO[b].innerText && XO[a].innerText === XO[c].innerText) {
            return XO[a].innerText;
        }
    }
    
    return null;
}

// Função para lidar com o jogo
function playGame() {
    // Adiciona evento de clique em cada célula
    XO.forEach((cell, index) => {
        cell.addEventListener('click', function() {
            // Verifica se a célula está vazia e o jogo está ativo
            if (cell.innerText === '' && buttonText.innerText.includes('vez do jogador')) {
                // Atualiza a célula com o símbolo do jogador atual
                cell.innerText = currentPlayer;
                
                // Verifica se há um vencedor
                const vencedor = verificarVitoria();
                if (vencedor) {
                    // Exibe mensagem de vitória
                    buttonText.innerText = `O jogador ${vencedor === 'X' ? playerOneName : playerTwoName} venceu!`;
                } else {
                    // Alterna para o próximo jogador
                    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
                    
                    // Atualiza a vez do jogador atual
                    buttonText.innerText = `É a vez do jogador: ${currentPlayer === 'X' ? playerOneName : playerTwoName}`;
                }
            }
        });
    });
}

const buttonRebuildGame = window.document.getElementById('buttonRebuildGame')
buttonRebuildGame.addEventListener('click', rebuildGame)

function rebuildGame () {

    XO.forEach(function (cell) {
        cell.innerText = ''
    })
}
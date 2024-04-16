let playerOneName = window.document.getElementById("namePlayerOne")
let playerTwoName = window.document.getElementById("namePlayerTwo")

let currentPlayer = 'X'

const buttonPlayersName = window.document.getElementById('buttonPlayersName')
const buttonText = window.document.getElementById('table-title')

const XO = window.document.querySelectorAll('.charKey')


buttonPlayersName.addEventListener('click', function () {
    playerOneName = playerOneName.value
    playerTwoName = playerTwoName.value
    buttonText.innerText = 'É a vez do jogador: ' + playerOneName
    playGame()
})



function playGame () {
    
    XO.forEach(function(clickButtonCell) {
        clickButtonCell.addEventListener('click', function() {
        
            if (currentPlayer === 'X' && clickButtonCell.innerText == '') {
                clickButtonCell.innerText = 'X'
                clickButtonCell.dataset.value = 1
                currentPlayer = 'O'
                buttonText.innerText = 'É a vez do jogador: ' + playerTwoName
                if ()
                
            } else if (currentPlayer === 'O' && clickButtonCell.innerText == '') {
                clickButtonCell.innerText = 'O'
                clickButtonCell.dataset.value = -1
                currentPlayer = 'X'  
                buttonText.innerText = 'É a vez do jogador: ' + playerOneName
            }
    
            })
    }) 

}
let nome = prompt("Qual é o seu nome:")
let count = 0
let cidades = ''
let visita = prompt("Você já viajou e visitou alguma cidade [S/N]:").toLowerCase()
while (visita === 's') {
    let cidade = prompt('Qual cidade você visitou:')
    cidades += " - " + cidade + "\n"
    count++
    visita = prompt("Você já viajou e visitou alguma outra cidade [S/N]:").toLowerCase()
}
alert("O viajante se chama " + nome + 
" e viajou para " + count + 
" cidades, sendo elas:\n" + cidades
)
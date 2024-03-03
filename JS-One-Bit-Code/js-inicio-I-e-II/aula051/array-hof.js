const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  // Map

//   const nomes = personagens.map(function(personagem){
//     return personagem.nome
    
//   })

//   const racas = personagens.map(function(origem){
//     return origem.raca
    
//   })

//   for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
// }

//console.log(nomes)
//console.log(racas)

// Filter

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//     if (personagens[i].raca === "Orc") {
//         orcs.push(personagens[i])
//     }
// }

// const orcs = personagens.filter(function (personagem) {
//     return personagem.raca === "Orc"
// })

// console.log(orcs)


// Reduce

// let soma = 0

// for (let i = 0; i < personagens.length; i++) {
//     soma += personagens[i].nivel
//  }

//  console.log(soma)

// const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
//     return valorAcumulado + personagem.nivel
// }, 0)

// console.log(nivelTotal)

// const racas = personagens.reduce(function (valorAcumulado, personagem) {
//     if (valorAcumulado[personagem.raca]) {
//         valorAcumulado[personagem.raca].push(personagem)
//     } else {
//         valorAcumulado[personagem.raca] = [personagem]
//     }
//     return valorAcumulado
// }, {})

// console.log(racas)

// const racas = {}

// for (let i = 0; i < personagens.length; i++) {

//     const personagem = personagens[i]
    
//     if (racas[personagem.raca]) {
//         racas[personagem.raca].push(personagem);
//     } else {
//         racas[personagem.raca] = [personagem];
//     }
// }

// console.log(racas)

// //sort

// const personagensOrdenados = personagens.slice().sort(function (a, b) {
//     return a.nivel - b.nivel
// })

// console.log(personagens)
// console.log(personagensOrdenados)

// const personagensOrdenados = personagens.slice().sort((a, b) => a.nome.localeCompare(b.nome))

// console.log(personagens)
// console.log(personagensOrdenados)


//////////////////
//////////////////
//////////////////
//////////////////

//Map

// const nomes = []

// for (let i=0; i< personagens.length;i++) {
//     nomes.push(personagens[i].nome)
// }

// console.log(nomes)

const nomes = personagens.map(function (personagem, indice) {
    return personagem.nome
}) 

console.log(nomes)


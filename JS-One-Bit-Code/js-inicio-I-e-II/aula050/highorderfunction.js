// function calcular(a, b, operacao) {
//     console.log("Realizando uma operação")
//     const resultado = operacao(a, b)
//     return resultado
// }

// function somar(x, y) {
//     console.log("Realizando uma soma.")
//     return x + y
// }

// console.log(calcular(3, 5, somar))

// console.log(calcular(8, 4, function(x, y) {
//     console.log("Realizando uma subtração")
//     return x - y
// }))

// function exibirElemento(elemento, indice, array) {
//     console.log({
//         elemento,
//         indice,
//         array
// })
// }

// const lista = ["Maça", "Banana", "Laranja", "Limão"]

// for (let i = 0; i < lista.length; i++) {
//     exibirElemento(lista[i], i, lista)
// }

// lista.forEach(exibirElemento)

// lista.forEach(function (elemento, indice, array) {
//     elemento,
//     indice,
//     array
// })

// const people = [
//     {
//         name: "Vitor",
//         age: 32
//     },
//     {
//         name: "Paula",
//         age: 34
//     },
//     {
//         name: "Anthony",
//         age: 8
//     }
// ]

// people.forEach(function show(element){
//     console.log({element})
// });

// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i], 
//         {element: lista[i],
//         indice: i,
//         array: lista})
// }

// let produtos = [

//     {nomeProduto: 'Celular',
//     valorProduto: 1200.00,
//     porcentagemDesconto: 0.20
//     },

//     {nomeProduto: 'Nootbook',
//     valorProduto: 2500.00,
//     porcentagemDesconto: 0.10
//     },

//     {nomeProduto: 'PC Gamer',
//     valorProduto: 5200.00,
//     porcentagemDesconto: 0.25
//     }
// ]

// produtos.forEach(function desconto(produtoAtual){
//     let produtoComDesconto = produtoAtual.valorProduto - (produtoAtual.valorProduto*produtoAtual.porcentagemDesconto)
//     console.log("O nome do produto é " + produtoAtual.nomeProduto + " e custa " + produtoAtual.valorProduto + ". Com desconto, o valor do produto fica " + produtoComDesconto)
// }) 


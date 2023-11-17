const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar Elementos no final da string
//Push

let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//Adiciona elemento no início
//unshift
arr.unshift("Teste")
console.log(arr)
console.log(tamanho)

// Remover Elementos no final
//pop()
 let ultimoElemento = arr.pop()
 console.log(arr)
 console.log(ultimoElemento)

// Remover Elementos no começo do Array
//shift()
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento
//includes

const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf

const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// slice

const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat 
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//Substituição dos Elementos
//splice - Diferente do pop(), que retorna um elemento (string), o splice retorna uma lista
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cizento", 1, 3, false, true)
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os Elementos do Array

for (let indice = 0; indice < sociedade.length; indice++) {
    const elementos = sociedade[indice]
    console.log(elementos + " se encontra na posição " + indice)
}


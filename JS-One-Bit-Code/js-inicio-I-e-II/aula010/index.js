let nome = "Isaac"

console.log(nome)
console.error(nome)
console.warn(nome)

// window.alert(nome)
nome = window.prompt("Insira seu nome: ")

console.log(nome)

let confirmacao = window.confirm("Confirma essa ação?")

console.log(confirmacao)

window.document.write(`Seu nome é ${nome}`)
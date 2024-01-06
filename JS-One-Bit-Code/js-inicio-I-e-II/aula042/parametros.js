function dobro (x) {
    alert("O dobro de " + x + " é " + (x*2))
}

function dizerOla (nome = "mundo") {
    alert ("Olá, " + nome + "!")
}

function soma(a, b) {
    alert("O resultado da soma é " + (a+b))
}

function criarUsuario (nome = "Paula", email = "Paula@xD.com", senha = "kkqd2", tipo = "admin") {
    let usuario = {
        nome: nome,
        email: email,
        senha, // mesmo que senha: senha
        tipo
    }
    console.log(usuario)
}

// criarUsuario("Vitor", "vitor.renan@gmail.com")

function createuser (user) {
    user.nome
    user.email
    console.log(user)
}

let userData = {
    nome: "Vitinho",
    email:"Vitinho@gmail.com"
}

createuser(userData)
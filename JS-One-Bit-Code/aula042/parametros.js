function dobro (x) {
    alert("O dobro de " + x + " é " + (x*2))
}

function dizerOla (nome = "mundo") {
    alert ("Olá, " + nome + "!")
}

function soma(a, b) {
    alert("O resultado da soma é " + (a+b))
}

function criarUsuario (nome, email, senha, tipo) {
    let usuario = {
        nome: nome,
        email: email,
        senha, // mesmo que senha: senha
        tipo
    }
    console.log(usuario)
    alert(usuario)
}

criarUsuario("Vitor")
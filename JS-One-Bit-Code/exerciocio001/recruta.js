let primeiroNome = prompt("Digite seu primeiro nome: ")

let sobreNome = prompt("Digite seu sobrenome: ")

let campoDeEstudo = prompt("Digite sua área de intenção de estudo: ")

let anoNascimento = prompt("Digite seu ano de nascimento: ")

alert (
    "Recruta cadastrado com sucesso!\n" + 
    "Nome completo: " + primeiroNome + " " + sobreNome + "!" + "\nCampo de estudo: " + campoDeEstudo + "\nIdade: " + (2023 - anoNascimento)
)


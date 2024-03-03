let vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    return textoFinal
  }, "")
  alert(vagasEmTexto)
}

function criarVaga() {

  const nome = prompt("Digite o nome da vaga que quer criar: ")
  const descricao = prompt("Digite a descrição da vaga que quer criar: ")
  const dataLimite = prompt("Digite a data limite para se inscrever na vaga: ")

  if (!nome.trim()) {
    alert(`Você não digitou nenhuma vaga, tente novamente!`)
  } else {
    const confirmacao = confirm(`Vaga criada com sucesso com o nome de: ${nome}\n` + `Descrição: ${descricao}\n` + `Data limite para inscrição: ${dataLimite}`)
    if (confirmacao) {
      const vaga = {nome, descricao, dataLimite}
      vagas.push(vaga)
      alert("Vaga criada")
    }
  }
}

function visualizarVaga () {
  alert("Qual vaga você deseja visualizar?")
}

let opcao 

do  { 
  
opcao = String(prompt("Por favor, escolha a opção que deseja:\n" +
                          "1. Listar vagas disponívies\n" + 
                          "2. Criar uma nova vaga\n" + 
                          "3. Visualizar uma vaga\n" + 
                          "4. Inscrever um cadidato em uma vaga\n" + 
                          "5. Excluir uma vaga\n" + 
                          "6. Sair"))

switch (opcao) {
case "1":
  listarVagas ()
  break
case "2":
  criarVaga()
  break
case "3":
  visualizarVaga ()
  break
case "4":
  alert("")
  break
case "5":
  alert("")
  break
case "6":
  alert("Saindo")
  break
default:
  alert("Opção inválida")
  break
} 
} while (opcao !== "6")


let vagas = []

function listarVagas () {
    vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += (indice + 1) + ". "
    textoFinal += vaga.nomeVaga + "\n"
    textoFinal += "Quantidade de inscritos: " + vaga.candidatos.length + "\n\n"
    return textoFinal
  }, "")
  alert(vagasEmTexto)
}

function criarVaga() {

  const nomeVaga = prompt("Digite o nome da vaga: ")
  const descricao = prompt("Relate a descrição da vaga: ")
  const dataLimiteInscricao = prompt("digite a data limite de inscrição no formato dd/mm/aaaa: ")

  const confirmacaoDeVaga = confirm("A vaga que criou possui os seguintes descritivos?\n" + 
                                    nomeVaga + "\n" +
                                    descricao + "\n" +
                                    dataLimiteInscricao)
  if (confirmacaoDeVaga) {
    const vaga = {
      nomeVaga,
      descricao,
      dataLimiteInscricao,
      candidatos: []
    }
    vagas.push(vaga)
  }
  alert("Vaga criada com sucesso")
}

function visualizarVaga () {

  const indiceVaga = prompt("Digite o índice da vaga na qual deseja visualizar as informações: ")

  const candidatosEmtexto = vagas[indiceVaga-1].candidatos.reduce(function(textoFinal, candidato) {
    textoFinal += candidato + "\n"
    return textoFinal
  }, "")

  alert((indiceVaga) + ". " + vagas[indiceVaga-1].nomeVaga + "\nDescrição da vaga: " + vagas[indiceVaga-1].descricao + "\nData limite para inscrição: " + vagas[indiceVaga-1].dataLimiteInscricao + "\nQuantidade de candidatos: \n" + vagas[indiceVaga-1].candidatos.length + "nome dos candidatos: \n" + candidatosEmtexto)
}

function increverCandidato () {

  const nomeCandidato = prompt("Digite o nome do candidato: ")
  const indiceVaga = prompt("Digite o índice da vaga para qual quer se inscrever")
  const confirmacao = confirm("Seu nome é " + nomeCandidato + " e o índice da vaga para qual escolheu é " + indiceVaga)

  if (confirmacao) {
    vagas[indiceVaga-1].candidatos.push(nomeCandidato)
  }
}

function excluirVaga() {
  const indiceVaga = prompt("Qual número de vaga deseja excluir?")
  const confirmacaoDeExclusao = confirm("Deseja excluir a seguinte vaga\n" + 
  indiceVaga + ". " + vagas[indiceVaga-1].nomeVaga + "\nDescrição da vaga: " + vagas[indiceVaga-1].descricao + "\nData limite para inscrição: " + vagas[indiceVaga-1].dataLimiteInscricao)
  if (confirmacaoDeExclusao) {
    vagas.splice((indiceVaga-1), 1)
    alert("Vaga Excluída")
  }
}

function menu() {

let opcao 

do  { 
  
opcao = String(prompt("Por favor, escolha a opção que deseja:\n" +
                          "1. Listar vagas disponívies\n" + 
                          "2. Criar uma nova vaga\n" + 
                          "3. Visualizar detalhes específicos de uma vaga\n" + 
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
  increverCandidato ()
  break
case "5":
  excluirVaga()
  break
case "6":
  alert("Saindo")
  break
default:
  alert("Opção inválida")
  break
} 
} while (opcao !== "6")

}

function executar () {
  menu()
}

executar()
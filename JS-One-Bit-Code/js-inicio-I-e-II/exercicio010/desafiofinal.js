let vagas = []


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


let opcao = 0
let soma = 0

vagaDisponivel = []

function exibirVagasDeEmprego (nomeDaVaga, indice, quantidadeDeVagas) {
    console.log({
        nomeDaVaga,
        indice,
        quantidadeDeVagas
    })
}

do {
    opcao = Number(prompt("Bem Vindo ao sistema gerenciador de vagas de emprego do google!" + 
    "\nSelecione a opção desejada:" + 
    "\n1. Listar vagas disponíveis" + 
    "\n2. Criar uma nova vaga" + 
    "\n3. Visualizar uma vaga" + 
    "\n4. Inscrever um candidato em uma vaga" + 
    "\n5. Excluir uma vaga" + 
    "\n6. Sair"))

    switch (opcao) {
        case 1:
            if (vagaDisponivel.length > 0) {

                for (let i = 0; i < vagaDisponivel.length; i++) {
                    soma += vagaDisponivel[i].quantidadeDeVagas
                    alert(exibirVagasDeEmprego(i, vagaDisponivel[i], soma))
                    } 
                    
                } else {
                        alert("Não há vagas registradas")
                }   
        break

        case 2:

        break

        case 3:

        break

        case 4:

        break

        case 5:

        break

        default:
        alert("Opção Inválida, tente novamente!")
        break
        
    }


} while (opcao != 6)
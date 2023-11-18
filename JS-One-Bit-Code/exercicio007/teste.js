let filaDeEspera = [];
let escolha = '';
let adicionar = '';
let removerinicio = '';

do {
  let gafanhotos = "";

  for (let indice = 0; indice < filaDeEspera.length; indice++) {
    gafanhotos += ((indice + 1) + "º  - " + filaDeEspera[indice] + "\n");
  }

  rl.question(
    "Pacientes:\n" + gafanhotos +
    "Escolha a opção desejada:\n" +
    "1. Adicionar\n" +
    "2. Consultar paciente\n" +
    "3. Sair",
    (resposta) => {
      escolha = Number(resposta);

      switch (escolha) {
        case 1:
          rl.question('Digite o nome do novo paciente:', (nomePaciente) => {
            adicionar = nomePaciente;
            filaDeEspera.push(adicionar);
            rl.close();
          });
          break;
        case 2:
          removerinicio = filaDeEspera.shift();
          if (removerinicio) {
            console.log("O próximo paciente a ser atendido é o senhor(a) " + removerinicio);
          } else {
            console.log("Não há pacientes a serem atendidos!");
          }
          break;
        case 3:
          rl.close();
          break;
        default:
          console.log("Opção inválida. Tente as opções disponíveis");
          break;
      }
    }
  );

} while (escolha !== 3);
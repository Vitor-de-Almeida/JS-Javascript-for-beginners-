let opcao = 0
do { 
opcao = Number(prompt("Selecione a opção de comida desejada:" + 
"\n1. Hambúrguer" +
"\n2. Pizza" +
"\n3. Panqueca" + 
"\n4. Doce" + 
"\n5. Encerrar"))
if (opcao >= 1 && opcao <= 4) {
    alert("Você escolheu a opcão: " + opcao)
}
} while (opcao >= 1 && opcao <= 4)
alert("Você encerrou o programa")



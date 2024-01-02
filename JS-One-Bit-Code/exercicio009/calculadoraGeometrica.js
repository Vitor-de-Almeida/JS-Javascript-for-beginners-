let opcao = parseFloat(prompt("Bem vindo a calculadora de formas geométricas!" + 
"\nPara calcular a área da forma geométrica desejada, selecione a opção que desejar:" + 
"\n1. Área do triângulo;" + 
"\n2. Área do retângulo;" + 
"\n3. Área do quadrado;" + 
"\n4. Área do trapézio;" + 
"\n5. Área do círculo;" + 
"\n6. Sair."))

switch(opcao) {
    case 1:

    let base = parseFloat(prompt("Digite o valor da base do triângulo: "))
    let altura = parseFloat(prompt("Digite p valor da altura do triângulo: "))
        
    function areaTriangulo (base, altura) {
        areaDoTriangulo = (base * altura)/2
        return areaDoTriangulo
    }

    alert("A área da figura geométrica é : " + areaTriangulo(base, altura))

    break

    case 2:
        
    let baseRetangulo = parseFloat(prompt("Digite o valor da base do triângulo: "))
    let alturaRetangulo = parseFloat(prompt("Digite p valor da altura do triângulo: "))
        
    function areaTriangulo (baseRetangulo, alturaRetangulo) {
        areaDoTriangulo = baseRetangulo * alturaRetangulo
        return areaDoTriangulo
    }

    alert("A área da figura geométrica é : " + areaTriangulo(baseRetangulo, alturaRetangulo))
    break
    case 3:
        alert("Olá")
    break
    case 4:
        alert("Olá")
    break
    case 5:
        alert("Olá")
    break
    case 6:
        alert("Saindo")
    break
    default:
        alert("Opção inválida")
    break
}
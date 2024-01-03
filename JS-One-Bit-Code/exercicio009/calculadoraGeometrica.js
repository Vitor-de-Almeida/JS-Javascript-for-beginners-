let opcao = 0

do {

    opcao = parseFloat(prompt("Bem vindo a calculadora de formas geométricas!" + 
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
            let areaDoTriangulo = (base * altura)/2
            return areaDoTriangulo
        }

        alert("A área da figura geométrica é : " + areaTriangulo(base, altura))

        break

        case 2:
            
        let baseRetangulo = parseFloat(prompt("Digite o valor da base do retângulo: "))
        let alturaRetangulo = parseFloat(prompt("Digite p valor da altura do retângulo: "))
            
        function areaRetangulo (baseRetangulo, alturaRetangulo) {
            areaDoRetangulo = baseRetangulo * alturaRetangulo
            return areaDoRetangulo
        }

        alert("A área da figura geométrica é: " + areaRetangulo(baseRetangulo, alturaRetangulo))

        break

        case 3:
        
        let lado = parseFloat(prompt("Digite o valor do lado do quadrado"))

        function areaQuadrado(lado) {
            return lado*lado
        }

        alert("A área da figura geométrica é: " + areaQuadrado(lado))

        break

        case 4:

        let baseMaior = parseFloat(prompt("Digite o valor da base maior do trapézio: "))
        let baseMenor = parseFloat(prompt("Digite o valor da base menor do trapézio: "))
        let alturatrap = parseFloat(prompt("Digite o valor da altura do trapézio: "))

        function areaTrapezio() {
            return (baseMaior + baseMenor) * alturatrap / 2
        }

        alert("A área da figura geométrica é: " + areaTrapezio(baseMaior, baseMenor))

        break
        
        case 5:
        
        let raio = parseFloat(prompt("Digite o valor do raio do círculo:"))

        function areaCirculo() {
            aCirculo = 3.14*(raio**2)
            return aCirculo
        }

        alert("A área da figura geométrica é: " + areaCirculo(raio))

        break

        case 6:

            alert("Saindo")

        break

        default:

            alert("Opção inválida")

        break
    }

} while (opcao !== 6)
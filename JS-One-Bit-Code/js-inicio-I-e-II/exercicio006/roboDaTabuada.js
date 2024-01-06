let num = String(prompt('Digite um número para calcular sua tabuada de 1 a 20: '))
alert('O número digitado foi ' + num + '\nA sua tabuada é a seguinte: \n')
tabuada = ''
for (count = 0; count <= 20; count++) {
    tabuada += (count + ' x ' + num + ' = ' + count*num + '\n')
}
alert('Resultado da tabuada de ' + num + ":\n\n" + tabuada)
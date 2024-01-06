function calcular () {

    let valor = window.document.querySelector('input#valor').value
    valor = Number(valor)

    let opMedida = window.document.querySelector('input#opMedida').value.toLowerCase()

    switch(opMedida) {
        case "km":
            res.innerHTML = `O resultado desta operação é ${valor/1000} km!`
            break
        case "mm":
            res.innerHTML = `O resultado desta operação é ${valor*1000} mm!`
            break
        default:
            res.innerHTML = `Valor incorreto. Selecione a unidade de medida correta para conversão!`
            break
    }

    
}





















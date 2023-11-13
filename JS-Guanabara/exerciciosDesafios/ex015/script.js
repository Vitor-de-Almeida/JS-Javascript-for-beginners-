function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <3) {
                img.setAttribute('src', 'homem-bebe.jpg' )
            } else if(idade >=3 && idade <10) {
                img.setAttribute('src', 'homem-crianca.jpg' )
            } else if(idade >=10 && idade <18) {
                img.setAttribute('src', 'homem-jovem.jpg' )
            } else if(idade >=18 && idade <60) {
                img.setAttribute('src', 'homem-adulto.jpg' )
            } else {
                img.setAttribute('src', 'homem-idoso.jpg' )
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <3) {
                img.setAttribute('src', 'mulher-bebe.jpg' )
            } else if(idade >=3 && idade <10) {
                img.setAttribute('src', 'mulher-crianca.jpg' )
            } else if(idade >=10 && idade <18) {
                img.setAttribute('src', 'mulher-jovem.jpg' )
            } else if(idade >=18 && idade <60) {
                img.setAttribute('src', 'mulher-adulto.jpg' )
            } else {
                img.setAttribute('src', 'mulher-idoso.jpg' )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
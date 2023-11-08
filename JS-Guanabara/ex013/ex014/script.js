function carregar () {

let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >=0 && hora <12) {
    // Bom dia!
    img.src = 'manha.jpg'
    document.body.style.background = '#e2cd9f'
}   else if (hora >=12 && hora <= 18) {
    //Boa tarde!
    img.src = 'tarde.jpg'
    document.body.style.background = '#919795'
}   else {
    //Boa noite!
    img.src = 'noite.jpg'
    document.body.style.background = '#1C232E'
}

}

//#464A4C
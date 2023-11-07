function carregar () {


let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let horaatual = new Date().getHours()
msg.innerHTML = `Agora são ${horaatual} horas`
if (horaatual >=0 && hora <12) {
    // Bom dia!
    img.src = 'manha.png'
}   else if (horaatual >=12 && hora < 18) {
    //Boa tarde!
}   else {
    //Boa noite!
}

}
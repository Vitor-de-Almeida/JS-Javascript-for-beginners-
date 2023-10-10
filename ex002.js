// var livetime = new Date()
var time = new Date().getHours()
console.log(`Now are exactly ${time} o'clock!`)
if (time < 6) {
    console.log(`Good evening!`)
}   else if (time >= 6 && time < 12) {
    console.log(`Good morning!`)
}   else if (time >= 12 && time < 18) {
    console.log(`Good afternoon!`)
}   else {
    console.log(`Good night!`)
}

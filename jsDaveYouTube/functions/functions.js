// const getUserNameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"))
// }
// console.log(getUserNameFromEmail("vitor.renan@pm.pr.gov.br"))

// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"))
// }

// console.log(getUserNameFromEmail("Trubi001@gmail.com"))

// const ProperCase = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }

// console.log(ProperCase("vItoR"))

var x = 1
let y = 2 
const z = 3

console.log(`global: ${x}`)
console.log(`global: ${y}`)
console.log(`global: ${z}`)

function myFunc () {
    var x = 15
    const z = 4
    {
        var x = 11
        const z = 6
        console.log(`block: ${x}`)
        console.log(`block: ${y}`)
        console.log(`block: ${z}`)  
    }
    var x = 15
    const z = 4
    console.log(`function: ${x}`)
    console.log(`function: ${y}`)
    console.log(`function: ${z}`)
}

myFunc()
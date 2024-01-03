// function dividir(num) {
//     console.log(num)
//     if (num % 2 === 0) {
//         dividir(num / 2)
//     } else {
//         return (num)
//     }
// }

// dividir(256)

// function dobrar(num) {
//     console.log(num)
//     if (num < 100000) {
//         dobrar(num*2)
//     }
// }

//dobrar(2) -> 1

// function fatorial (num) {
//     console.log("Número: " + num)
//     if (num === 0 || num === 1) {
//         return 1
//     } else {
//         console.log(num + " * !" + (num - 1))
//         return num*fatorial(num-1)
//     }
// }

// console.log(fatorial(5))

num = 5
console.log(num)
while (num > 0) {
    num = num *(num-1)
    console.log(num)
}


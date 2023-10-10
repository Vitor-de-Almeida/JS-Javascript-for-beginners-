var age = 21
console.log(`You have ${age} years.`)
if (age < 16) {
    console.log(`Not able to vote!`)
} else if (age <18 || age > 65) {
    console.log(`Vote is an option!`)
}   else {
    console.log(`Vote is mandatory!`)
}

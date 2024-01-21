// const myObj = {name: "Vitor"}

// const anotherObj = {
//     alive: true,
//     answer: 42,
//     hobbies: ["Eat", "Sleep", "Code"],
//     beverage: {
//         morning: "Coffee", 
//         afternoon: ["Iced Tea", "Beer", "Meal"]
//     },
//     action: function() {
//         return `Time for ${this.beverage.morning}` // this referers to the object!
//     }
// }

// console.log(anotherObj.hobbies[1])
// console.log(anotherObj.answer)
// console.log(anotherObj["answer"])

// console.log(anotherObj.beverage.morning[2])
// console.log(anotherObj.beverage.afternoon[2])

// console.log(anotherObj.action())

//---------------------------------

// const vehicle = {
//     wheels: 4,
//     engine: function() {
//         return "Vrroooom!"
//     }
// }

// const truck = Object.create(vehicle)
// truck.doors = 2

// console.log(truck)
// console.log(truck.wheels) //Inheritance
// console.log(truck.engine())

// const car = Object.create(vehicle)
// car.doors = 4;
// car.engine = function () {
//     return "Whoooosh!"
// }

// console.log(car.engine())
// console.log(car.wheels)

// const tesla = Object.create(car)

// console.log(tesla.wheels)
// console.log(tesla.engine())

// tesla.engine = function () {
//     return "Shhhh..."
// }

// console.log(tesla.engine())

//---------------------------------

// const myName = {name:"Vitor"}

// myName.age = 2

// myName.profession = [{
//     homeoffice: "enginner", 
//     present: "company"
// }, "devoloper"]

// console.log(myName.profession[0].homeoffice)

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}

delete band.drums;
console.log(band.hasOwnProperty("drums"))

console.log(band)

console.log(Object.keys(band))
console.log(Object.values(band))

const singers = []

for (let key in band) {
    console.log(`On ${key}, it's ${band[key]}`)
    singers.push(band[key])
}




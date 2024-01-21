//Arrays

// const myArray = [];

// Add elements to an array

// myArray[0] = "Vitor"
// myArray[1] = 1001
// myArray[2] = false

// Refer to an array
// console.log(myArray)

// Length property

// console.log(myArray.length)

// Last element in an array

// console.log(myArray[myArray.length - 1])

// Add - Pop Something to an Array

// myArray.push("School") // Add - Instead we can use unshift for add something to the beginning of an Array

// console.log(myArray)

// const lastItem = myArray.pop(); // Erase - Instead we can use shift for remove something from the front of an Array

// console.log(myArray)

// console.log(lastItem)


// const myArray2 = [];

// Add elements to an array

// myArray2[0] = "Vitor"
// myArray2[1] = 1001
// myArray2[2] = false

// delete myArray2[1] // Delete directly the value, not the position

// console.log(myArray2)

// myArray2.splice(1, 1) // Cab be used to delete the position, to replace across: myArray2.splice(1, 1, 42) or myArray2.splice(1, 0, 42)

// console.log(myArray2)

//const myArray = ['A', 'B', 'C', 'D', 'E', 'F']

// const newArray = myArray.slice(2, 5) // Cut the array into that positions

// myArray.reverse() // Reverse the Array

//const newString = myArray.join() // Creates a string with all the elements of the Array

//const newArray = newString.split(",") // Creates a new Array

//console.log(newArray)

// const myArrayA = ['A', 'B', 'C']

// const myArrayB = ['D', 'E', 'F']

// // const newArray = myArrayA.concat(myArrayB)

// const newArray = [...myArrayA, ...myArrayB]

// console.log(newArray)

const equipShelfA = ["baseball", "football", "volleyball"]
const equipShelfB = ["basketball", "golf balls", "tennis balls"]

const clothesShelfA = ["tank tops", "t-shrits", "jerseys"]
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"]

const equipDept = [equipShelfA, equipShelfB]
const clothesDept = [clothesShelfA, clothesShelfB]

console.log(equipDept[0][1])

// console.log(equipDept)
// console.log(clothesDept)

const sportsStore = [equipDept, clothesDept]

console.log(sportsStore)

console.log(sportsStore[1][0][2])

console.log(sportsStore[1][1][0])


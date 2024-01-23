class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize
        this.crust = "original"
    }

    getCrust()  {
        return this.crust
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
}

// const myPizza = new Pizza('pepperoni', 'small')

// myPizza.setCrust("thin")
// myPizza.bake()
// myPizza.setToppings("sausage")
// myPizza.setToppings("olives")

// console.log(myPizza.getCrust())
// console.log(myPizza.getToppings())

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize)
        this.type = "The Works"
    }
}
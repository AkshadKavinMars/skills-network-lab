class person {
    constructor(firstName,lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    
    getResult() {
        console.log(`First Name - ${this.firstName}, Last Name - ${this.lastName}`)
        
    }
}

const p1 = new person()
p1.firstName = "Akshad"
p1.lastName = "Kavin"
p1.getResult()
class Car {
    constructor(model,year,mode) {
        this.model = model
        this.year = year
        this.mode = mode
    }

    getCar() {
        console.log(`Car Model - ${this.model}, Year - ${this.year}, mode - ${this.mode}`)
    }
}

const c = new Car()
c.model = "Maruti DZire"
c.year = "2026"
c.mode = "Manual"
c.getCar()

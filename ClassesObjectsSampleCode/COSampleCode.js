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
console.log(p1.firstName); console.log(p1.lastName)


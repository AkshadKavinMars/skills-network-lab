// Using forEach function [ Printing Names]

const name = [
    {"name" : "Akshad" , "class" : "M.Tech"},
    {"name" : "Varun" , "class" : "B.Tech"}
    ]
name.forEach(names => console.log(names.name))

// Using For Loop [Printing Class]

for(let i = 0 ; i<name.length ; i++) {
    console.log(name[i].class)
}

// Creating an Array and Iterating it

class StuName {
    constructor(name,classs) {
        this.name = name
        this.classs = classs
    }
    getinfo() {
        console.log(`Name of the student - ${this.name} , Class - ${this.classs}`)
    }
              }
    const n1 = new StuName()
    const n2 = new StuName()
    n1.name = "Akshad"
    n1.classs = "M.Tech"
    n2.name = "Varun"
    n2.classs = "B.Tech"
    n1.getinfo() 
    n2.getinfo()
    
// Store in array
const students = [n1, n2];

// Access
students.forEach(student => student.getinfo());

// Using Push Operation
const Car = [{"Name" : "Yamaha" , "Model" : "DZire" , "Priority" : 3} , {"Name" : "Porsche" , "Model" : "S-Series" , "Priority" : 1 } , {"Name" : "Kia" , "Class" : "B" , "Priority" : 4}]

console.log("Before Push Operation - [Length of the array] - ")
console.log(Car.length)
console.log("After Push Operation - Length of the Array -")
Car.push({"Name": "BMW" , "Class" :"A", "Priority" : 2})
console.log(Car.length)

// Pop Operation
console.log(Car.pop())

// Updating Array once again using Pop Method
Car.push({"Name": "BMW" , "Class" :"A", "Priority" : 2})

// Filtering [Best Priority Cars]
const filteredCar = Car.filter(cars => cars.Priority < 3);
console.log(filteredCar)

// Mapping only Car Names
const CarNames = Car.map(cars => cars.Name)
console.log(CarNames)

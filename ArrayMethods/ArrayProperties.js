//Using forEach function [ Printing Names]

const name = [
    {"name" : "Akshad" , "class" : "M.Tech"},
    {"name" : "Varun" , "class" : "B.Tech"}
    ]
name.forEach(names => console.log(names.name))

//Using For Loop [Printing Class]

for(let i = 0 ; i<name.length ; i++) {
    console.log(name[i].class)
}

//Creating an Array and Iterating it

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
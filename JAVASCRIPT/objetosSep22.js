class People{

    constructor(name, age){
        this.name = name
        this.age = age
    }

    apresentar(){
        console.log(`${this.name}, ${this.age} years old.`)
    }

    caminhar(){
        console.log(`${this.name} is walking`)
    }
}

const person1 = new People ('John', 19)

person1.apresentar()
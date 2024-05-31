class Person {

    name: string

    constructor(name: string){
        this.name = name
    }

    sayHelloWorld(){
        console.log(`${this.name}`)
    }

}

const person1 = new Person("Hello World!")
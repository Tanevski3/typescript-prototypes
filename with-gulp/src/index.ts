import { sayHello, showHello } from "./greet";

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitials: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitials + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    console.log("Hello " + person.firstName + ". Greetings from typescript");
}

greeter(new Student("Marjan", "MT", "Tanevski"));

console.log(sayHello("marjan"));

showHello("greeting", "TypeScript");


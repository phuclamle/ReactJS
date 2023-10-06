class Person{
    constructor(name) {
        this._name = name;  
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
    walk(){
        console.log(`${this._name} is walking`);
    }
}

class Programmer extends Person{
    constructor(name,programmingLanguage){
        super(name);
        this._programmingLanguage = programmingLanguage;
    }
    get programmingLanguage(){
        return this._programmingLanguage;
    }
    set programmingLanguage(newLanguage){
        this._programmingLanguage = newLanguage;
    }

    writeCode(){
        console.log(`${this._name} is writing code in ${this._programmingLanguage}`);
    }
}

let person = new Person;
person.name = "PhucLamLe";
console.log(person.name);
person.walk();

let programmer = new Programmer("PhucLamLe");
programmer.programmingLanguage = "JS";
console.log(programmer.programmingLanguage);
programmer.writeCode();


 
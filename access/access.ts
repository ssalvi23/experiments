class Person {
    public name: string;
    protected age: number;
    private gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public introduce(): void {
        console.log(`Hello, I'm ${this.name}, ${this.age} years old.`);
    }

    protected celebrateBirthday(): void {
        this.age++;
        console.log(`Happy birthday! Now I'm ${this.age} years old.`);
    }

    private revealGender(): void {
        console.log(`I am ${this.gender}.`);
    }
}

const person = new Person("Alice", 30, "female");
console.log(person.name); // Accessible
// console.log(person.age); // Not accessible due to protected access modifier
// console.log(person.gender); // Not accessible due to private access modifier
person.introduce(); // Accessible
// person.celebrateBirthday(); // Not accessible due to protected access modifier
// person.revealGender(); // Not accessible due to private access modifier



var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.introduce = function () {
        console.log("Hello, I'm ".concat(this.name, ", ").concat(this.age, " years old."));
    };
    Person.prototype.celebrateBirthday = function () {
        this.age++;
        console.log("Happy birthday! Now I'm ".concat(this.age, " years old."));
    };
    Person.prototype.revealGender = function () {
        console.log("I am ".concat(this.gender, "."));
    };
    return Person;
}());
// class Employee extends Person {
//     private employeeId: string;
//     constructor(name: string, age: number, gender: string, employeeId: string) {
//         super(name, age, gender);
//         this.employeeId = employeeId;
//     }
//     public work(): void {
//         console.log(`${this.name} is working.`);
//     }
//     public celebrateBirthday(): void {
//         super.celebrateBirthday(); // Call protected method from base class
//         console.log("I'm celebrating my birthday at work!");
//     }
//     public getEmployeeId(): string {
//         return this.employeeId;
//     }
// }
var person = new Person("Alice", 30, "female");
console.log(person.name); // Accessible
// console.log(person.age); // Not accessible due to protected access modifier
// console.log(person.gender); // Not accessible due to private access modifier
person.introduce(); // Accessible
// person.celebrateBirthday(); // Not accessible due to protected access modifier
// person.revealGender(); // Not accessible due to private access modifier

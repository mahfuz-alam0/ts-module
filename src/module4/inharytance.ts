class Persone {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    maekSleep(hourse: number): string {
        return `${this.name} sleep ${hourse} hourse`;
    }

}

class Student extends Persone {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}

const student1 = new Student('Rahim', 12, 'Dhaka');

class Teacher extends Persone {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    takeClass(classes: number): string {
        return `${this.name} will take ${classes} class`;
    }
}
type Alphanumeric = number | string

function add(a: Alphanumeric, b: Alphanumeric): Alphanumeric {
    if (typeof a === 'string' || typeof b === 'string') {
        return `${a}${b}`
    }
    return a + b
}

type NormalUserType = {
    name: string,
}

type AdminUserType = {
    name: string,
    role: string,
}

const getUser = (user: NormalUserType | AdminUserType): string => {
    if ('role' in user) {
        return `Welcome ${user.name} as ${user.role}`;
    } else {
        return `Welcome ${user.name}`;
    }
}

const normalUser: NormalUserType = { name: 'Rahim' };
const adminUser: AdminUserType = { name: 'Karim', role: 'Admin' };


class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound(sound: string): string {
        return `The ${this.name} says ${sound}`;
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeBark(): string {
        return 'Woof! Woof!';
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeMeow(): string {
        return 'Meow! Meow!';
    }
}

function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog;
}

function isCat(animal: Animal): animal is Cat {
    return animal instanceof Cat;
}

function getAnimaleSound(animal: Animal): string {
    if (isDog(animal)) {
        return animal.makeBark();
    } else if (isCat(animal)) {
        return animal.makeMeow();
    } else {
        return animal.makeSound('sound');
    }
}

const dog = new Dog('shefart', 'Dog');
const cat = new Cat('parshian', 'Cat');

getAnimaleSound(dog);
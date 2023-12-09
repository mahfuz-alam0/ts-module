"use strict";
class animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`the ${this.name} says ${this.sound}`);
    }
}

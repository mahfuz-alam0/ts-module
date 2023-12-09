class animal {

    constructor(
        public name: string,
        public species: string,
        public sound: string
    ) {}

    public makeSound() {
        console.log(`the ${this.name} says ${this.sound}`);
    }
}
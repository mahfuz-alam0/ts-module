"use strict";
//normal function
function add(num1, num2) {
    console.log(num1 + num2);
}
// add(1, 2);
//arry function
const add2 = (num1, num2) => num1 + num2;
const arr = [1, 5, 3];
const newArry = arr.map((element) => element * element);
const person = {
    name: 'sakib',
    balance: 5000,
    addBalance(amount) {
        return this.balance += amount;
    }
};
//spread operator
const myFriend = ['sakib', 'tamim', 'mashrafi'];
const newFriend = ['musfiq', 'mahmudullah', 'sakib'];
const myBestFriend = {
    fullName: 'sakib',
    age: 25
};
myFriend.push(...newFriend);
//rest operator
// const greetFriend = (...friends: string[]): void => console.log(`hello ${friend1}\n ${friend2}\n ${friend3}`);
const greetFriend = (...friends) => friends.forEach(friend => console.log(`hello ${friend}`));
// greetFriend('sakib', 'tamim', 'mashrafi');
const [bestFriend] = myFriend;
const { fullName, age } = myBestFriend;
// console.log(bestFriend, age);

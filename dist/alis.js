"use strict";
const crush1 = {
    name: 'Mahi',
    age: 25,
    profession: 'actor',
    address: 'dhaka'
};
const crush2 = {
    name: 'Hafsa',
    profession: 'Student',
    address: 'Araihazar'
};
const isCrushMarraid = false;
const courseName = 'Next Level Web Development';
const calculate = (number1, number2, oparation) => {
    return oparation(number1, number2);
};
calculate(5, 7, (x, y) => x + y);
calculate(5, 7, (x, y) => x - y);
calculate(10, 2, (x, y) => x / y);

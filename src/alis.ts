type CrushType =  {
    name: string,
    age?: number,
    profession: string,
    address: string
}

const crush1:CrushType = {
    name: 'Mahi',
    age: 25,
    profession: 'actor',
    address: 'dhaka'
}

const crush2:CrushType = {
    name: 'Hafsa', 
    profession: 'Student',
    address: 'Araihazar'
}

type CrushMarrageType = boolean

const isCrushMarraid: CrushMarrageType = false;

type CourseType = string;

const courseName: CourseType = 'Next Level Web Development';

type oparationType = (x: number, y: number) => number;

const calculate = (
    number1: number,
    number2: number,
    oparation: oparationType
) => {
    return oparation(number1,number2);
} 

calculate(5, 7, (x, y) => x + y);
calculate(5, 7, (x, y) => x - y);
calculate(10, 2, (x, y) => x / y);
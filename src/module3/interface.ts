type User = {
    name: string;
    age: number;
}

interface IUser {
    name: string;
    age: number;
}

interface IExtendedUser extends IUser { 
    role: string;
}

const userWithAlias: User = {
    name: "John",
    age: 30
}

const userWithInterface: IUser = {
    name: "John",
    age: 30
}

const userExtendInterface: IExtendedUser = {
    name: "John",
    age: 30,
    role: "admin"
}

type rollNumber = number;
type addNumberType = (num1: number, num2: number) => number;

interface IAddNumber {
    (num1: number, num2: number): number;
}

const addNumbers: addNumberType = (num1, num2) => num1 + num2;

type rollNumbersType = number[];
interface IRollNumbers {
    [index: number]: number;
}

const rollNumbers:rollNumbersType = [1,4,5]
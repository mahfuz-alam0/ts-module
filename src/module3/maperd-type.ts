const arrayOfNumbers = [1, 2, 3, 4, 5];

const arrayOfStrings = arrayOfNumbers.map((item) => item.toString());

type Volume = {
    height: number;
    width: number;
    depth: number;
}
type ReadonlyType = {
    readonly height: number;
    readonly width: number;
}

type Area<T> = {
    // [key in keyof Volume    ]: Volume[key];
    [key in keyof T]: T[key];
}

type AreaString = {
    height: string;
    width: string;
}

const ractangularArea: Volume = {
    height: 20,
    width: 30,
    depth: 10,
}

const area1: Area<{height: number, width: number}> = {height: 10, width: 20};

type A = Volume['height']
type B = keyof Volume
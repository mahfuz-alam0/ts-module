let emne: any;

emne = "Next Level Web Development";

(emne as string).length;
<string>emne.length;

function kgToGram(param: string | number): string | number{
    if (typeof param === "string") {
        const value = parseFloat(param)*1000;
        return `the converted result is ${value}`;
    } else {
        const value = param*1000;
        return `the converted result is ${value}`;
    }
}

const resultToNumber = <number>kgToGram(2) ;
const resultToString = <string>kgToGram("2");

type CustomErrorType = {
    message: string;
}

try {
    
} catch (err) {
    console.log((err as CustomErrorType).message)
}
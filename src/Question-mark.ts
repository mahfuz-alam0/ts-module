// ternary oparator

const age2: number = 18

const isAdult = age2 >= 18 ? 'adult' : 'child';


// Nullish Coalescing oparator
// null and undefined

const isAuthorizedUser = '';
const userName = isAuthorizedUser ?? 'guest user';
const userName2 = isAuthorizedUser ?isAuthorizedUser: 'guest user';
console.log({ userName }, { userName2 })

type Manush = {
    name: string,
    age: number,
    address: {
        city: "No City",
        country: "No Country",
        home?: ''
    }
}

const manush: Manush = {
    name: 'sakib',
    age: 25,
    address: {
        city: "No City",
        country: "No Country",
    }
}

const home = manush.address?.home ?? 'no home';
type persone = {
    name: string,
    age: number,
    address: string,
}

type newType = 'name' | 'age' | 'address';

type newTypeofusingKey = keyof persone;

// const a: newType = 'name';

// const b: newTypeofusingKey = 'name';

function getProperty<X,Y extends keyof X>(obj: X, key: Y) {
 obj[key]   
}

const property = getProperty({ name: 'Mahfuz Alam', age: 20, address:'kuripara'},'name')

// const a = {
    // name: 'persian',
    // age: 20,
// }
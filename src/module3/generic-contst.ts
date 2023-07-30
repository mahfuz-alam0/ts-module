type MendetoryType = { name: string, age: number, salary: number }
interface MendetoryInterface  { name: string, age: number, salary: number }

// both can be used 

type MyInfoType = {
    name: string,
    age: number,
    salary: number,
    other1: boolean,
    other2: null,
}

const myInfo: MyInfoType = {
    name: 'persian',
    age: 20,
    salary: 100000,
    other1: false,
    other2: null,
}

const crush_generic = 'kat winstan'



const addmyCrushMain = <T extends MendetoryType>(myInfo: T) => {
    return {
        ...myInfo,
        crush: crush_generic
    }
}

const result8 = addmyCrushMain<MyInfoType>(myInfo)


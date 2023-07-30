// // arrow function generic 
// const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
//     return [param1, param2]
// }

// const result1 = createArray<string, string>('persian', 'Garman')
// const result2 = createArray<boolean, Array<string>>(true, ['Bangladesh'])
// const result3 = createArray<number, boolean>(1, true)
// const result4 = createArray<object, boolean>({ name: 'persian' }, true)

// type Name = { name: string }

// const result5 = createArray<Name, boolean>({ name: 'persian' }, true);

// console.log(result5)

// // spread operator

// const crush_generic = 'kat winstan'

// const myInfo = {
//     name: 'persian',
//     age: 20,
//     salary: 100000,
// }

// const newData = {
//     ...myInfo,
//     crush: crush_generic
// }

// const addmyCrushMain = <T>(myInfo: T) => {
//     return {
//         ...myInfo,
//         crush: crush_generic
//     }
// }

// const addmyCrushMain1 = <T>(myInfo: T) => {
//     return {
//         ...myInfo,
//         crush: crush_generic
//     }
// }

// const addMyCrushMain = (myInfo: object) => {
//     const crush = 'kat winstan'
//     const newData = { ...myInfo, crush }
//     return newData
// }

// const result6 = addMyCrushMain(myInfo)
// const result7 = addMyCrushMain(myInfo)
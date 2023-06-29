// type GenericTuple<T, U> = [T, U]

// const relation: GenericTuple<string, string> = ['persian', 'cat']

// type RelationWithSelaryType={name:string, selary:number}

// const relationWithSelary: GenericTuple<RelationWithSelaryType, string> = [{ name: 'John', selary: 1000 }, "cat"]

// const relationWithSelary2: GenericTuple<RelationWithSelaryType, string> = [{ name: 'John', selary: 1000 }, "cat"]

// type GenericArray<T> = Array<T>

// const rollNumbers1: GenericArray<number> = [44, 56, 87]
// const rollNumbers2: GenericArray<string> = ['44', '56', '87']

// type NameRollType = {name:string, roll:number}

// const userNameAndRollNumber: GenericArray<NameRollType> = [{ name: 'John', roll: 1 }, { name: 'Doe', roll: 2 }]


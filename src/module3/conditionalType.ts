// 1. type is dependent on another type

type a1 = null;
type a3 = undefined;
type a4 = number

type a2 = a1 extends string ? string : null;


// nasted type 

type d = a1 extends null
    ? null
    : a3 extends number
    ? number
    : a4 extends null
    ? null
    : never;

type shaikh = {
    wife1: string;
    wife2: string;
}

type checkingProparty<T, K> = K extends keyof shaikh ? true : false;

type check = checkingProparty<shaikh, 'wife'>


type bandhobi = "koly" |"akter" | "sadia"

type removeBandhobi<T, K> = T extends K ? never : T;

type checkBandhobi = removeBandhobi<bandhobi, "sadia">


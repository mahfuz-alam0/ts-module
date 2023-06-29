"use strict";
// ternary oparator
var _a, _b;
const age2 = 18;
const isAdult = age2 >= 18 ? 'adult' : 'child';
// Nullish Coalescing oparator
// null and undefined
const isAuthorizedUser = '';
const userName = isAuthorizedUser !== null && isAuthorizedUser !== void 0 ? isAuthorizedUser : 'guest user';
const userName2 = isAuthorizedUser ? isAuthorizedUser : 'guest user';
console.log({ userName }, { userName2 });
const manush = {
    name: 'sakib',
    age: 25,
    address: {
        city: "No City",
        country: "No Country",
    }
};
const home = (_b = (_a = manush.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'no home';

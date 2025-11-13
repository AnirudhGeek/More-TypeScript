"use strict";
let username = "anirudh";
let age = 21;
let isCreator = true;
const big = 2n * 63n;
//Operator '+' cannot be applied to types 'bigint' and 'number'
// const mixed = big + age
//token type 
const TOKEN = Symbol("TOKEN");
function yearsToDay(years) {
    return years * 365;
}
console.log(username.toUpperCase());
// console.log(yearsToDay("2"))    =>error

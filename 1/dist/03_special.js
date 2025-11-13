"use strict";
// throw error because of stricNullChecks in tsconfig
// let title : string = "intro"
// title = undefined
//how to fix it 
let subtitle = "anirudh";
subtitle = undefined;
//Dont use the return type "any" for callbacks whose value will be ignored
//in that case you should use "void" when function doesnt return a useful value 
function log(msg) {
    console.log(msg);
}
//when your function never returns any value then it we can use "never" as the return type 
function fail(msg) {
    throw new Error(msg);
}

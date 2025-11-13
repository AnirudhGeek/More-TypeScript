"use strict";
//value => this or that
function printId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else {
        id.toFixed(2);
    }
}
function describeUser(u) {
    if (u.role === "Admin") {
        console.log(u.permissions);
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
function describeUserWithInOperator(u) {
    if ("permissions" in u) {
        console.log(u.role, "Admin user");
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
//array of unions and unions of arrays
const arrayOfUnion = ["a", 1, "b", 2];
//here either the array could be a string or a number
const unionOfArrays = Math.random() > 0.5 ? ["x", "y"] : [1, 2];

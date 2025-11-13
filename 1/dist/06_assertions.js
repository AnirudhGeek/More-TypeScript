"use strict";
const raw = '{"id" : 1 , "name" : "A"}';
//risky way that we shouldn't do it
const riskyUser = JSON.parse(raw);
console.log(riskyUser.name);
function isUser(v) {
    return ( //here we are checking and returning
    typeof v === "object" && v !== null && "id" in v && //if v is an object and v is not null and if id is present in v
        typeof v.id === "number" && "name" in v && //then id is a number and if name is present in v 
        typeof v.name === "string" //then name is a string
    );
}
const mayBe = JSON.parse(raw);
if (isUser(mayBe)) {
    console.log(mayBe.name); //safe approach
}

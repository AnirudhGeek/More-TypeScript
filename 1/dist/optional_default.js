"use strict";
function greetPersonOptional(name) {
    const upperRes = name?.toUpperCase();
    return `Hello ${upperRes}`;
}
console.log(greetPersonOptional("anirudh"));
console.log(greetPersonOptional());

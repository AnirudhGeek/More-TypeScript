"use strict";
function greetPersonOptional(name) {
    const upperRes = name?.toUpperCase();
    return `Hello ${upperRes}`;
}
console.log(greetPersonOptional("anirudh"));
console.log(greetPersonOptional());
//solution for this 
function greetPersonOptional2(name) {
    const upperRes = name ? name?.toUpperCase() : "Guest";
    return `Hello ${upperRes}`;
}
console.log(greetPersonOptional2("anirudh"));
console.log(greetPersonOptional2());
//OR 
function greetPersonDefault(name = "Default") {
    return `Hello ${name.toUpperCase()}`;
}
console.log(greetPersonDefault("Raj"));
console.log(greetPersonDefault());
function connect(host, port, secure) {
    const p = port ?? 3000;
    const s = secure ?? true;
    return `Connect ${host} to ${p} is ${s}`;
}
console.log(connect("localhost"));

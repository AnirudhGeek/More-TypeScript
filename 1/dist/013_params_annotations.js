"use strict";
function func1(a, b) {
    return a + b;
}
const nums12 = [1, 2, 3];
const doubled = nums12.map(n => n * 2);
console.log(doubled);
const times2 = (n) => n * 2;
function distanceFromOrigin(p) {
    return Math.hypot(p.x, p.y);
}
console.log(distanceFromOrigin({ x: 3, y: 2 }));

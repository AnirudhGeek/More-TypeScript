//inference example
const dounleFnc = (n) => n * 2;
//explicit return for exported/public functions
export function toTitle(s) {
    return `Hello ${s}`;
}
//default return 
function booleanToNumber(flag) {
    if (flag) {
        return 1;
    }
    else {
        return 0;
    }
}
async function loadCountInfered() {
    return "adad";
}
loadCountInfered().then((n) => console.log(n));

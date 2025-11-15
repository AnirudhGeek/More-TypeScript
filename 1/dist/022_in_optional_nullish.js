"use strict";
function describeUserExample(u) {
    if ("permissions" in u) {
        return `Admin ${u.permissions.join(",")}`;
    }
    else {
        return `User ${u.expiresAt.toISOString()}`;
    }
}
console.log(describeUserExample({ role: "Admin", permissions: ["Anirudh", "Raturi"] }));
console.log(describeUserExample({ role: "User", expiresAt: new Date() }));
const P1N3 = {
    name: "John"
};
const P2N3 = {
    name: "Ben",
    contact: {
        email: "ben@gmail.com"
    }
};
// P1N3.contact.email  => this will crash
const email1N3 = P1N3.contact?.email; // this is optional chaining
const email2N3 = P2N3.contact?.email;
// ?? => this uses right hand default only when the left is null or undefined
// || => this uses the default when the left is any falsy value(0,"",null,undefined, NaN)
const countFromServerN3 = 0;
const labelFromServerN3 = "";
const aN3 = countFromServerN3 ?? 100; // this is going to keep 0 as the value here because it uses right hand default only when left is null or undefined
console.log(aN3);
const bN3 = countFromServerN3 || 100; // this will gives 100 as left one is falsy value i.e 0
console.log(bN3);

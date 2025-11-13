"use strict";
// email ?: string    => this means that email may be absent, but if its present then it will be a string
// it is not same as email : string | undefined 
const user1 = { id: 1, name: "Anirudh", createdAt: new Date() };
const user2 = { id: 2, name: "John", createdAt: new Date(), email: "john@gmail.com" };
// user1.createdAt = new Date()  =>  Cannot assign to 'createdAt' because it is a read-only property
console.log(user1);
console.log(user2);
const c1 = {
    whatever: 2
};
const c2 = {
    likes: 55,
    views: 84,
    shares: 57
};

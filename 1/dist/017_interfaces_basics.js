"use strict";
//what is interfaces => named shape for objects 
const user333 = {
    id: "1",
    name: "anirudh",
    createdAt: new Date(),
    email: "xyz@gmail.com"
};
const admin333 = {
    id: "4",
    name: "Admin",
    createdAt: new Date(),
    permission: ["admin"]
};
const adminWithmeta = {
    id: "4",
    name: "Admin",
    createdAt: new Date(),
    permission: ["admin"],
    meta: {
        active: false
    }
};

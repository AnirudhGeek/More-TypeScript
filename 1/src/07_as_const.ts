const ROLES = ["admin","user","operator"] as const 
// as const is a TypeScript assertion that tells the compiler:
// “Make this value completely constant — don’t widen it to generic types like string or number.”



//derive a union from the array
type Role = (typeof ROLES)[number];    // “Take the type of ROLES, and get the type of its elements.”
// ROLE[0] | ROLE[1]  |  ROLE[2]
//type Role = "admin" | "user" | "operator"


function setRole(r:Role){
    console.log(r)
}

setRole("user")
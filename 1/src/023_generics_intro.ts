//understand what "type parameter" <T>
//how typescript infers <T> from your arguments automatically 

//generics => it is a funtion where the types are "blanks" that are you filling later
//<T> is a placeholder
//here TS will try to understand what T should be

function id<T>(x:T):T{
    return x
}
//ts will going to infers T
//id(5) => T is a number
//id("asdf") => T is a string


const xyzz = id(5)
console.log(xyzz + 1 , id("anirudh"), id(["Abhinav"]) )
//general ts
//more ts

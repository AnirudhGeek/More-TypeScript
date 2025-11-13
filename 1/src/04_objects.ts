type User = {
    id : number; //required property
    name : string;
    email ?: string;  //optional property (could be absent)
    readonly createdAt : Date //can not be re-assigned
}

// email ?: string    => this means that email may be absent, but if its present then it will be a string
// it is not same as email : string | undefined 

const user1:User = {id: 1 , name: "Anirudh" , createdAt : new Date()}
const user2 : User = {id : 2 , name : "John" , createdAt : new Date() ,email : "john@gmail.com"}

// user1.createdAt = new Date()  =>  Cannot assign to 'createdAt' because it is a read-only property

console.log(user1)
console.log(user2)


//index signature
type Count = {
    [k:string]  :number
}

type Count1 = Record<"likes" | "views" | "shares",number >

const c1 : Count = {
    whatever : 2
}

const c2 : Count1 = {
    likes : 55,
    views : 84,
    shares : 57
}
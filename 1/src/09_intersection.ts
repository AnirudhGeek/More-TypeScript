//what does intersection means 
// value must be everything from A and from B 

type Inter1 = {
    id : string
}

type Inter2 = {
    createdAt : Date
}

type Entity = Inter1 & Inter2  //must have both id and createdAt

const e: Entity = {
    id : "e",
    createdAt : new Date()
}


//homwork => create 2 types usename and userEmail 

type UserName = {
    username : string
}


type UserEmail = {
    userEmail : string
}

const u : UserName & UserEmail = {
    username : "Anirudh",
    userEmail : "anird@gmail.com"
}


type NumberHolderUnique = {
    a : number
}

type StringHolderUnique = {
    a : string
}

//always getting an error 
// type NumberStringMix = NumberHolderUnique & StringHolderUnique

// const asdf : NumberStringMix = {
//     a : 446
// }


type Product = {
    id : string,
    title : string
}

type Price = {
    price : number
}

type PricedProduct = Product & Price


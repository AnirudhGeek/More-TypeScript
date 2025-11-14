//type => similar to interfaces use for object shape
//      => union types (A|B)
//      => intersection types (A & B)
//      => function types

//Also type is more general compared to interfaces

type Person1 = {
  id: string;
  address: string;
  salary: number;
};

const person1: Person1 = {
  id: "1",
  address: "address",
  salary: 1234,
};

//union types
type Status = "new" | "paid" | "pending";

function nextActionCheck(s : Status) : string{
    switch(s){
        case "new":
            return "new"
        case "paid":
            return "paid"
        case "pending":
            return "pending"

        default : 
            return "default"  
    }
}

type ToMerge1 = {
    price : number
}

type ToMerge2 = {
    stock : number
}


type MergedProductInfo = Person1 & ToMerge1 & ToMerge2
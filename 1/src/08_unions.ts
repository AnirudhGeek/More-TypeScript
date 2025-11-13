//value => this or that

function printId(id : string | number){
    if(typeof id === "string"){
        id.toUpperCase()
    }else{
        id.toFixed(2)
    }
}


//object union
type Admin = {
    role : "Admin",
    permissions : string[]
}

type Customer = {
    role : "Customer",
    loyaltyPoints : number
}

function describeUser(u: Admin | Customer){
    if(u.role  === "Admin"){
        console.log(u.permissions )
    }else{
        console.log(u.loyaltyPoints)
    }
}

function describeUserWithInOperator(u: Admin | Customer){
    if("permissions" in u){
        console.log(u.role, "Admin user")
    }else{
        console.log(u.loyaltyPoints)
    }

}


//array of unions and unions of arrays
const arrayOfUnion : (string | number)[] = ["a",1,"b",2]

//here either the array could be a string or a number
const unionOfArrays : string[] | number[] = Math.random() > 0.5 ? ["x","y"] : [1,2]

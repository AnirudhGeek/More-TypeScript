const raw = '{"id" : 1 , "name" : "A"}'

//risky way that we shouldn't do it
const riskyUser = JSON.parse(raw) as {id:number ; name : string}
console.log(riskyUser.name)


//Right approach
type User1 = {id:number ; name : string}

function isUser(v:unknown):v is User1{
    return(   //here we are checking and returning

        typeof v === "object"  && v!== null && "id" in v &&    //if v is an object and v is not null and if id is present in v
        typeof (v as any).id === "number" && "name" in v &&    //then id is a number and if name is present in v 
        typeof (v as any).name === "string"                    //then name is a string
    )
}

const mayBe = JSON.parse(raw) as unknown
if(isUser(mayBe)){
    console.log(mayBe.name)  //safe approach
}
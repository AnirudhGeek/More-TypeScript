//typeof for primitives
function describeTypeOf(x: unknown) {
    if(typeof x ==="string"){
        return 'string'
    }
    if(typeof x === "number"){
        return 10
    }
    if(typeof x === "boolean" ){
        return true 
    }
    if(typeof x === "bigint"){
        return 2n
    }
    if(typeof x === "symbol"){
        return "symbol"
    }
    if(typeof x === undefined){
        return "undefined"
    }
    if(typeof x === "function"){
        return ()=>{}
    }
    if(x === null)return null   //we have to explicitly check it since for null otherwise it will return an object 

    return "object"
}

console.log(
  describeTypeOf("hi"),
  describeTypeOf(23),
  describeTypeOf(true),
  describeTypeOf(10n),
  describeTypeOf(Symbol("anirudh")),
  describeTypeOf(undefined),
  describeTypeOf(() => {}),
  describeTypeOf(null),
  describeTypeOf({})
);


function info(z : unknown){
    if(Array.isArray(z)){
        return z
    }
    if(z instanceof Date){
        return new Date()
    }
    if(z instanceof Error){
        return new Error("asdadsf")
    }
    
    return "object"
}

console.log(
    info([1,2,3,4,5]),
    info(new Date()),
    info(new Error("oops! Error")),
    info({x:1})
)
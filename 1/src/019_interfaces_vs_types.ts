//interface is actually based for object shapes , object shapes that you expect to extends
//supports declaration merging

//types => will me more general use for objects , unions , intersection ,functions 
// this can not be reopened => no merging

interface Box1{
    width : number
}

interface Box1{
    height : number
}

//this is called declaration margin
const boxDemo : Box1 = {
    width : 435,
    height : 345
}


type Bag = {
    size : number
}

//this will throw error as you cant redeclare type alias name
// type Bag = {
//     color : string
// }




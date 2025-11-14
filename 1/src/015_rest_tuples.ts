function sumAllNumbers(...xs:number[]):number{
    return xs.reduce((s,n)=>s+n,0)
}

console.log(sumAllNumbers(1,2,3,4))

//tuple rest
function makeRange(...args : [start:number , end: number , step?: number]):number[]{
    const [start,end ,step = 1] = args
    const out : number[] =[]

    for(let n=start ;n<=end ; n+=step) out.push(n)
    return out
}

console.log(makeRange(1,2))
console.log(makeRange(1,2,5))
// console.log(makeRange(1,2,5,4))


function draw(x : number , y : number){
    console.log(x,y)
}

const points = [10,20]
// draw(...points)   this will throw error because it is not a tuple [number,number]

const pointsFixed = [10,20] as const   //this will make readonly
draw(...pointsFixed)


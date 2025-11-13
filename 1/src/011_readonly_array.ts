//mutable array
const xs : number[] = [1,3,4]


//readonly array 
const ys: readonly number[] = [1,3,4]

//generic form way to write readonly array 
const yss : ReadonlyArray<number> = [1,2,3]


xs[0] = 9   //possible because its a mutable array 
// yss.push(3)   we cant perform such operations since its a readonly array 

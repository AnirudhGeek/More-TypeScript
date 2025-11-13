const a11 : number[] = [1,2,3]   //T[]
const a22 : Array<number> = [1,2,3]  //Array<T>


//we can use both
//but if you are using react then you can use Array<number> 

const scores1 = [10,20,30]
scores1.push(40)
scores1.push(Number("50"))

console.log(scores1)



const mix: (string | number)[] = [1,"2",3,"4"]


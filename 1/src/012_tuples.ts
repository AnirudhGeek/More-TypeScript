//tuples => fixed length and fixed types

const userEntry:[string,number] = ["anirudh",29]   // this means first number can only be a string and second can only be a number

//optional tuples
type ResponseRow  = [
    status : number,
    message ?: string
]

const r11 : ResponseRow = [41234]

//readonly tuples 
const corners : readonly[number,number] = [0,0]

//this is an exaxmple of index signature
type NumberDict = {
  [k: string]: number;  // here we have the keys(k) of string type and every key is mapped to a number value
};

const counters : NumberDict = {}

// counters['Likes'] = "asdf"   here we'll get error
// counters['Likes'] = true   here we'll get error
counters['Likes'] = 3454   //here we'll not get error


counters["Comments"] = 2
counters["shares"] = 100

//you will use this when you know that you have finite number of keys 
type Matrices = Record<"likes" | "views" | "shares",number>   //advantage here is that it is much more tight( it can only be of these three likes , views or shares) and also much more safer

const mm : Matrices = {likes : 3, shares : 34,views : 2435}


//when you will have dynamic keys you will use map instead of record 
const priceMap = new Map<string,number>()
priceMap.set('likes',45)

type looseMap = Record<string,number | undefined>

const lm : looseMap = {}
lm["x"] = undefined
lm['y'] = undefined


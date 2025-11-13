//goal => understand when to let typeScript infer types
//ts => knows js very well
// when ts will write the types   /    u r going to write

let count = 0;
const site = "anirudh.com";
const scores = [10, 20, 30];

//over annotation isn't bad => just too much noisy

//where to use types
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 2));

//we should also annotate when the type isn't obvious
let maybe: string | number;
maybe = Math.random() > 0.5 ? "text" : 10;

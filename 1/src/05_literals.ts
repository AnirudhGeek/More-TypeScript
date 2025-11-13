type Direction = "left" | "right" | "up";

function move(d: Direction) {
  console.log(d);
}

const d1 = "left";   //TS keeps literal type "left"
move(d1)

let d2 = "left";   //ts widens to string as there is let and we can change its type later
// move(d2)

let d3:Direction = "left"
move(d3)

const d4 = "down"
// move(d4)   //not assignable
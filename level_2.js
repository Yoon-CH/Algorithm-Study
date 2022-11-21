// const fs = require("fs");
// const input = fs.readFileSync("./dev/level2").toString().trim().split(""); // \n or " " or ""

const fs = require("fs");
let input = fs.readFileSync("./dev/level2").toString().split("\n");
console.log(input);

////////////////////////////////////////

// const score = parseInt(input);

// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else if (score >= 60) {
//   console.log("D");
// } else {
//   console.log(score);
// }

////////////////////////////////////////

let total = +input[0];
let cnt = +input[1];
let sum = 0;

for (let i = 2; i <= cnt + 1; ++i) {
  let newArr = input[i].split(" ").map((item) => Number(item));
  sum += newArr[0] * newArr[1];
}

console.log(total === sum ? "Yes" : "No");
console.log(total, cnt, sum);

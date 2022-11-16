const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const first = input[0].split("").join("");
const second = input[1].split("");

const a = Number(first) * Number(second[2]);
const b = Number(first) * Number(second[1]);
const c = Number(first) * Number(second[0]);
const d = a + b * 10 + c * 100;
// .map((item, i) => {
//   console.log(item);
//   return Number(item) * Number(second[2]);
// });
console.log(`${a}\n${b}\n${c}\n${d}`);

// const chess = [1, 1, 2, 2, 2, 8];

// const answer = input.map((i, index) => {
//   return chess[index] - i;
// });

// // console.log(...answer);

// a = Number(input[0]);
// b = Number(input[1]);
// c = Number(input[2]);

// // console.log((5 + 8) % 4);
// console.log(Math.floor((a + b) % c));
// console.log(((a % c) + (b % c)) % c);
// console.log(Math.floor((a * b) % c));
// console.log(Math.floor(((a % c) * (b % c)) % c));

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(""); // \n or " " or ""
console.log(input);
////////////////////////////////////////

const first = input[0].split("").join("");
const second = input[1].split("");

const a = Number(first) * Number(second[2]);
const b = Number(first) * Number(second[1]);
const c = Number(first) * Number(second[0]);
const d = a + b * 10 + c * 100;

// console.log(`${a}\n${b}\n${c}\n${d}`);

////////////////////////////////////////

const chess = [1, 1, 2, 2, 2, 8];

const answer = input.map((i, index) => {
  return chess[index] - i;
});

// console.log(...answer);

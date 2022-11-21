const fs = require("fs");
const input = fs.readFileSync("./dev/level1").toString().trim().split(""); // \n or " " or ""
// console.log(input);
////////////////////////////////////////

// const aa = Number(input[0]);
// const bb = Number(input[2]);

// if (aa > bb) console.log(">");
// if (aa < bb) console.log("<");
// if (aa === bb) console.log("==");

// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.

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

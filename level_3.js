const fs = require("fs");
const input = fs.readFileSync("./dev/level3").toString().split(" ");
console.log(input);
////////////////////////////////////////

// for (let i = 1; i <= input[0]; i++) {
//   let numbers = input[i].split(" ");

//   //   console.log(`Case #${i}: ${Number(numbers[0]) + Number(numbers[1])}`);
// }

////////////////////////////////////////

// for (let i = 1; i <= input[0]; i++) {
//   let numbers = input[i].split(" ");

//   let num1 = Number(numbers[0]);
//   let num2 = Number(numbers[1]);

//   //   console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
// }

////////////////////////////////////////

let num = Number(input);

result = "";

for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);

////////////////////////////////////////

let nums = Number(input);

result = "";

for (let i = 0; i < nums; i++) {
  for (let j = 0; j < nums - i - 1; j++) {
    result += " ";
  }

  for (let k = 0; k <= i; k++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);

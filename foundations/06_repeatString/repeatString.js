const prompt = require("prompt-sync")();

let userString = prompt("Enter string:");
const numOfRepeats = prompt("Enter times to repeat:");

const repeatString = function (str, num) {
  if (num < 0) {
    return "ERROR";
  }

  let result = "";

  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;

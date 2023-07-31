// npm install prompt-sync
const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter a positive integer: "));

let sum = 0;
function sum_of_natural_numbers() {
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

sum_of_natural_numbers(number);
console.log("The sum of natural numbers:", sum);

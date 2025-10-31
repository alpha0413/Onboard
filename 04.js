const fizzBuzz = (range) =>
  range.map((el) => {
    if (el % 15 == 0) return "Fizz Buzz";
    if (el % 3 == 0) return "Fizz";
    if (el % 5 == 0) return "Buzz";
    return el;
  });
const range = [];
for (let i = 0; i < 100; i++) {
  range[i] = i;
}
console.log(fizzBuzz(range));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let filteredArr = arr.filter((i) => i % 3 === 0);

console.log(filteredArr);

fizzBuzzArr = arr.map((i) => {
  if (i % 3 === 0 && i % 5 === 0) {
    return "fizzBuzz";
  } else if (i % 3 === 0) {
    return "fizz";
  } else if (i % 5 === 0) {
    return "buzz";
  } else {
    return i;
  }
});

console.log(fizzBuzzArr);

let sum = arr.reduce((num1, num2, num3) => {
  return (num1 + num2) * num3;
});

console.log(sum);

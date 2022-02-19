/*
- Print all numbers 1 - 100
- Numbers divisible by 3, print "Fizz"
- Numbers divisible by 5, print "Buzz"
- Numbers divisible by 3 and 5, print "FizzBuzz"
*/

const fizzbuzz = () => {
  for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(number);
    }
  }
};

console.log(fizzbuzz());

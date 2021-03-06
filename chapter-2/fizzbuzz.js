/*
- Print all numbers 1 - 100
- Numbers divisible by 3, print "Fizz"
- Numbers divisible by 5, print "Buzz"
- Numbers divisible by 3 and 5, print "FizzBuzz"
*/

const fizzbuzz = () => {
  for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log('FizzBuzz');
    } else if (number % 3 === 0) {
      console.log('Fizz');
    } else if (number % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(number);
    }
  }
};

console.log(fizzbuzz());

/*
CLOSURE

Multiplier is called and creates an environment in which its factor parameter is bound to 2. 
The function value it returns, which is stored in twice, remembers this environment. 
This feature — being able to reference a specific instance of a local binding in an enclosing scope — is called closure.
When twice is called, it multiplies its argument of 5 by 2.
*/

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
twice(5);

/*
I was expecting to see a result of 18 when the value bound to three is executed. Instead, I got 23.

- rememberMe exectues with an argument of 5 and bound to the number parameter. 
    It returns the anonymous function and its closure, which is bound to the one variable.
- one exectues with an argument of 3 and references its closure with number = 5, memory = 0 and x = 3.
    number + x = 3 + 5 = 8 and memory += 8 = 8.
    8 is returned to variable two.
- one is executed again, with an argument of 10. The closure that is referenced now reads: number = 5, memory = 8 and x = 10.
    number + x = 5 + 10 = 15 and memory += 8 = 23.
    23 is returned to variable three.
*/

function rememberMe(number) {
  let memory = 0;
  return function (x) {
    memory += number + x;
    return memory;
  };
}
let one = rememberMe(5);
let two = one(3);
let three = one(10);
// console.log(two);
// console.log(three);

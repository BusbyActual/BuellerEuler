/*
  ### Problem

  The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

  1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

  Let us list the factors of the first seven triangle numbers:

   1: 1
   3: 1,3
   6: 1,2,3,6
  10: 1,2,5,10
  15: 1,3,5,15
  21: 1,3,7,21
  28: 1,2,4,7,14,28
  We can see that 28 is the first triangle number to have over five divisors.

  What is the value of the first triangle number to have over five hundred divisors?
*/
let  calculate = (num) => {
    let half = Math.floor(num / 2), // Ensures a whole number <= num.
        arr = [1], // 1 will be a part of every solution.
        i, j;

    // Determine out increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        num % i === 0 ? arr.push(i) : false;
    }

    arr.push(num) // Always include the original number.
    return arr;
}

calculate(11000);

let triangleFactors = (max) => {
    let count = 0;
    let number = 28;

    // while (count !== max) {
    //   count = calculate(number).length
    //   number++;
    // }
    return calculate(number).length;
};

const answer = triangleFactors(500);

console.log(answer);
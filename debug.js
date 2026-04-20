// Program A
// Syntax Error fixed
console.log("Welcome to the bootcamp");

// Verification
console.log("Program A runs correctly.");


// Program B
// Runtime Error fixed
let numbers = [2, 4, 8];

for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}


// Program C
// Logic Error fixed
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Verification
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(2));
console.log(isPrime(1));

const Fibonacci = n => {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
};
//Or
const Fibonacci = n => {
  if (n == 0 || n == 1) {
    return n;
  }
  let stepOne = 0;
  let stepTwo = 1;
  let stepThree;

  for (let i = 2; i <= n; i++) {
    stepThree = stepOne + stepTwo;
    stepOne = stepTwo;
    stepTwo = stepThree;
  }
  return stepTwo;
};

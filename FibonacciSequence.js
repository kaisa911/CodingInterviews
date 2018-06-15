function Fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
}
//Or
function Fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  var step1 = 0;
  var step2 = 1;
  var step3;

  for (var i = 2; i <= n; i++) {
    step3 = step1 + step2;
    step1 = step2;
    step2 = step3;
  }
  return step2;
}

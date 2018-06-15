function jumpFloor(number) {
  if (number < 0) {
    return;
  }
  if (number >= 0 && number <= 2) {
    return number;
  }
  var step1 = 1;
  var step2 = 2;
  var step3 = 0;
  for (var i = 0; i < number - 2; i++) {
    step3 = step1;
    step1 = step2;
    step2 = step3 + step1;
  }
  return step2;
}

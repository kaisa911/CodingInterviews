const jumpFloor = number => {
  if (number <= 0) return 0;
  if (number === 1) return 1;
  let stepOne = 1;
  let stepTwo = 2;
  let stepThree;
  for (let i = 2; i < number; i++) {
    stepThree = stepOne + stepTwo;
    stepOne = stepTwo;
    stepTwo = stepThree;
  }
  return stepTwo;
};

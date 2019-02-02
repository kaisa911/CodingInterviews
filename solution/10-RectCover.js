/**
 * 递归方法
 * @param {*} number
 */
const rectCover = number => {
  if (number == 0) return 0;
  if (number == 1 || number == 2) return number;
  return rectCover(number - 1) + rectCover(number - 2);
};

/**
 * DP算法
 * @param {*} number
 */
const rectCover = number => {
  let stepOne = 1;
  let stepTwo = 2;
  let stepThree;
  if (number <= 0) {
    return 0;
  }
  if (number === 1 || number === 2) {
    return number;
  }
  for (let i = 3; i <= number; i++) {
    stepThree = stepOne + stepTwo;
    stepOne = stepTwo;
    stepTwo = stepThree;
  }
  return stepTwo;
};

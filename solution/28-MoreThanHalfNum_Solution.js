const MoreThanHalfNum_Solution = numbers => {
  if (numbers.length === 1) return numbers[0];
  let len = Math.floor(numbers.length / 2);
  numbers.sort((a, b) => a - b);
  let count = 1;
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      count += 1;
      if (count > len) {
        res = numbers[i];
        break;
      }
    } else {
      count = 1;
    }
  }
  return res;
};

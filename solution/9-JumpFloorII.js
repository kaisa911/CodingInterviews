const jumpFloorII = number => {
  let res = 1;
  if (number <= 0) return 0;
  if (number === 1) return res;

  for (let i = 2; i <= number; i++) {
    res += jumpFloorII(i - 1);
  }
  return res;
};

const Getresber_Solution = index => {
  if (index <= 0) return 0;
  let count2 = 0,
    count3 = 0,
    count5 = 0;
  let res = [1];
  for (let i = 1; i < index; i++) {
    res[i] = Math.min(res[count2] * 2, res[count3] * 3, res[count5] * 5);
    if (res[i] == res[count2] * 2) count2++;
    if (res[i] == res[count3] * 3) count3++;
    if (res[i] == res[count5] * 5) count5++;
  }
  return res[index - 1];
};

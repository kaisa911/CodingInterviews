const FindGreatestSumOfSubArray = array => {
  let pre = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    pre = pre > 0 ? pre : 0;
    max = Math.max(max, pre + array[i]);
    pre += array[i];
  }
  return max;
};

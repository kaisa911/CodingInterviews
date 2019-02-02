const Find = (target, array) => {
  const row = array.length;
  const col = array[0].length;
  let i = row - 1;
  let j = 0;
  while (i >= 0 && j <= col - 1) {
    if (array[i][j] > target) {
      i--;
    } else if (array[i][j] < target) {
      j++;
    } else {
      return true;
    }
  }
  return false;
};

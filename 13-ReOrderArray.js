const reOrderArray = array => {
  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 1 ? left.push(array[i]) : right.push(array[i]);
  }
  return left.concat(right);
};

const PrintMinNumber = numbers => {
  if (numbers.length === 1) return numbers[0];
  let minNum = numbers.sort((a, b) => {
    return [a, b].join('') - [b, a].join('');
  });
  return minNum.join('');
};

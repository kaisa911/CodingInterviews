const NumberOf1 = n => {
  let res = 0;
  let str = '';
  if (n >= 0) {
    str = n.toString(2);
  } else {
    const num = Math.pow(2, 32) + n;
    str = (Array(32).join('0') + num.toString(2)).slice(-32);
  }

  res = Count(str);
  return res;
};

const Count = str => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      count += 1;
    }
  }
  return count;
};

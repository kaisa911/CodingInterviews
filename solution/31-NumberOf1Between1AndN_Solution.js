const NumberOf1Between1AndN_Solution = n => {
  let str = '';
  let res = 0;
  for (let i = 1; i <= n; i++) {
    str += i.toString();
  }
  for (let i = 0; i <= str.length; i++) {
    str[i] === '1' ? (res += 1) : res;
  }
  return res;
};

// 大佬的做法
const NumberOf1Between1AndN_Solution = n => {
  let count = 0;
  let i = 1;
  for (; i <= n; i *= 10) {
    let a = parseInt(n / i);
    let b = parseInt(n % i);
    count += parseInt((a + 8) / 10) * i + (a % 10 == 1) * (b + 1);
  }
  return count;
};

const GetNumberOfK = (data, k) => {
  let res = 0;
  let idx = data.indexOf(k);
  while (data[idx] === k) {
    res += 1;
    idx += 1;
  }

  return res;
};

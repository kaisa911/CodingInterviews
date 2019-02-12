const GetLeastNumbers_Solution = (input, k) => {
  if (input.length < k) return false;
  input.sort((a, b) => a - b);
  return input.slice(0, k);
};

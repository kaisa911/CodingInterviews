function jumpFloorII(number) {
  if (number < 0) return;
  if (number >= 0 && number <= 2) return number;

  return 2 * jumpFloorII(number - 1);
}

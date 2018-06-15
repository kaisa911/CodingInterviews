function rectCover(number) {
  if (number < 1) {
    return 0;
  } else if (number == 1 || number == 2) {
    return number;
  } else {
    return rectCover(number - 1) + rectCover(number - 2);
  }
}
//Or
function rectCover(number) {
  if (number < 1) {
    return 0;
  } else if (number == 1 || number == 2) {
    return number;
  }
  var step1 = 1;
  var step2 = 2;
  var step3 = 0;
  var i = 2;
  while (i < number) {
    step3 = step1 + step2;
    step1 = step2;
    step2 = step3;
    i++;
  }
  return step2;
}

const FirstNotRepeatingChar = str => {
  let length = str.length;
  for (let i = 0; i < length; i++) {
    if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
      return i;
      break;
    }
  }
  
  return -1;
};

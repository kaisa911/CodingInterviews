const FindNumsAppearOnce = array => {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let arrTemp = array;
    let num = arrTemp.splice(i, 1);
    if (arrTemp.indexOf(num[0]) === -1) {
      res.push(num[0]);
    }
    arrTemp = arrTemp.splice(i, 0, num[0]);
  }
  return res;
};

// 大佬的算法
function FindNumsAppearOnce(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
      arr.push(array[i]);
    }
  }
  return arr;
}

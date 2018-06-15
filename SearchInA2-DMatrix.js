function Find(target, array) {
  var row = array.length;
  var col = array[0].length;
  //从左下角开始判断
  var i = row - 1;
  var j = 0;
  while (i >= 0 && j <= col - 1) {
    //如果这一行都大于这个值，那就向上一行寻找
    //如果某一列的值小于目标值，就向右寻找
    if (array[i][j] > target) {
      i--;
    } else if (array[i][j] < target) {
      j++;
    } else {
      return true;
    }
  }
  return false;
}

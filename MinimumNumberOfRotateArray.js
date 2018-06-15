function minNumberInRotateArray(rotateArray) {
  var left = 0;
  var right = rotateArray.length - 1;
  var mid = left;

  if (rotateArray.length == 0) return;

  while (rotateArray[left] >= rotateArray[right]) {
    if (right - left == 1) {
      mid = right;
      break;
    }
    mid = Math.floor((left + right) / 2);
    if (rotateArray[mid] >= rotateArray[left]) {
      left = mid;
    } else if (rotateArray[mid] < rotateArray[left]) {
      right = mid;
    } else if (
      rotateArray[mid] == rotateArray[right] &&
      rotateArray[mid] == rotateArray[left]
    ) {
      return inOrder(rotateArray);
    }
  }
  return rotateArray[mid];
}
function inOrder(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

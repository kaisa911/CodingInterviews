const minNumberInRotateArray = rotateArray => {
  let left = 0;
  let right = rotateArray.length - 1;
  let mid = left;

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
    } else if (rotateArray[mid] == rotateArray[right] && rotateArray[mid] == rotateArray[left]) {
      return inOrder(rotateArray);
    }
  }
  return rotateArray[mid];
};
const inOrder = arr => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};


// 就是查找最小的值嘛
const minNumberInRotateArray = rotateArray => {
  if (rotateArray.length === 0) return 0;
  rotateArray.sort((a, b) => a - b);
  return rotateArray[0];
};


/**
 * 
 * @param {*} pushV 
 * @param {*} popV 
 * 举例让抽象具体化
 * 借用一个辅助的栈，将原数列依次压入辅助栈，栈顶元素与所给的出栈队列相比，如果相同则出栈；
 * 如果不同则继续压栈，知道原数列中所有的数字压栈完毕；
 * 检测辅助栈中是否为空， 若空，则该序列是压栈序列对应的一个弹出序列。否则，说明序列不是该栈的弹出序列。
 */
const IsPopOrder = (pushV, popV) => {
  if (!pushV.length|| !popV.length|| pushV.length !== popV.length) {
    return false;
  }
  let stack = [];
  let idx = 0;
  for (let i = 0; i < pushV.length; i++) {
    stack.push(pushV[i]);
    while (stack.length && stack[stack.length - 1] === popV[idx]) {
      stack.pop();
      idx++;
    }
  }
  return stack.length === 0;
};

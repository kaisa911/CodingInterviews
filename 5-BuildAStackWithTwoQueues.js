function Stack() {
  const arr = [];
  this.push = node => {
    arr.push(node);
  };
  this.pop = () => {
    return arr.pop();
  };
  this.isEmpty = () => {
    return arr.length === 0;
  };
}

const stack1 = new Stack();
const stack2 = new Stack();

const push = node => stack1.push(node);

const pop = () => {
  if (stack1.isEmpty() && stack2.isEmpty()) {
    throw new Error('Queue is empty');
  }
  if (stack2.isEmpty()) {
    while (!stack1.isEmpty()) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
};

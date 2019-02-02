var stack = [];
const push = node => stack.push(node);
const pop = () => (stack.length == 0 ? null : stack.pop());
const top = () => (stack.length == 0 ? null : stack[0]);
const min = () => Math.min.apply(this, stack);

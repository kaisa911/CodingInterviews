function Stack() {
  var arr = [];
  this.push = function(node) {
    arr.push(node);
  };
  this.pop = function() {
    return arr.pop();
  };
  this.isEmpty = function() {
    return arr.length === 0;
  };
}
var stack1 = new Stack();
var stack2 = new Stack();

function push(node) {
  stack1.push(node);
}
function pop() {
  if (stack1.isEmpty() && stack2.isEmpty()) {
    throw new Error('Queue is empty');
  }
  if (stack2.isEmpty()) {
    while (!stack1.isEmpty()) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
}

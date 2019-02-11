/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
const PrintFromTopToBottom = root => {
  const treeNodeList = [];
  const dataList = [];
  if (root != null) {
    treeNodeList.push(root);
  }
  while (treeNodeList.length != 0) {
    var node = treeNodeList.shift();
    if (node.left != null) {
      treeNodeList.push(node.left);
    }
    if (node.right != null) {
      treeNodeList.push(node.right);
    }
    dataList.push(node.val);
  }
  return dataList;
};

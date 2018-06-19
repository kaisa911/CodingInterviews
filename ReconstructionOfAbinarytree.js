/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
  if (pre.length == 0 || vin.length != pre.length) {
    return null;
  }
  var treeNode = new TreeNode(pre[0]);
  for (var i = 0; i < pre.length; i++) {
    //找到中序遍历中等于根节点的位置
    if (vin[i] === pre[0]) {
      //递归调取
      treeNode.left = reConstructBinaryTree(
        pre.slice(1, i + 1),
        vin.slice(0, i)
      );
      treeNode.right = reConstructBinaryTree(
        pre.slice(i + 1),
        vin.slice(i + 1)
      );
    }
  }
  return treeNode;
}
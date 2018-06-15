/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  var res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res.reverse();
}

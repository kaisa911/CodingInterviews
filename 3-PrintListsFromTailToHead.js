/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
const printListFromTailToHead = head => {
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res.reverse();
};

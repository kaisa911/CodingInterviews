/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
const ReverseList = pHead => {
  if (pHead === null || pHead.next === null) return pHead;
  let res = null;
  let cur = null;
  while (pHead !== null) {
    cur = pHead.next;
    pHead.next = res;
    res = pHead;
    pHead = cur;
  }
  return res;
};

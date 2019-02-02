/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
  let res = new ListNode(0);
  let cur = res;
  if (pHead1 == null) return pHead2;
  if (pHead2 == null) return pHead1;
  while (pHead1 !== null && pHead2 !== null) {
    if (pHead1.val <= pHead2.val) {
      cur.next = pHead1;
      pHead1 = pHead1.next;
    } else {
      cur.next = pHead2;
      pHead2 = pHead2.next;
    }
    cur = cur.next;
  }
  if (!pHead1) {
    cur.next = pHead2;
  }
  if (!pHead2) {
    cur.next = pHead2;
  }
  return res.next;
}

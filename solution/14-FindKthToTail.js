/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
const FindKthToTail = (head, k) => {
  if (head === null) return null;
  let l1 = head;
  let l2 = head;
  let a = k;
  let count = 0;
  while (l1 !== null) {
    l1 = l1.next;
    count++;
    if (a < 1) {
      l2 = l2.next;
    }
    a--;
  }
  if (count < k) return null;
  return l2;
};

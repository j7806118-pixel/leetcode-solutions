function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let left = dummy;
    let right = dummy;

    for (let i = 0; i < n; i++) {
        right = right.next;
    }

    while (right.next !== null) {
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;

    return dummy.next;
}
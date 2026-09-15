function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {

        let digit1 = l1 !== null ? l1.val : 0;
        let digit2 = l2 !== null ? l2.val : 0;

        let sum = digit1 + digit2 + carry;

        let digit = sum % 10;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(digit);
        current = current.next;

        if (l1 !== null) {
            l1 = l1.next;
        }

        if (l2 !== null) {
            l2 = l2.next;
        }
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next;
}
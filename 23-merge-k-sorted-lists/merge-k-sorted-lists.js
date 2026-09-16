class MyMinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);

        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent].val <= this.heap[index].val) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let min = this.heap[0];

        this.heap[0] = this.heap.pop();

        let index = 0;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (
                left < this.heap.length &&
                this.heap[left].val < this.heap[smallest].val
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].val < this.heap[smallest].val
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }

        return min;
    }

    size() {
        return this.heap.length;
    }
}

function mergeKLists(lists) {
    let heap = new MyMinHeap();

    for (let list of lists) {
        if (list !== null) {
            heap.push(list);
        }
    }

    let dummy = new ListNode(0);
    let current = dummy;

    while (heap.size() > 0) {
        let node = heap.pop();

        current.next = node;
        current = current.next;

        if (node.next !== null) {
            heap.push(node.next);
        }
    }

    return dummy.next;
}
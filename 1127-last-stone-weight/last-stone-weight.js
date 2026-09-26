class LastStoneMaxHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);

        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] >= this.heap[i]) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let max = this.heap[0];

        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (
                left < this.heap.length &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }

            if (largest === i) {
                break;
            }

            [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

            i = largest;
        }

        return max;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

var lastStoneWeight = function(stones) {
    let maxHeap = new LastStoneMaxHeap();

    for (let stone of stones) {
        maxHeap.push(stone);
    }

    while (maxHeap.size() > 1) {
        let y = maxHeap.pop();
        let x = maxHeap.pop();

        if (x !== y) {
            maxHeap.push(y - x);
        }
    }

    return maxHeap.size() === 0 ? 0 : maxHeap.peek();
};
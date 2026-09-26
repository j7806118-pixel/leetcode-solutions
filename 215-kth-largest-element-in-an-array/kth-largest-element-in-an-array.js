class findKthLargestMinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);

        let i = this.heap.length - 1;

        // Bubble Up
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] <= this.heap[i]) {
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

        let min = this.heap[0];

        this.heap[0] = this.heap.pop();

        let i = 0;

        // Bubble Down
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === i) {
                break;
            }

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }

        return min;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

var findKthLargest = function(nums, k) {
    const minHeap = new findKthLargestMinHeap();

    for (let num of nums) {
        minHeap.push(num);

        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }

    return minHeap.peek();
};
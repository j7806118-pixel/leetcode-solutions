class leastIntervalMaxHeap {
    constructor() {
        this.heap = [];
    }

    // Add a value
    push(value) {
        this.heap.push(value);

        let i = this.heap.length - 1;

        // Bubble Up
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            // Max-heap property is satisfied
            if (this.heap[parent] >= this.heap[i]) {
                break;
            }

            // Swap parent and child
            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    // Remove and return the largest value
    pop() {
        if (this.heap.length === 0) {
            return undefined;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        // Store maximum value
        let max = this.heap[0];

        // Move last element to root
        this.heap[0] = this.heap.pop();

        let i = 0;

        // Bubble Down
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            let largest = i;

            // Check left child
            if (
                left < this.heap.length &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }

            // Check right child
            if (
                right < this.heap.length &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }

            // Already in correct position
            if (largest === i) {
                break;
            }

            // Swap
            [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

            i = largest;
        }

        return max;
    }

    // Return largest value without removing it
    peek() {
        return this.heap[0];
    }

    // Return number of elements
    size() {
        return this.heap.length;
    }
}


var leastInterval = function(tasks, n) {

    // Count frequency of every task
    const freq = new Map();

    for (let task of tasks) {
        freq.set(task, (freq.get(task) || 0) + 1);
    }

    // Max-heap stores task frequencies
    const maxHeap = new leastIntervalMaxHeap();

    for (let count of freq.values()) {
        maxHeap.push(count);
    }

    // Queue:
    // [remaining frequency, time when task becomes available]
    const cooldown = [];

    let time = 0;

    while (maxHeap.size() > 0 || cooldown.length > 0) {

        // Move tasks whose cooldown has finished
        if (
            cooldown.length > 0 &&
            cooldown[0][1] === time
        ) {
            const [remainingCount, availableTime] =
                cooldown.shift();

            maxHeap.push(remainingCount);
        }

        // Execute highest-frequency available task
        if (maxHeap.size() > 0) {

            let count = maxHeap.pop();

            count--;

            // Task still has copies remaining
            if (count > 0) {
                cooldown.push([
                    count,
                    time + n + 1
                ]);
            }
        }

        // One CPU interval has passed
        time++;
    }

    return time;
};
var minCostConnectPoints = function(points) {

    const n = points.length;

    // Min Heap
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(value) {
            this.heap.push(value);

            let i = this.heap.length - 1;

            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);

                // value = [cost, pointIndex]
                if (this.heap[parent][0] <= this.heap[i][0]) {
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

            const min = this.heap[0];

            this.heap[0] = this.heap.pop();

            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (
                    left < this.heap.length &&
                    this.heap[left][0] < this.heap[smallest][0]
                ) {
                    smallest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right][0] < this.heap[smallest][0]
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

        size() {
            return this.heap.length;
        }
    }

    const minHeap = new MinHeap();

    // visited[i] = true means point i is already
    // included in our MST
    const visited = new Array(n).fill(false);

    // Start from point 0 with cost 0
    minHeap.push([0, 0]);

    let totalCost = 0;
    let pointsConnected = 0;

    while (minHeap.size() > 0 && pointsConnected < n) {

        const [cost, currentPoint] = minHeap.pop();

        // Already connected → ignore
        if (visited[currentPoint]) {
            continue;
        }

        // Add this point to MST
        visited[currentPoint] = true;

        totalCost += cost;
        pointsConnected++;

        // Calculate distance from current point
        // to every unvisited point
        for (let nextPoint = 0; nextPoint < n; nextPoint++) {

            if (visited[nextPoint]) {
                continue;
            }

            const [x1, y1] = points[currentPoint];
            const [x2, y2] = points[nextPoint];

            const distance =
                Math.abs(x1 - x2) +
                Math.abs(y1 - y2);

            minHeap.push([distance, nextPoint]);
        }
    }

    return totalCost;
};
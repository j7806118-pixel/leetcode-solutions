var networkDelayTime = function(times, n, k) {
    // 1. Build adjacency list
    const graph = new Map();

    for (let [u, v, w] of times) {
        if (!graph.has(u)) {
            graph.set(u, []);
        }

        graph.get(u).push([v, w]);
    }

    // 2. Distance from k to every node
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;

    // 3. Min Heap
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(value) {
            this.heap.push(value);

            let i = this.heap.length - 1;

            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);

                // Compare time: [time, node]
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

    // 4. Start Dijkstra
    const minHeap = new MinHeap();

    // [time, node]
    minHeap.push([0, k]);

    while (minHeap.size() > 0) {
        const [time, node] = minHeap.pop();

        // Ignore outdated heap entry
        if (time > dist[node]) {
            continue;
        }

        // Explore neighbors
        for (let [neighbor, weight] of graph.get(node) || []) {
            const newTime = time + weight;

            // Found a shorter path
            if (newTime < dist[neighbor]) {
                dist[neighbor] = newTime;

                minHeap.push([newTime, neighbor]);
            }
        }
    }

    // 5. Find the maximum shortest distance
    let answer = 0;

    for (let node = 1; node <= n; node++) {
        if (dist[node] === Infinity) {
            return -1;
        }

        answer = Math.max(answer, dist[node]);
    }

    return answer;
};
var swimInWater = function(grid) {
    const n = grid.length;

    // Min Heap
    // Stores: [time, row, col]
    class SwimMinHeap {
        constructor() {
            this.heap = [];
        }

        push(value) {
            this.heap.push(value);

            let i = this.heap.length - 1;

            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);

                // Compare time
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

    const minHeap = new SwimMinHeap();

    // visited[row][col]
    const visited = Array.from(
        { length: n },
        () => new Array(n).fill(false)
    );

    // Start at (0,0)
    // Time initially equals its elevation
    minHeap.push([grid[0][0], 0, 0]);

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    while (minHeap.size() > 0) {

        const [time, row, col] = minHeap.pop();

        // Already visited
        if (visited[row][col]) {
            continue;
        }

        visited[row][col] = true;

        // Reached bottom-right
        if (row === n - 1 && col === n - 1) {
            return time;
        }

        // Explore 4 directions
        for (let [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Check boundaries
            if (
                newRow < 0 ||
                newRow >= n ||
                newCol < 0 ||
                newCol >= n
            ) {
                continue;
            }

            if (visited[newRow][newCol]) {
                continue;
            }
            const newTime = Math.max(
                time,
                grid[newRow][newCol]
            );

            minHeap.push([
                newTime,
                newRow,
                newCol
            ]);
        }
    }

    return -1;
};  
var kClosest = function(points, k) {
    // Max-Heap ordered by distance (index 0)
    const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

    for (let point of points) {
        let [x, y] = point;
        let distance = x * x + y * y;

        maxHeap.enqueue([distance, point]);

        if (maxHeap.size() > k) {
            maxHeap.dequeue();
        }
    }

    let result = [];
    while (maxHeap.size() > 0) {
        result.push(maxHeap.dequeue()[1]);
    }

    return result;
};
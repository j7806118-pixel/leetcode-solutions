var DetectSquares = function() {
    this.points = new Map();
};

DetectSquares.prototype.add = function(point) {
    let key = `${point[0]},${point[1]}`;

    this.points.set(
        key,
        (this.points.get(key) || 0) + 1
    );
};

DetectSquares.prototype.count = function(point) {
    let x = point[0];
    let y = point[1];

    let total = 0;

    for (let [key, frequency] of this.points) {
        let [x1, y1] = key.split(",").map(Number);

        if (
            x !== x1 &&
            y !== y1 &&
            Math.abs(x - x1) === Math.abs(y - y1)
        ) {
            let p1 = `${x1},${y}`;
            let p2 = `${x},${y1}`;

            total +=
                frequency *
                (this.points.get(p1) || 0) *
                (this.points.get(p2) || 0);
        }
    }

    return total;
};
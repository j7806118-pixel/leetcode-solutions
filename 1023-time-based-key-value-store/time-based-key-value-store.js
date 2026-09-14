class TimeMap {
    constructor() {
        this.store = new Map();
    }

    set(key, value, timestamp) {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }

        this.store.get(key).push([timestamp, value]);
    }

    get(key, timestamp) {
        if (!this.store.has(key)) {
            return "";
        }

        let values = this.store.get(key);

        let left = 0;
        let right = values.length - 1;

        let answer = "";

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            let [time, value] = values[mid];

            if (time === timestamp) {
                return value;
            }

            if (time < timestamp) {
                answer = value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return answer;
    }
}

let timeMap = new TimeMap();

timeMap.set("foo", "bar", 1);

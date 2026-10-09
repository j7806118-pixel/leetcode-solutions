function findCheapestPrice(n, flights, src, dst, k) {
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    for (let flightLimit = 1; flightLimit <= k + 1; flightLimit++) {
        const nextDist = [...dist];

        for (const [from, to, price] of flights) {
            if (dist[from] === Infinity) {
                continue;
            }

            const newCost = dist[from] + price;

            if (newCost < nextDist[to]) {
                nextDist[to] = newCost;
            }
        }

        dist = nextDist;
    }

    return dist[dst] === Infinity ? -1 : dist[dst];
}
function findItinerary(tickets) {
    const graph = new Map();

    // Build graph
    for (const [from, to] of tickets) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }

        graph.get(from).push(to);
    }

    // Reverse sort so pop() gives lexicographically smallest destination
    for (const destinations of graph.values()) {
        destinations.sort().reverse();
    }

    const route = [];

    function dfs(airport) {
        const destinations = graph.get(airport) || [];

        while (destinations.length > 0) {
            const nextAirport = destinations.pop();

            dfs(nextAirport);
        }

        route.push(airport);
    }

    dfs("JFK");

    return route.reverse();
}
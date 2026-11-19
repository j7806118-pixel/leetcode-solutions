/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
    if (source === destination) return true;

    // 1. Build the adjacency list
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    // 2. Track visited nodes to prevent infinite loops
    const visited = new Set();

    function dfs(current) {
        if (current === destination) return true;
        visited.add(current);

        for (const neighbour of graph[current]) {
            if (!visited.has(neighbour)) {
                if (dfs(neighbour)) return true;
            }
        }
        return false;
    }

    return dfs(source);
}
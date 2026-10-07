class UnionFind {
    constructor(n) {
        this.parent = new Array(n + 1);

        for (let i = 0; i <= n; i++) {
            this.parent[i] = i;
        }
    }

    find(x) {
        if (this.parent[x] === x) {
            return x;
        }

        this.parent[x] = this.find(this.parent[x]);

        return this.parent[x];
    }

    union(a, b) {
        const rootA = this.find(a);
        const rootB = this.find(b);

        if (rootA === rootB) {
            return false;
        }

        this.parent[rootB] = rootA;

        return true;
    }
}

function findRedundantConnection(edges) {
    const n = edges.length;

    const uf = new UnionFind(n);

    for (const [a, b] of edges) {
        if (!uf.union(a, b)) {
            return [a, b];
        }
    }

    return [];
}
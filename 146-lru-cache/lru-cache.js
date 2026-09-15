class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        // Dummy nodes
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Remove a node from the linked list
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // Add a node just before tail
    add(node) {
        node.next = this.tail;
        node.prev = this.tail.prev;

        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        let node = this.cache.get(key);

        // This key was just used, so make it most recently used
        this.remove(node);
        this.add(node);

        return node.value;
    }

    put(key, value) {
        // If key already exists
        if (this.cache.has(key)) {
            let node = this.cache.get(key);

            node.value = value;

            // Move it to most recently used position
            this.remove(node);
            this.add(node);

            return;
        }

        // Create new node
        let newNode = new Node(key, value);

        this.cache.set(key, newNode);
        this.add(newNode);

        // Too many keys → remove least recently used
        if (this.cache.size > this.capacity) {
            let lru = this.head.next;

            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
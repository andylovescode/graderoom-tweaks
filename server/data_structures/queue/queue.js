const { LinkedList } = require('../linked_list/linked_list');

/**
 * Data structure where we add and remove elements in a first-in, first-out (FIFO) fashion
 */
module.exports.Queue = class {
    constructor() {
        this.items = new LinkedList();
        this.priorityPosition = -1;
    }

    /**
     * Size of the queue
     */
    get size() {
        return this.items.size;
    }

    /**
     * Add element to the queue
     * Runtime: O(1)
     * @param {any} item
     * @returns {Queue} instance to allow chaining.
     */
    enqueue(item) {
        this.items.addLast(item);
        return this;
    }

    priorityEnqueue(item) {
        this.priorityPosition++;
        this.items.add(item, this.priorityPosition);
        return this;
    }

    /**
     * Remove element from the queue
     * Runtime: O(1)
     * @returns {any} removed value.
     */
    dequeue() {
        let ret = this.items.removeFirst();
        if (this.priorityPosition >= 0) {
            this.priorityPosition--;
        }
        return ret;
    }

    /**
     * Return true if is empty false otherwise true
     */
    isEmpty() {
        return !this.items.size;
    }

    // Aliases
    add(...args) {
        return this.enqueue(...args);
    }

    remove(...args) {
        return this.dequeue(...args);
    }
}

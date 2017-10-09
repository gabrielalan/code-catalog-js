const Queue = require("../../src/algorithms/queue");
const assert = require('assert');

describe('Queue', function() {
    let queue;

    beforeEach(() => queue = new Queue());

    it('should start with null head and tail', () => {
        assert.equal(queue.head, null);
        assert.equal(queue.tail, null);
    });

    it('should enqueue a value correctly', () => {
        const n1 = queue.enqueue(1);
        const n2 = queue.enqueue(2);
        const n3 = queue.enqueue(3);

        assert.equal(n1, queue.head);
        assert.equal(n3, queue.tail);
    });

    it('should dequeue a value correctly', () => {
        const n1 = queue.enqueue(1);
        const n2 = queue.enqueue(2);
        const n3 = queue.enqueue(3);

        const dequeued = queue.dequeue();

        assert.equal(dequeued, n1);
        assert.equal(n2, queue.head);
        assert.equal(n3, queue.tail);
    });
});
const { DoublyLinkedList, LinkedListNode } = require("../../src/algorithms/linked-lists");
const assert = require('assert');

describe('Linked List', function() {
    describe('# Doubly Linked List', function() {
        let list;

        beforeEach(() => list = new DoublyLinkedList());

        it('should start with null head and tail', () => {
            assert.equal(list.head, null);
            assert.equal(list.tail, null);
        });

        it('should link a node correctly when inserting', () => {
            const n1 = list.append(1);
            const n2 = list.append(2);

            assert.ok(n1 instanceof LinkedListNode);
            assert.equal(n1, list.head);
            assert.equal(n2, list.tail);
            assert.equal(n1.next, n2);
            assert.equal(n2.previous, n1);

            n15 = list.addBefore(n2, 1.5);

            assert.equal(n1.next, n15);
            assert.equal(n2.previous, n15);
        });
    });
});
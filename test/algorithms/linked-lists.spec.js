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

        it('should have a find method', () => {
            const n1 = list.append(1);
            const n2 = list.append(2);

            const f1 = list.find(data => data === 2);
            const not_found = list.find(data => data === 99);

            assert.equal(f1, n2);
            assert.equal(not_found, undefined);
        });

        it('should provide methods to remove items', () => {
            const n1 = list.append(1);
            const n2 = list.append(2);
            const n3 = list.append(3);

            list.remove(n3);

            assert.equal(list.tail, n2);

            const poppedN2 = list.pop();

            assert.equal(list.tail, n1);
            assert.equal(n2, poppedN2);

            const shiftedN1 = list.shift();

            assert.equal(list.head, undefined);
            assert.equal(n1, shiftedN1);
        });

        it('should provide a way to clean it', () => {
            const n1 = list.append(1);
            const n2 = list.append(2);

            assert.equal(n1, list.head);
            assert.equal(n2, list.tail);

            list.clear();

            assert.equal(list.head, undefined);
            assert.equal(list.tail, undefined);
        });
    });
});
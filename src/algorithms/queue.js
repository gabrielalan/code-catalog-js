const { DoublyLinkedList } = require('./linked-lists');

/**
 * Queue can be implemented with arrays or linked lists
 * In any case enqueue is just append and dequeue is just shift
 */
class Queue extends DoublyLinkedList {
	enqueue(data) {
		return this.append(data);
	}

	dequeue() {
		return this.shift();
	}
}

module.exports = Queue;
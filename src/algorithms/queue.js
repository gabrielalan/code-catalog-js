const { DoublyLinkedList } = require('./linked-lists');

/**
 * Queue can be implemented with arrays or linked lists
 * In any case enqueue is just append and dequeue is just shift
 */
class Queue extends DoublyLinkedList {
	enqueue(data) {
		return this.append(data);
	}

	dequeue(data) {
		return this.shift(data);
	}
}

module.exports = Queue;
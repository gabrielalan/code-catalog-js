/**
 * ES6 Linked List version
 * https://www.coursera.org/learn/data-structures/lecture/jpGKD/doubly-linked-lists
 */

class LinkedListNode {
	constructor(data) {
		this.data = data;
	}

	setNext(node) {
		this.next = node;
	}

	setPrevious(node) {
		this.previous = node;
	}

	eraseLinks() {
		this.next = undefined;
		this.previous = undefined;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = undefined;
		this.tail = undefined;
	}

	shift() {
		if (!this.head) {
			return undefined;
		}

		if (this.tail === this.head) {
			return this.clear();
		}

		const node = this.head;
		this.head = node.next;
		this.head.setPrevious(undefined);

		node.eraseLinks();

		return node;
	}

	pop() {
		if (!this.tail) {
			return undefined;
		}

		if (this.tail === this.head) {
			return this.clear();
		}

		const node = this.tail;
		this.tail = node.previous;
		this.tail.setNext(undefined);

		node.eraseLinks();

		return node;
	}

	clear() {
		let node;

		if (this.tail === this.head) {
			node = this.head;
			node.eraseLinks();
		}

		this.head = undefined;
		this.tail = undefined;

		return node;
	}

	prepend(data) {
		let node = data instanceof LinkedListNode ? data : new LinkedListNode(data);

		if (!this.head) {
			this.head = this.tail = node;
		} else {
			this.head.setPrevious(node);
			node.setNext(this.head);
			this.head = node;
		}

		return node;
	}

	append(data) {
		let node = data instanceof LinkedListNode ? data : new LinkedListNode(data);

		if (!this.tail) {
			this.tail = this.head = node;
		} else {
			this.tail.setNext(node);
			node.setPrevious(this.tail);
			this.tail = node;
		}

		return node;
	}
}
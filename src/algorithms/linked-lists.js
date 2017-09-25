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

	/**
	 * O(n)
	 */
	toArray() {
		let current = this.head;
		const list = [current];

		while(current.next) {
			current = current.next;
			list.push(current);
		}

		return list;
	}

	/**
	 * O(n)
	 */
	find(compare) {
		let node;
		let current = this.head;

		while(!node) {
			if (compare(current.data)) {
				return current;
			}

			if (!current.next) {
				return undefined;
			}

			current = current.next;
		}
	}

	remove(node) {
		if (!(node instanceof LinkedListNode)) {
			throw new Error("Invalid node: You need to provide a valid node to remove. You can use .find() method");
		}

		const next = node.next;
		const previous = node.previous;

		if (!next && !previous && (node === this.head || node === this.tail)) {
			return this.clear();
		}

		if (node === this.head) {
			this.head = node.next;
			this.head.setPrevious(undefined);
		} else if (node === this.tail) {
			this.tail = node.previous;
			this.head.setNext(undefined);
		} else {
			previous.setNext(next);
			next.setPrevious(previous);
		}

		node.eraseLinks();

		return node;
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

	verifyNodes(anchor, data) {
		let node = data instanceof LinkedListNode ? data : new LinkedListNode(data);

		if (!(anchor instanceof LinkedListNode)) {
			throw new Error("Invalid anchor node: You need to provide a valid node as anchor. You can use .find() method");
		}

		return node;
	}

	addAfter(anchor, data) {
		let node = this.verifyNodes(anchor, data);

		node.setPrevious(anchor);
		
		if (anchor === this.tail) {
			this.tail = node;
		} else {
			node.setNext(anchor.next);
			anchor.next.setPrevious(node);
		}

		anchor.setNext(node);

		return node;
	}

	addBefore(anchor, data) {
		let node = this.verifyNodes(anchor, data);

		node.setNext(anchor);

		if (anchor === this.head) {
			this.head = node;
		} else {
			node.setPrevious(anchor.previous);
			anchor.previous.setNext(node);
		}

		anchor.setPrevious(node);

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

module.exports = {
    LinkedListNode,
    DoublyLinkedList
};
const Node = require('./binary-search-node');

/**
 * Simplest binary search tree implementation
 * * * * * NON-Balanced binary tree * * * * *
 */
class BinarySearchTree {
    constructor(compare) {
        this.root = undefined;
        this.compare = compare;
    }

    /**
     * @param value Any
     * @returns BinarySearchNode | boolean
     */
    find(value, current = this.root) {
        const comp = this.compare(value, current.value);

        if (comp === 0)
            return current;

        if (comp > 0 && current.right)
            return this.find(value, current.right);

        if (comp < 0 && current.left)
            return this.find(value, current.left);

        return false;
    }

    /**
     * @param value BinarySearchNode | Any
     * @returns BinarySearchNode | boolean
     */
    insert(value, current = this.root) {
        const node = value instanceof Node ? value : new Node(value);

        if (!this.root) {
            this.root = node;
            return node;
        }

        if (this.compare(node.value, current.value) > 0) {
            if (current.right)
                return this.insert(node, current.right);

            current.setRight(node);
            return node;
        }

        if (this.compare(node.value, current.value) < 0) {
            if (current.left)
                return this.insert(node, current.left);

            current.setLeft(node);
            return node;
        }

        return false;
    }
}

module.exports = BinarySearchTree;
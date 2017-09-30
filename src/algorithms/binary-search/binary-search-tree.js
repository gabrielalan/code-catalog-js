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
     * O(n) since it iterate for each branch of each node
     */
    count(current = this.root) {
        if (!current) {
            return 0;
        }

        return 1 + this.count(current.right) + this.count(current.left);
    }

    /**
     * @param node BinarySearchNode instance of the node
     *        use tree.find to get the node instance (or the return of insert)
     * @returns BinarySearchNode | boolean
     */
    remove(node) {
        if (node.isLeaf()) {
            return this._removeLeafNode(node);
        }

        if ((node.right && !node.left) || (!node.right && node.left)) {
            return this._removeSingleChildNode(node);
        }

        if (node.right && node.left) {
            return this._removeDoubleChildNode(node);
        }

        return false;
    }

    _removeLeafNode(node) {
        node.cleanParentRelation();

        if (node === this.root)
            this.root = undefined;

        return node;
    }

    _removeDoubleChildNode(node) {
        const smallestRight = this.findSmallestFrom(node.right);

        node.setValue(smallestRight.value);

        return this.remove(smallestRight);
    }

    _removeSingleChildNode(node) {
        const child = node.right || node.left;

        if (node !== this.root) {
            node.getParent().replaceChild(node, child);
        } else {
            this.root = child;
        }

        node.setLeft(null);
        node.setRight(null);
        return node;
    }

    findSmallestFrom(node) {
        return node.left ? this.findSmallestFrom(node.left) : node;
    }

    /**
     * O(log n) in avarage cases
     * O(n) in cases when the value to find is on the deepest level
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
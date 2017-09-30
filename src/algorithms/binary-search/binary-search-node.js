class BinaryTreeNode {
    constructor(value) {
        this.setValue(value);
        this.setRight(null);
        this.setLeft(null);
        this.setParent(null, null);
    }

    isLeaf() {
        return !this.right && !this.left;
    }

    getParent() {
        return this.parent.node;
    }

    cleanParentRelation() {
        const node = this.getParent();

        if (!node)
            return false;

        const direction = this.parent.direction === 'left' ? node.setLeft : node.setRight;

        direction.call(node, null);
        return true;
    }

    replaceChild(oldChild, newChild) {
        const direction = oldChild.parent.direction === 'left' ? this.setLeft : this.setRight;

        direction.call(this, newChild);
    }

    setParent(node, direction) {
        this.parent = { node, direction };
    }

    setRight(node) {
        this.right = node;

        if (node)
            node.setParent(this, 'right');
    }

    setLeft(node) {
        this.left = node;

        if (node)
            node.setParent(this, 'left');
    }

    setValue(value) {
        this.value = value;
    }
}

module.exports = BinaryTreeNode;
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.right = undefined;
        this.left = undefined;
    }

    setRight(node) {
        this.right = node;
    }

    setLeft(node) {
        this.left = node;
    }
}

module.exports = BinaryTreeNode;
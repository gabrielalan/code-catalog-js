const Tree = require("../../../src/algorithms/binary-search/binary-search-tree");
const assert = require('assert');

describe('Binary Search Tree', () => {
    let tree,
        compareFn = (a, b) => a === b ? 0 : a > b ? 1 : -1;

    beforeEach(() => tree = new Tree(compareFn))

    it('It should insert a value in the correct place', () => {
        const v5 = tree.insert(5);
        const v3 = tree.insert(3);
        const v4 = tree.insert(4);
        const v2 = tree.insert(2);
        const v7 = tree.insert(7);
        const v6 = tree.insert(6);

        assert.equal(tree.root, v5);
        assert.equal(v5.left, v3);
        assert.equal(v5.right, v7);
        assert.equal(v3.left, v2);
        assert.equal(v3.right, v4);
        assert.equal(v7.left, v6);
    });

    /**
     *        __4__
     *       /     \
     *      2       6
     *     / \     / \
     *    1   3   5   7
     */
    it('It should transform to array using breadth-first level traversal', () => {
        const v4 = tree.insert(4);
        const v6 = tree.insert(6);
        const v2 = tree.insert(2);
        const v3 = tree.insert(3);
        const v1 = tree.insert(1);
        const v5 = tree.insert(5);
        const v7 = tree.insert(7);

        const arr = tree.toArray(Tree.traversalAlgorithms.BREADTH_FIRST.LEVEL);

        assert.equal(arr[0], 4);
        assert.equal(arr[1], 2);
        assert.equal(arr[2], 6);
        assert.equal(arr[3], 1);
        assert.equal(arr[4], 3);
        assert.equal(arr[5], 5);
        assert.equal(arr[6], 7);
    });

    it('It should transform to array using depth-first-IN-order traversal', () => {
        const v4 = tree.insert(4);
        const v6 = tree.insert(6);
        const v2 = tree.insert(2);
        const v3 = tree.insert(3);
        const v1 = tree.insert(1);
        const v5 = tree.insert(5);
        const v7 = tree.insert(7);

        const arr = tree.toArray(Tree.traversalAlgorithms.DEPTH_FIRST.IN_ORDER);

        assert.equal(arr[0], 1);
        assert.equal(arr[3], 4);
        assert.equal(arr[6], 7);
    });

    it('It should transform to array using depth-first-PRE-order traversal', () => {
        const v4 = tree.insert(4);
        const v6 = tree.insert(6);
        const v2 = tree.insert(2);
        const v3 = tree.insert(3);
        const v1 = tree.insert(1);
        const v5 = tree.insert(5);
        const v7 = tree.insert(7);

        const arr = tree.toArray(Tree.traversalAlgorithms.DEPTH_FIRST.PRE_ORDER);

        assert.equal(arr[0], 4);
        assert.equal(arr[1], 2);
        assert.equal(arr[6], 7);
    });

    it('It should transform to array using depth-first-POST-order traversal', () => {
        const v4 = tree.insert(4);
        const v6 = tree.insert(6);
        const v2 = tree.insert(2);
        const v3 = tree.insert(3);
        const v1 = tree.insert(1);
        const v5 = tree.insert(5);
        const v7 = tree.insert(7);

        const arr = tree.toArray(Tree.traversalAlgorithms.DEPTH_FIRST.POST_ORDER);

        assert.equal(arr[0], 1);
        assert.equal(arr[1], 3);
        assert.equal(arr[6], 4);
    });

    it('It should find the right node', () => {
        const v1 = tree.insert(1);
        const v3 = tree.insert(3);
        const v4 = tree.insert(4);
        const vM1 = tree.insert(-1);

        assert.equal(tree.find(3), v3);
        assert.equal(tree.find(-1), vM1);
    });

    it('It should have a height method to return the deepest subtree level', () => {
        const v5 = tree.insert(5);
        const v6 = tree.insert(6);
        const v7 = tree.insert(7);
        const v1 = tree.insert(1);
        const v3 = tree.insert(3);
        const v4 = tree.insert(4);
        const v45 = tree.insert(4.5);

        assert.equal(tree.height(), 5);
    });

    it('It should have a count method to return the number of all existent nodes', () => {
        const v1 = tree.insert(1);
        const v3 = tree.insert(3);
        const v4 = tree.insert(4);
        const v5 = tree.insert(5);

        assert.equal(tree.count(), 4);
    });

    it('It should remove a node with correct rotations', () => {
        const v5 = tree.insert(5);
        const v3 = tree.insert(3);
        const v4 = tree.insert(4);
        const v2 = tree.insert(2);
        const v35 = tree.insert(3.5);
        const v8 = tree.insert(8);
        const v7 = tree.insert(7);
        const v6 = tree.insert(6);

        tree.remove(v6);

        assert.ok(!v7.left);

        tree.remove(v8);

        assert.equal(v5.right, v7);

        tree.remove(v3);

        assert.equal(v3.value, 3.5);
        assert.equal(v4.left, undefined);
        assert.equal(v5.left, v3);

        tree.remove(v5);

        assert.equal(tree.root, v5);
        assert.equal(tree.root.value, v7.value);
        assert.equal(v3.parent.node.value, v7.value);
    });
});
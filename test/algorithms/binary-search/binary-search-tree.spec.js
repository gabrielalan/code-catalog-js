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

    it('It should find the right node', () => {
        const v1 = tree.insert(1);
        const v3 = tree.insert(3);
        const v4 = tree.insert(4);
        const vM1 = tree.insert(-1);

        assert.equal(tree.find(3), v3);
        assert.equal(tree.find(-1), vM1);
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
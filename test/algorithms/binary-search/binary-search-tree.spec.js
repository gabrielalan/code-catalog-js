const Tree = require("../../../src/algorithms/binary-search/binary-search-tree");
const assert = require('assert');

describe('Binary Search Tree', () => {
    let tree,
        compareFn = (a, b) => a === b ? 0 : a > b ? 1 : -1;

    beforeEach(() => tree = new Tree(compareFn))

    it('It should insert a value in the correct place', () => {
        const v1 = tree.insert(1);
        const v3 = tree.insert(3);
        const v4 = tree.insert(4);
        const vM1 = tree.insert(-1);

        assert.equal(tree.root, v1);
        assert.equal(v1.right, v3);
        assert.equal(v1.left, vM1);
        assert.equal(v3.right, v4);
    });

    it('It should find the right node', () => {
        const v1 = tree.insert(1);
        const v3 = tree.insert(3);
        const v4 = tree.insert(4);
        const vM1 = tree.insert(-1);

        assert.equal(tree.find(3), v3);
        assert.equal(tree.find(-1), vM1);
    });
});
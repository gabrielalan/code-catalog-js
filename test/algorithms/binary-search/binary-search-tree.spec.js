const Tree = require("../../../src/algorithms/binary-search/binary-search-tree");
const assert = require('assert');

describe('Binary Search Tree', () => {
    it('It should insert a value in the correct place', () => {
        const tree = new Tree((a, b) => a > b ? 1 : -1);

        const v1 = tree.insert(1);
        const v3 = tree.insert(3);
        const v4 = tree.insert(4);
        const vM1 = tree.insert(-1);

        assert.equal(tree.root, v1);
        assert.equal(v1.right, v3);
        assert.equal(v1.left, vM1);
        assert.equal(v3.right, v4);
    });
});
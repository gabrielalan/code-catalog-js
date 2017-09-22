const parenthesesAreBalanced = require("../../src/challenges/balanced-parentheses");
const assert = require('assert');

describe('Balanced Parentheses', function() {
  describe('#1', function() {
    it('should return true when the pattern is correct', function() {
        assert.ok(parenthesesAreBalanced('()()'));
        assert.ok(parenthesesAreBalanced('[()]'));
        assert.ok(parenthesesAreBalanced('{[()]}'));
        assert.ok(parenthesesAreBalanced('((([{}])))'));
        assert.ok(parenthesesAreBalanced('([])[]()'));
        assert.ok(parenthesesAreBalanced('((([([])]))())'));
    });

    it('should return false when the pattern is wrong', function() {
        assert.ok(!parenthesesAreBalanced('{{{'));
        assert.ok(!parenthesesAreBalanced('}}}'));
        assert.ok(!parenthesesAreBalanced('{[}]'));
        assert.ok(!parenthesesAreBalanced('(])'));
        assert.ok(!parenthesesAreBalanced('([]]()'));
        assert.ok(!parenthesesAreBalanced(']['));
    });
  });
});
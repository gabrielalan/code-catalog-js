const hasPairWithSum = require("../../src/challenges/pair-sum");
const assert = require('assert');

describe('Pair Sum', function() {
  describe('#1', function() {
    it('should return true when it has a pair summed to the result', function() {
        assert.ok(hasPairWithSum([1, 2, 3, 4, 5], 9));
        assert.ok(hasPairWithSum([1, 2, 3, 4, 4], 8));
        assert.ok(hasPairWithSum([1, 2, 3, 4, 99], 100));
    });

    it('should return false when the list does not contain a good pair', function() {
        assert.ok(!hasPairWithSum([1, 2, 3, 4, 5], 99));
        assert.ok(!hasPairWithSum([1, 2, 3, 4, 4], 17));
        assert.ok(!hasPairWithSum([1, 2, 3, 4, 99], 42));
    });
  });
});
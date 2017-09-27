/**
 * Given an number array ([8, 3, 1, 2, 7, 4, 4])
 * Find a pair that summed resolves to a value (i.e. 8)
 * This is a O(n) solution for an **unordered list**
 */
module.exports = function hasPairWithSum(list, sum) {
    const set = new Set();

    for (let number of list) {
        if (set.has(number))
            return true;

        set.add(sum - number);
    }

    return false;
};
import unittest

from balanced_parentheses import are_parentheses_balanced

class TestBalancedParentheses(unittest.TestCase):

    def test_correct_strings(self):
        self.assertTrue(are_parentheses_balanced('()()'))
        self.assertTrue(are_parentheses_balanced('[()]'))
        self.assertTrue(are_parentheses_balanced('{[()]}'))
        self.assertTrue(are_parentheses_balanced('((([{}])))'))

    def test_wrong_strings(self):
        self.assertFalse(are_parentheses_balanced('{{{'))
        self.assertFalse(are_parentheses_balanced('}}}'))
        self.assertFalse(are_parentheses_balanced('{[}]'))
        self.assertFalse(are_parentheses_balanced('(])'))

if __name__ == '__main__':
    unittest.main()
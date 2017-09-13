import unittest

from square_root import newton_raphson_method

class TestSquareRootMethods(unittest.TestCase):

    def test_correct_strings(self):
        self.assertEqual(newton_raphson_method(9), 3)
        self.assertEqual(newton_raphson_method(16), 4)
        self.assertEqual(newton_raphson_method(25), 5)
        self.assertEqual(newton_raphson_method(36), 6)
        self.assertEqual(newton_raphson_method(100), 10)
        self.assertEqual(newton_raphson_method(2830.24), 53.2)

if __name__ == '__main__':
    unittest.main()
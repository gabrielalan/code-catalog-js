from math import fabs

def newton_raphson_method(number):
    guess1 = (number * 1.0) / 2
    guess2 = (guess1 + (number / guess1)) / 2

    while fabs(guess1 - guess2) >= 0.0000000001:
        guess1 = guess2
        guess2 = (guess1 + (number / guess1)) / 2

    return guess2
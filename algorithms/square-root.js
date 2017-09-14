function square_root(num) {
  let guess1 = (num * 1.0) / 2;
  let guess2 = (guess1 + (num / guess1)) / 2;

  while(Math.abs(guess1 - guess2) >= 0.0000000001) {
    guess1 = guess2;
    guess2 = (guess1 + (num / guess1)) / 2;
  }

  return guess2;
}
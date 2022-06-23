function generateParentheses(n) {
  function rec(n, combo, combos) {
	const validCombo = isParenthesesValid(combo.join(''));
      if(!validCombo) {
          return;
        } else if(n === 0) {
          combos.push(combo.join(''));
        } else {
          combo.push('(');
          rec(n - 1, combo, combos);
          combo.pop();
          combo.push(')');
          rec(n - 1, combo, combos);
          combo.pop();
        }
    }

  const combos = [];
  const combo = [];
  rec(n * 2, combo, combos);

  return combos;
}

function isParenthesesValid(validationString) {
  const stack = [];
  for(let pos = 0; pos < validationString.length; pos++) {
	const currentChar = validationString[pos];
	if(currentChar === '(') {
	  stack.push(currentChar);
	} else if(currentChar === ')') {
	  if(stack.length === 0) return false;
	  stack.pop();
	}
  }

  return stack.length === 0;
}

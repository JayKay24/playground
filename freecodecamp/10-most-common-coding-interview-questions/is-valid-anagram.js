function isValidAnagram(str) {
function isValidAnagram(s1, s2) {
  const s1Chars = new Map();
  for(const char of s1) {
      if(s1Chars.has(char)) {
          s1Chars.set(s1Chars.get(char) + 1);
        } else {
          s1Chars.set(char, 1);
        }
    }
  
  for(const char of s2) {
      if(s1Chars.has(char)) {
          if(s1Chars.get(char) === 1) {
              s1Chars.delete(char);
            } else {
              s1Chars.set(s1Chars.get(char) - 1);
            }
        } else {
          return false;
        }
    }
  
  return s1Chars.size === 0 ? true : false;
}
isValidAnagram('', '');
isValidAnagram('', 'w');
isValidAnagram('w', 'w');
isValidAnagram('w', 'ww');
isValidAnagram('w', 'xy');
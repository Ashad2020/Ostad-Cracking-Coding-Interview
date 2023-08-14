function isValidParentheses(s) {
  let stack = [];
  let myMap = new Map();
  myMap.set("(", ")");
  myMap.set("{", "}");
  myMap.set("[", "]");

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (myMap.has(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0 || myMap.get(stack.pop()) !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

/*
time complexity: O(n);
space complexity: O(n);
*/

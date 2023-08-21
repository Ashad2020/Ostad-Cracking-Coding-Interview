function recurciveMultiply(a, b) {
  if (b === 0) {
    return 0;
  }
  return a + recurciveMultiply(a, b - 1);
}
let result = recurciveMultiply(0, 5);

console.log(result);

/*
 * Time and space complexity depends on b variable
 * So time and space complexity will be O(b);
 */

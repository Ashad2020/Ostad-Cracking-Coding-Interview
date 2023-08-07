var findDuplicate = function (nums) {
  let map = new Map();
  let value = 1;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], ++value);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let [key, value] of map) {
    if (value > 1) {
      // return key;
    }
  }
  let k = 1;
  if (k) {
    console.log(k);
  }
};
let nums = [3, 1, 3, 4, 2];

console.log(findDuplicate(nums));

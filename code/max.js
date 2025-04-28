nums = [3, 7, 2, 9, 5];

let max = nums[0];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log(max);

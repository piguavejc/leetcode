export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let rigth = nums.length - 1;

  if (target < nums[left]) {
    return left;
  }

  while (left <= rigth) {
    const middle = left + Math.floor((rigth - left) / 2);

    const value = nums[middle];

    if (target === value) {
      return middle;
    }

    if (target > value && target < nums[middle + 1]) {
      return middle + 1;
    }

    if (target > value) left = middle + 1;
    else rigth = middle - 1;
  }

  return nums.length;
}

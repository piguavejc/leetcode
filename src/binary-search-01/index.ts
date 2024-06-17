export function search(nums: number[], target: number): number {
  let indexStart = 0;
  let indexEnd = nums.length - 1;

  const dataStart = nums[indexStart];
  const dataEnd = nums[indexEnd];

  if (dataStart === target) {
    return indexStart;
  }

  if (dataEnd === target) {
    return indexEnd;
  }

  while (indexStart <= indexEnd) {
    const index = indexStart + Math.floor((indexEnd - indexStart) / 2);
    const data = nums[index];

    if (data === target) {
      return index;
    }

    if (target > data) {
      indexStart = index + 1;
    } else {
      indexEnd = index - 1;
    }
  }

  return -1;
}

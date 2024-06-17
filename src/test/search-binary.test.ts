import { search } from "@/binary-search-01";
import { searchInsert } from "@/binary-search-02";

test("Binary Search #1", () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  const output = 4;
  const result = search(nums, target);
  expect(result).toBe(output);
});

test("Binary Search #2", () => {
  const nums = [1, 3, 5, 6];
  const target = 5;
  const output = 2;
  const result = searchInsert(nums, target);
  expect(result).toBe(output);
});

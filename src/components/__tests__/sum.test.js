import { sum } from "../sum";

test("Function to calculate the sum of 2 input variables", () => {
  const result = sum(3, 2);
  expect(result).toBe(5);
});

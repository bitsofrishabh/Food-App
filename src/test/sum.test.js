import { sum } from "../components/sum";

test("should return the sum of 2 numbers", () => {
  const result = sum(1, 2);

  //Assertion
  expect(result).toBe(3);
});

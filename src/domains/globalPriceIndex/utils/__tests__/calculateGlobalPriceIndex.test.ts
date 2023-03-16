import { calculateGlobalPriceIndex } from "../calculateGlobalPriceIndex";

describe("calculateGlobalPriceIndex", () => {
  it("should calculate global price index correctly", () => {
    expect(calculateGlobalPriceIndex([1, 1])).toBe(1);
    expect(calculateGlobalPriceIndex([1, 2])).toBe(1.5);
    expect(calculateGlobalPriceIndex([1, 2, 2, 2, 2])).toBe(1.8);
    expect(calculateGlobalPriceIndex([])).toBe(0);
  });
});

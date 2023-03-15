import { calculateMidPrice } from "../calculateMidPrice";

describe("calculateMidPrice", () => {
  it("should calculate the mid price correctly", () => {
    expect(calculateMidPrice(16978.28, 16978.16)).toBe(16978.22);
  });
});

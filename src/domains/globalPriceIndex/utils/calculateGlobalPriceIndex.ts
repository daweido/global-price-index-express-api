export const calculateGlobalPriceIndex = (midPrices: number[]) => {
  if (midPrices.length === 0) return 0;

  return midPrices.reduce((acc, curr) => acc + curr) / midPrices.length;
};

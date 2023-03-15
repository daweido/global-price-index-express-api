/**
 * Where the first string is the order price, and the second string is the quantity
 */
export type BinanceMarketOrder = [string, string];

export type BinanceOrderBook = {
  lastUpdateId: number;
  bids: BinanceMarketOrder[];
  asks: BinanceMarketOrder[];
};

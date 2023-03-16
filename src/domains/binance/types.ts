/**
 * Where the first string is the order price, and the second string is the quantity
 */
export type BinanceMarketOrder = [string, string];

export type BinanceOrderBook = {
  lastUpdateId: number;
  bids: BinanceMarketOrder[];
  asks: BinanceMarketOrder[];
};

export type BinanceOrderBookTick = {
  /**
   * order book updateId
   */
  u: number;

  /**
   * symbol
   */
  s: string;

  /**
   * best bid price
   */
  b: string;

  /**
   * best bid qty
   */
  B: string;

  /**
   * best ask price
   */
  a: string;

  /**
   * best ask qty
   */
  A: string;
};

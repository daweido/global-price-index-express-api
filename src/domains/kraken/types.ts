/**
 * Where the first string is the order price, the second string is the quantity, and the number is the order timestamp
 */
export type KrakenMarketOrder = [string, string, number];

export type KrakenOrderBook = {
  result: Record<
    string,
    {
      asks: KrakenMarketOrder[];
      bids: KrakenMarketOrder[];
    }
  >;
};

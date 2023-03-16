/**
 * Where the first number is the order price, the second number is the quantity
 */
export type HuobiMarketOrder = [number, number];

type HuobiOrderBookTick = {
  ts: number;
  version: number;
  bids: HuobiMarketOrder[];
  asks: HuobiMarketOrder[];
};

export type HuobiOrderBook = {
  ch: string;
  status: string;
  ts: number;
  tick: HuobiOrderBookTick;
};

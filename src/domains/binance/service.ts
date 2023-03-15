import axios from "axios";
import { calculateMidPrice } from "../../utils/calculateMidPrice";
import { BinanceOrderBook } from "./types";

const getBinanceOrderBook = async (): Promise<BinanceOrderBook | undefined> => {
  // TODO handleError
  const res = await axios.get<BinanceOrderBook>(
    "https://api.binance.com/api/v3/depth?limit=1&symbol=BTCUSDT"
  );

  return res.data;
};

const calculateBinanceMidPrice = (orderBook: BinanceOrderBook) => {
  const bestAsk = +orderBook.asks[0][0];
  const bestBid = +orderBook.bids[0][0];

  return calculateMidPrice(bestAsk, bestBid);
};

export const getBinanceMidPrice = async () => {
  const orderBook = await getBinanceOrderBook();

  return calculateBinanceMidPrice(orderBook);
};

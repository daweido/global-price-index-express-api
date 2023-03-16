import axios from "axios";
import { calculateMidPrice } from "../../utils/calculateMidPrice";
import { HuobiOrderBook } from "./types";
const getHuobiOrderBook = async (): Promise<HuobiOrderBook | undefined> => {
  const res = await axios.get<HuobiOrderBook>(
    "https://api.huobi.pro/market/depth?symbol=btcusdt&depth=5&type=step0"
  );

  return res.data;
};

const calculateHuobiMidPrice = (orderBook: HuobiOrderBook) => {
  const bestAsk = +orderBook.tick.asks[0][0];
  const bestBid = +orderBook.tick.bids[0][0];

  return calculateMidPrice(bestAsk, bestBid);
};

export const getHuobiMidPrice = async () => {
  const orderBook = await getHuobiOrderBook();

  return calculateHuobiMidPrice(orderBook);
};

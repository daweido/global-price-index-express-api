import axios from "axios";
import { calculateMidPrice } from "../../utils/calculateMidPrice";
import { KrakenOrderBook } from "./types";

const getKrakenOrderBook = async (
  pair: string
): Promise<KrakenOrderBook | undefined> => {
  const res = await axios.get<KrakenOrderBook>(
    `https://api.kraken.com/0/public/Depth?pair=${pair}&count=1`
  );

  return res.data;
};

const calculateKrakenMidPrice = (orderBook: KrakenOrderBook, pair: string) => {
  const bestAsk = +orderBook.result[pair].asks[0][0];
  const bestBid = +orderBook.result[pair].bids[0][0];

  return calculateMidPrice(bestAsk, bestBid);
};

export const getKrakenMidPrice = async () => {
  const pair = "XBTUSDT";
  const orderBook = await getKrakenOrderBook(pair);

  return calculateKrakenMidPrice(orderBook, pair);
};

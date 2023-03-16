import axios from "axios";
import { calculateMidPrice } from "../../utils/calculateMidPrice";
import { BinanceOrderBook, BinanceOrderBookTick } from "./types";
import WebSocket from "ws";

const getBinanceOrderBook = async (): Promise<BinanceOrderBook | undefined> => {
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

export const getBinanceOrderBookWS =
  async (): Promise<BinanceOrderBookTick> => {
    return new Promise((resolve) => {
      const ws = new WebSocket(
        "wss://stream.binance.com:9443/ws/btcusdt@bookTicker"
      );

      ws.on("message", function message(data) {
        ws.close();
        resolve(JSON.parse(data.toString()));
      });
    });
  };

const calculateBinanceMidPriceWS = (bookTick: BinanceOrderBookTick) => {
  const bestAsk = +bookTick.a;
  const bestBid = +bookTick.b;

  return calculateMidPrice(bestAsk, bestBid);
};

export const getBinanceMidPriceWS = async () => {
  const bookTick = await getBinanceOrderBookWS();

  return calculateBinanceMidPriceWS(bookTick);
};

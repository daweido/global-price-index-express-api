import { getBinanceMidPrice, getBinanceOrderBook } from "../binance/service";

export const getGlobalPriceIndex = async (req, res) => {
  getBinanceMidPrice();

  // console.log(orderBook);

  res.json({ message: "global REST" });
};

export const getGlobalPriceIndexWS = (req, res) => {
  res.json({ message: "global WS" });
};

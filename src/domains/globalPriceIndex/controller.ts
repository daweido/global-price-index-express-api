import { getBinanceMidPrice } from "../binance/service";
import { getHuobiMidPrice } from "../huobi/service";
import { getKrakenMidPrice } from "../kraken/service";

export const getGlobalPriceIndex = async (req, res) => {
  const binanceMidPrice = await getBinanceMidPrice();
  const krakenMidPrice = await getKrakenMidPrice();
  const huobiMidPrice = await getHuobiMidPrice();

  // console.log(orderBook);

  res.json({ binanceMidPrice, krakenMidPrice, huobiMidPrice });
};

export const getGlobalPriceIndexWS = (req, res) => {
  res.json({ message: "global WS" });
};

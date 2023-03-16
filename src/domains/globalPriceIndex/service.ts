import { getBinanceMidPrice, getBinanceMidPriceWS } from "../binance/service";
import { getHuobiMidPrice } from "../huobi/service";
import { getKrakenMidPrice } from "../kraken/service";
import { calculateGlobalPriceIndex } from "./utils/calculateGlobalPriceIndex";

export const getGlobalPriceIndexService = async () => {
  const midPrices = await Promise.all([
    getBinanceMidPrice(),
    getKrakenMidPrice(),
    getHuobiMidPrice(),
  ]);

  return calculateGlobalPriceIndex(midPrices);
};

export const getGlobalPriceIndexServiceWS = async () => {
  const midPrices = await Promise.all([
    getBinanceMidPriceWS(),
    getKrakenMidPrice(),
    getHuobiMidPrice(),
  ]);

  return calculateGlobalPriceIndex(midPrices);
};

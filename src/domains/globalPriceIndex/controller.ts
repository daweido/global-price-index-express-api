import {
  getGlobalPriceIndexService,
  getGlobalPriceIndexServiceWS,
} from "./service";

export const getGlobalPriceIndex = async (req, res) => {
  const globalPriceIndex = await getGlobalPriceIndexService();

  res.json({ globalPriceIndex });
};

export const getGlobalPriceIndexWS = async (req, res) => {
  const globalPriceIndex = await getGlobalPriceIndexServiceWS();

  res.json({ globalPriceIndex });
};

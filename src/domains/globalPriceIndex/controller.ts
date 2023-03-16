import { getGlobalPriceIndexService } from "./service";

export const getGlobalPriceIndex = async (req, res) => {
  const globalPriceIndex = await getGlobalPriceIndexService();

  res.json({ globalPriceIndex });
};

export const getGlobalPriceIndexWS = (req, res) => {
  res.json({ message: "global WS" });
};

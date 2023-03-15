import express from "express";
import { getGlobalPriceIndex, getGlobalPriceIndexWS } from "./controller";

export const globalPriceIndexRouter = express.Router();

/**
 * GET Binance price index using REST
 */
globalPriceIndexRouter.get("/", getGlobalPriceIndex);

/**
 * GET Binance price index using WS
 */
globalPriceIndexRouter.get("/ws", getGlobalPriceIndexWS);

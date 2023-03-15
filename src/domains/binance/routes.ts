import express from "express";
import {
	getBinanceGlobalPriceIndex,
	getBinanceGlobalPriceIndexWS,
} from "./controller";

export const binanceRouter = express.Router();

/**
 * GET Binance price index using REST
 */
binanceRouter.get("/", getBinanceGlobalPriceIndex);

/**
 * GET Binance price index using WS
 */
binanceRouter.get("/ws", getBinanceGlobalPriceIndexWS);

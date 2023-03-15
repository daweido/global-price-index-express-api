import express from "express";
import {
	getKrakenGlobalPriceIndex,
	getKrakenGlobalPriceIndexWS,
} from "./controller";

export const krakenRouter = express.Router();

/**
 * GET Kraken price index using REST
 */
krakenRouter.get("/", getKrakenGlobalPriceIndex);

/**
 * GET Kraken price index using WS
 */
krakenRouter.get("/ws", getKrakenGlobalPriceIndexWS);

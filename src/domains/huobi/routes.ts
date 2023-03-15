import express from "express";
import {
  getHuobiGlobalPriceIndex,
  getHuobiGlobalPriceIndexWS,
} from "./controller";

export const huobiRouter = express.Router();

/**
 * GET Huobi price index using REST
 */
huobiRouter.get("/", getHuobiGlobalPriceIndex);

/**
 * GET Huobi price index using WS
 */
huobiRouter.get("/ws", getHuobiGlobalPriceIndexWS);

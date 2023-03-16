# Global Price index calculator

This small Express API calculates the global price index for the pair BTC/USDT (XBT/USDT) based on the order books of 3 exchanges (Binance, Kraken, Huobi).

To run this project first install the dependencies:

```bash
# pnmpm
pnpm install

# yarn
yarn install

#npm
npm install
```

And then run the project:

```bash
# pnmpm
pnpm start

# yarn
yarn start

#npm
npm start
```

The exposed routes are the following:

- `http://localhost:3000/global-price-index`
- `http://localhost:3000/global-price-index/ws`

The first route calculates the global price index only using the 3 exchanges' REST API endpoints. The second route also uses the 3 exchanges' REST API endpoint except for Binance where we are using the websocket protocol to get the order book's mid price.

To add new exchanges it is fairly simple as all we have to do is the following:

1. Get the exchange's order book's mid price for a given pair (here BTC/USDT).
2. Add the `async` function returning the mid price to the array in the `getGlobalPriceIndexService` `Promise.all` array.
3. The global price index will now have taken into account the new exchange.

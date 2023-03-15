import express from "express";
import { domainRoutes } from "./consts";
import { globalPriceIndexRouter } from "./domains/globalPriceIndex/routes";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(domainRoutes.globalPriceIndex, globalPriceIndexRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  return console.log(`http://localhost:${port}`);
});

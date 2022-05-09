import express from "express";
import "dotenv/config";
import productsRouter from "./routers/products.routes";
import categoriesRouter from "./routers/categories.routes";

const app = express();

app.use(express.json());

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

export default app.listen(3000, () => {
  console.log("Server running");
});

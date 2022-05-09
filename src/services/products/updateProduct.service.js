import database from "../../database";

const updateProductService = async ({ id, name, price, category_id }) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (!res.rows.length) {
      throw new Error("Product not found");
    }
    const product = await database.query(
      "UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4",
      [name, price, category_id, id]
    );
    return product.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;

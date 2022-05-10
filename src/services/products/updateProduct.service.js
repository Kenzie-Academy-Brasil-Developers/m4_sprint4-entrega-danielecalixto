import database from "../../database";

const updateProductService = async ({ id, name }) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (!res.rows.length) {
      throw new Error("Product not found");
    }
    const product = await database.query(
      "UPDATE products SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );
    const [updated] = product.rows;
    return updated;
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;

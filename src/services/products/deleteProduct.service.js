import database from "../../database";

const deleteProductService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (!res.rows.length) {
      throw new Error("Product not found");
    }
    await database.query("DELETE FROM products WHERE id=$1", [id]);
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductService;

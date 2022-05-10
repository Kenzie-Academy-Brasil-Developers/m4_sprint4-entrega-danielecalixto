import database from "../../database";

const showProductService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (!res.rows.length) {
      throw new Error("Product not found");
    }
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default showProductService;

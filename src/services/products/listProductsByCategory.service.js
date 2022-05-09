import database from "../../database";

const listProductsByCategoryService = async (category_id) => {
  try {
    const res = await database.query(
      "SELECT products.*, categories.name c FROM products WHERE products.category_id = $1",
      [category_id]
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductsByCategoryService;

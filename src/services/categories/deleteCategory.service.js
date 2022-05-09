import database from "../../database";

const deleteCategoryService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM categories WHERE id = $1", [
      id,
    ]);
    if (!res.rows.length) {
      throw new Error("Category not found");
    }
    const category = await database.query(
      "DELETE FROM categories WHERE id=$1",
      [id]
    );
    return category.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteCategoryService;

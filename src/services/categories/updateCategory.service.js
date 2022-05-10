import database from "../../database";

const updateCategoryService = async ({ id, name }) => {
  try {
    const res = await database.query("SELECT * FROM categories WHERE id = $1", [
      id,
    ]);
    if (!res.rows.length) {
      throw new Error("Category not found");
    }
    const category = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );
    const [updated] = category.rows;

    return updated;
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;

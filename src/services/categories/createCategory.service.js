import database from "../../database";

const createCategoryService = async (name) => {
  try {
    const res = await database.query(
      "SELECT * FROM categories WHERE name = $1",
      [name]
    );
    if (!res.rows.length) {
      const category = await database.query(
        "INSERT INTO categories(name) VALUES ($1) RETURNING *",
        [name]
      );
      const [newCategory] = category.rows;
      return newCategory;
    } else {
      throw new Error("This category already exists");
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default createCategoryService;

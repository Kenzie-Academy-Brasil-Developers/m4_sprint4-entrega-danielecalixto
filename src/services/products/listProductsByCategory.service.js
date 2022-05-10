import database from "../../database";

const listProductsByCategoryService = async (id) => {
  try {
    const res = await database.query(
      "SELECT p.name, p.price, c.name AS category FROM products p INNER JOIN categories c ON c.id = $1",
      [id]
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductsByCategoryService;

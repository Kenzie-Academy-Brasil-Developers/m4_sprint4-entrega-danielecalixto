import database from "../../database";

const createProductService = async ({ name, price, category_id }) => {
  try {
    const res = await database.query(
      "INSERT INTO products(name, price, category_id) VALUES ($1, $2, $3) RETURNING *",
      [name, price, category_id]
    );

    const [product] = res.rows;
    return product;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export default createProductService;

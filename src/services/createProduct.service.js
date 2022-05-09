import database from "../database";

const createProductService = async ({ name, price }) => {
  try {
    const res = await database.query(
      "INSERT INTO products(name, price) VALUES ($1, $2) RETURNING *",
      [name, price]
    );
  } catch (err) {
    throw new Error(err);
  }
};

export default createProductService;

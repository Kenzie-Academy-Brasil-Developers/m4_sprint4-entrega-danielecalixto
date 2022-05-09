import createProductService from "../services/createProduct.service";

export default class ProductsController {
  async store(request, response) {
    const { name, price } = request.body;

    try {
      const product = await createProductService({ name, price });
      return response.status(201).json(product);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async index(request, response) {}
}

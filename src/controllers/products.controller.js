import createProductService from "../services/products/createProduct.service";
import listProductsService from "../services/products/listProducts.service";
import showProductService from "../services/products/showProduct.service";
import updateProductService from "../services/products/updateProduct.service";
import deleteProductService from "../services/products/deleteProduct.service";
import listProductsByCategoryService from "../services/products/listProductsByCategory.service";

export default class ProductsController {
  async store(request, response) {
    const { name, price, category_id } = request.body;

    try {
      const product = await createProductService({ name, price, category_id });
      return response.status(201).json({ message: "Product created", product });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async index(request, response) {
    try {
      const products = await listProductsService();
      return response.status(200).json(products);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const product = await showProductService(id);
      return response.status(200).json(product);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, price } = request.body;

    try {
      const product = await updateProductService({
        id,
        name,
        price,
      });
      console.log(product);
      return response.status(200).json({ message: "Product updated", product });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      const product = await deleteProductService(id);
      return response.status(200).json({ message: "Product deleted", product });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async prodByCat(request, response) {
    const { id } = request.params;

    try {
      const products = await listProductsByCategoryService(id);
      return response.status(200).json(products);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

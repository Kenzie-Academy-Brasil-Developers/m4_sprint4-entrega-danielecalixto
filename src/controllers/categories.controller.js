import createCategoryService from "../services/products/createProduct.service";
import listCategoriesService from "../services/products/listProducts.service";
import showCategoryService from "../services/products/showProduct.service";
import updateCategoryService from "../services/products/updateProduct.service";
import deleteCategoryService from "../services/products/deleteProduct.service";

export default class CategoriesController {
  async store(request, response) {
    const { name } = request.body;

    try {
      const category = await createCategoryService(name);
      return response
        .status(201)
        .json({ message: "Category created", category });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async index(request, response) {
    try {
      const categories = await listCategoriesService();
      return response.status(200).json(categories);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const category = await showCategoryService(id);
      return response.status(201).json(category);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    try {
      const category = await updateCategoryService({
        id,
        name,
      });
      return response
        .status(201)
        .json({ message: "Category updated", category });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      const category = await deleteCategoryService(id);
      return response
        .status(201)
        .json({ message: "Category deleted", category });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

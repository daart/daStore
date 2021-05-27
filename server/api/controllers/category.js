import { Category } from '../../models/models.js';

class CategoryController {
    async create(req, res) {
        const { name } = req.body;
        const category = await Category.create({ name });

        return res.json(category);
    }

    async getAll(req, res) {
        const allCatagories = await Category.findAll();

        return res.json(allCatagories);
    }

    async getCategory(req, res) {
        const { id } = req.params;
        const category = await Category.findById(id);

        return res.json(category);
    }
}

export default new CategoryController();

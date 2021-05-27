import { Brand } from '../../models/models.js';

class BrandController {
    async create(req, res) {
        const { name } = req.body;
        const category = await Brand.create({ name });

        return res.json(category);
    }

    async getAll(req, res) {
        const allBrands = await Brand.findAll();

        return res.json(allBrands);
    }

    async getBrand(req, res) {
        const { id } = req.params;
        const brand = await Brand.findById(id);

        return res.json(brand);
    }
}

export default new BrandController();

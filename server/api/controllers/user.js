import { ApiError } from '../exceptions/ApiError.js';

const register = (req, res) => {};

const login = (req, res) => {};

const auth = (req, res, next) => {
    const { id } = req.query;

    if (!id) {
        console.log('do we get here>');
        return next(ApiError.badRequest('Unauthorized access. No ID provided'));
    }

    res.json({ id });
};

export default {
    register,
    login,
    auth,
};

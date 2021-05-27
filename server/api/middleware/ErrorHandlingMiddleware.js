import { ApiError } from '../exceptions/ApiError.js';

export const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        const { status, message } = err;

        return res.status(status).json({ message });
    }

    return res.status(500).json({ message: 'Unexpected error ocurred' });
};

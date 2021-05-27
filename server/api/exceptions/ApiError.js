import statusCodes from './statusCodes.js';

const { INTERNAL, FORBIDDEN, BAD_REQUEST } = statusCodes;

export class ApiError extends Error {
    constructor(status, message) {
        super();

        this.status = status;
        this.message = message;
    }

    static badRequest(message) {
        return new ApiError(BAD_REQUEST, message);
    }

    static forbidden(message) {
        return new ApiError(FORBIDDEN, message);
    }

    static internal(message) {
        return new ApiError(INTERNAL, message);
    }
}

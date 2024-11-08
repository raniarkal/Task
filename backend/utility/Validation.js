import { body, param, validationResult } from 'express-validator';

// Validator for creating a book
export const createBookValidator = [
    body('title')
        .notEmpty().withMessage('Title is required')
        .isString().withMessage('Title must be a string'),
    body('author')
        .notEmpty().withMessage('Author is required')
        .isString().withMessage('Author must be a string'),
    body('genre')
        .notEmpty().withMessage('Genre is required')
        .isString().withMessage('Genre must be a string'),
        body('year')
        .optional()
        .exists() // This checks if it's a valid date
        .withMessage('Year must be a valid date'),
];

// Validator for updating a book
export const updateBookValidator = [
    param('id').isMongoId().withMessage('Invalid book ID'),
    body('title')
        .optional()
        .isString().withMessage('Title must be a string'),
    body('author')
        .optional()
        .isString().withMessage('Author must be a string'),
    body('genre')
        .optional()
        .isString().withMessage('Genre must be a string'),
    body('year')
        .optional()
        .exists() // This checks if it's a valid date
        .withMessage('Year must be a valid date'),
];

// Validator for fetching a book by ID
export const getBookByIdValidator = [
    param('id').isMongoId().withMessage('Invalid book ID'),
];

// Middleware to validate results
export const validateResults = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }
    next();
};

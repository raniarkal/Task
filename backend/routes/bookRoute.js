import express from 'express';
import { 
    uploadBooks, getAllBooks, getBookById, updateBook, deleteBook 
} from '../controller/BookController.js';

import {
     createBookValidator, validateResults,  updateBookValidator
     }
 from '../utility/Validation.js';

const router = express.Router();

router.post('/books', createBookValidator, validateResults, uploadBooks);
router.get('/books', getAllBooks);
router.get('/books/:id',  validateResults, getBookById);
router.put('/books/:id', updateBookValidator, validateResults, updateBook);
router.delete('/books/:id', deleteBook);

export default router;
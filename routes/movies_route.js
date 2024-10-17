import express from 'express';
import { MovieIndex, movieCreate, movieUpdate, movieDelete, MovieDetail } from '../controllers/movies.controller.js';
const router = express.Router();

//CURD functionality of movies

// get all movies
router.get('/', MovieIndex);

router.get('/:id',MovieDetail)

// create
router.post('/', movieCreate)

// put
router.put('/:id', movieUpdate)
// Delete
router.delete('/:id', movieDelete)

export default router
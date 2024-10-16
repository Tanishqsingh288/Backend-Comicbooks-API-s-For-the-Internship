const express = require('express');
const Comic = require('../models/comicModel');
const {
  createComic,
  getComics,
  getComicById,
  updateComic,
  deleteComic,
} = require('../controllers/comicController');

const router = express.Router();

// Route to get all comics with pagination, filtering, and sorting
router.get('/comics', getComics);

// Other routes (create, update, delete)
router.route('/')
  .post(createComic)   // Create a new comic
  .get(getComics);     // Get all comics

router.route('/:id')
  .get(getComicById)   // Get comic by ID
  .put(updateComic)    // Update a comic
  .delete(deleteComic); // Delete a comic

module.exports = router;

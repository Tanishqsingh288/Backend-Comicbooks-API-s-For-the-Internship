const Comic = require('../models/comicModel');

// @desc    Create a new comic book
// @route   POST /api/comics
// @access  Public
const createComic = async (req, res) => {
  const {
    bookName,
    authorName,
    yearOfPublication,
    price,
    discount,
    numberOfPages,
    condition,
    description,
  } = req.body;

  try {
    const newComic = await Comic.create({
      bookName,
      authorName,
      yearOfPublication,
      price,
      discount,
      numberOfPages,
      condition,
      description,
    });
    res.status(201).json(newComic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Fetch all comics with pagination, filtering, and sorting
// @route   GET /api/comics
// @access  Public
const getComics = async (req, res) => {
  const { 
    limit = 10, 
    page = 1, 
    author, 
    bookName, 
    year, 
    minPrice, 
    maxPrice, 
    condition, 
    sort 
  } = req.query; // Default values for query parameters

  const query = {};
  
  // Add filters to the query based on query parameters
  if (author) {
    query.authorName = new RegExp(author, 'i'); // Case insensitive search for author name
  }
  if (bookName) {
    query.bookName = new RegExp(bookName, 'i'); // Case insensitive search for book name
  }
  if (year) {
    query.yearOfPublication = year; // Exact match for year of publication
  }
  if (condition) {
    query.condition = condition; // Filter based on 'new' or 'used'
  }
  if (minPrice || maxPrice) {
    query.price = {}; // Initialize price query
    if (minPrice) query.price.$gte = minPrice; // Greater than or equal to minPrice
    if (maxPrice) query.price.$lte = maxPrice; // Less than or equal to maxPrice
  }

  try {
    // Fetch comics based on the query with pagination and sorting
    const comics = await Comic.find(query)
      .limit(parseInt(limit)) // Limit the number of results per page
      .skip((page - 1) * limit) // Skip results based on the current page number
      .sort(sort ? { [sort]: 1 } : {}); // Sort results if a sorting parameter is specified

    const totalComics = await Comic.countDocuments(query); // Get the total number of comics that match the query
    const totalPages = Math.ceil(totalComics / limit); // Calculate the total number of pages

    res.json({
      totalPages,
      currentPage: parseInt(page),
      comics,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};


// @desc    Fetch a comic by ID
// @route   GET /api/comics/:id
// @access  Public
const getComicById = async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.id);
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    res.status(200).json(comic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a comic book
// @route   PUT /api/comics/:id
// @access  Public
const updateComic = async (req, res) => {
  try {
    const updatedComic = await Comic.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedComic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    res.status(200).json(updatedComic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a comic book
// @route   DELETE /api/comics/:id
// @access  Public
const deleteComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndDelete(req.params.id);
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    res.status(200).json({ message: 'Comic deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createComic,
  getComics,
  getComicById,
  updateComic,
  deleteComic,
};

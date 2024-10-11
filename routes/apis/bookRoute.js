const router = require("express").Router();
const controller = require('../../controllers/BooksController');

// Add leading slashes to the routes
router.post("/createBook", controller.createBook);
router.get("/get-all", controller.getAllBooks);
router.get("/get-book-by-id/:id", controller.getBookById);
router.put("/update-book-by-id/:id", controller.updateBookById);
router.delete("/delete-book-by-id/:id", controller.deleteBookById);

module.exports = router;

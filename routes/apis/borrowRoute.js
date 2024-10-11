const router = require("express").Router();
const controller = require('../../controllers/borrowController');

router.post("/createborrow",controller.createBorrow);
router.get("/get-all",controller.getAllBorrows);
router.get("/get-borrow-by-id/:id",controller.getBorrowById);
router.put("/update-borrow-by-id/:id",controller.updateBorrowById);
router.delete("/delete-borrow-by-id/:id",controller.deleteBorrowById);
module.exports = router;
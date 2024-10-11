const router = require("express").Router();
const userRoutes = require("./userRoute");
const bookRoutes = require("./bookRoute");
const borrowRoutes = require("./borrowRoute");

router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/borrows", borrowRoutes);

module.exports = router;
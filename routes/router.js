const router = require("express").Router();
const apiRouter = require("./apis");

router.use("/test", apiRouter); // Prefix routes with /test

module.exports = router;

const router = require("express").Router();
const controller = require('../../controllers/userController');

router.post("/createUser", controller.createUser);
router.get("/get-all", controller.getAllUsers);
router.get("/get-user-by-id/:id", controller.getUserById);
router.put("/update-user-by-id/:id", controller.updateUserById);
router.delete("/delete-user-by-id/:id", controller.deleteUserById);

module.exports = router;

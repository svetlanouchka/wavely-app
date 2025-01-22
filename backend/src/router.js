const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const frequencyControllers = require("./controllers/frequencyControllers");
const categoryControllers = require("./controllers/categoryControllers");

const uploadPicture = require("./Middlewares/Upload");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", userControllers.add);
router.put("/users/:id", uploadPicture, userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/frequencies", frequencyControllers.browse);
router.get("/frequencies/:id", frequencyControllers.read);
router.put("/frequencies/:id", frequencyControllers.edit);
router.post("/frequencies", frequencyControllers.add);
router.delete("/frequencies/:id", frequencyControllers.destroy);

router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);
router.put("/categories/:id", categoryControllers.edit);
router.post("/categories", categoryControllers.add);
router.delete("/categories/:id", categoryControllers.destroy);

module.exports = router;

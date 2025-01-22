const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const frequencyControllers = require("./controllers/frequencyControllers");

router.get("/users", userControllers.browse);

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

module.exports = router;

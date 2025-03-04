const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const frequencyControllers = require("./controllers/frequencyControllers");
const categoryControllers = require("./controllers/categoryControllers");
const sessionControllers = require("./controllers/sessionControllers");
const tagControllers = require("./controllers/tagControllers");
const frequencyTagControllers = require("./controllers/frequencytagControllers");
const contactControllers = require("./controllers/contactControllers");

const uploadPicture = require("./Middlewares/Upload");
const validateUser = require("./Middlewares/validateUser");
const {
	hashPassword,
	verifyPassword,
	verifyToken,
	verifyId,
} = require("./Middlewares/auth");

// Routes publiques

router.post("/contact", contactControllers.send);

router.post(
	"/login",
	userControllers.getUserByEmailWithPassword,
	verifyPassword,
);

router.post("/users", validateUser, hashPassword, userControllers.add);

router.get("/frequencies", frequencyControllers.browse);
router.get("/frequencies/:id", frequencyControllers.read);

router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);

router.get("/tags", tagControllers.browse);
router.get("/tags/:id", tagControllers.read);

router.get("/frequencies/:id/tags", frequencyTagControllers.findTagByFrequency);
router.get("/tags/:id/frequencies", frequencyTagControllers.findFrequencyByTag);

// Routes protégées

// router.use(verifyToken);

router.get("/me", verifyToken, userControllers.getUserById);

router.get("/users/:id", userControllers.read);
router.patch("/users/:id", verifyToken, verifyId, userControllers.edit);

router.patch(
	"/users/:id/avatar",
	verifyToken,
	uploadPicture,
	userControllers.editAvatar,
);

router.get(
	"/users/:id/sessions",
	verifyToken,
	verifyId,
	sessionControllers.GetAllSessionsByUser,
);

router.get("/sessions/:id", sessionControllers.read);
router.post("/sessions", sessionControllers.add);

// Routes admin

router.put("/frequencies/:id", frequencyControllers.edit);
router.post("/frequencies", frequencyControllers.add);
router.delete("/frequencies/:id", frequencyControllers.destroy);

router.get("/sessions", sessionControllers.browse);
router.put("/sessions/:id", sessionControllers.edit);

router.put("/categories/:id", categoryControllers.edit);
router.post("/categories", categoryControllers.add);
router.delete("/categories/:id", categoryControllers.destroy);

// Routes useless

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", userControllers.browse);
router.delete("/users/:id", verifyId, userControllers.destroy);

module.exports = router;

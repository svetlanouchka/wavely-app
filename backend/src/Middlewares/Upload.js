const multer = require("multer");
const path = require("node:path");
const upload = multer({
	limits: 800000,
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, "src/Uploads/Avatars");
		},
		filename: (req, file, cb) => {
			const userId = req.params.id;
			const ext = path.extname(file.originalname);
			cb(null, `${userId}-${Date.now()}${ext}`);
		},
	}),
	fileFilter: (req, file, cb) => {
		const allowedFileType = ["jpg", "jpeg", "png"];
		if (allowedFileType.includes(file.mimetype.split("/")[1])) {
			cb(null, true);
		} else {
			cb(null, false);
		}
	},
});

module.exports = upload.single("image_url");

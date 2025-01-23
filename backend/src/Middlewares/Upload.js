const multer = require("multer");
const path = require("node:path");
const upload = multer({
	limits: 800000,
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, "src/Uploads/Avatars");
		},
		filename: (req, file, cb) => {
			const userId = req.params.id; // Exemple : ID de l'utilisateur
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

const uploadAudio = multer({
	// limits: 800000,
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, "src/Uploads/Frequences_audio");
		},
		filename: (req, file, cb) => {
			const frequenceId = req.params.id; // Exemple : ID de l'utilisateur
			const ext = path.extname(file.originalname);
			cb(null, `${frequenceId}-${Date.now()}${ext}`);
		},
	}),
	fileFilter: (req, file, cb) => {
		const allowedFileType = ["ogg", "wav", "mp4"];
		if (allowedFileType.includes(file.mimetype.split("/")[1])) {
			cb(null, true);
		} else {
			cb(null, false);
		}
	},
});

module.exports = { upload, uploadAudio };
module.exports = upload.single("image_url");

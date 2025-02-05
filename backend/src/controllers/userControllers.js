const { log } = require("node:console");
const models = require("../models");
const fs = require("node:fs");

const browse = (req, res) => {
	models.user
		.findAll()
		.then(([rows]) => {
			console.log(rows);
			res.send(rows);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const read = (req, res) => {
	models.user
		.find(req.params.id)
		.then(([rows]) => {
			if (rows[0] == null) {
				res.sendStatus(404);
			} else {
				res.send(rows[0]);
			}
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const edit = async (req, res) => {
	const user = req.body;

	user.id = Number.parseInt(req.params.id, 10);

	models.user
		.update(user)
		.then(([result]) => {
			if (result.affectedRows === 0) {
				res
					.status(404)
					.send({ message: "Erreur 404, profil utilisateur introuvable" });
			} else {
				res.status(200).send({ message: "Profil correctement mis à jour !" });
			}
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const editAvatar = async (req, res) => {
	const user = req.body;
	const image_url = req.file.path;
	user.image_url = image_url;
	user.id = Number.parseInt(req.params.id, 10);

	const [existingUser] = await models.user.find(user.id);

	models.user
		.updateAvatar(user)
		.then(([result]) => {
			if (result.affectedRows === 0) {
				res.status(404).send({ message: "Update error" });
			} else {
				if (existingUser[0].image_url) {
					fs.unlinkSync(existingUser[0].image_url);
					res
						.status(200)
						.send({ message: "Updated profile picture with success" });
				} else if (!existingUser[0].image_url) {
					res.status(200).send({ message: "Added a profile picture" });
				}
			}
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const add = (req, res) => {
	const user = req.body;
	console.log("user --->", user);

	models.user
		.insert(user)
		.then(([result]) => {
			res.location(`/users/${result.insertId}`).sendStatus(201);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const destroy = (req, res) => {
	models.user
		.delete(req.params.id)
		.then(([result]) => {
			if (result.affectedRows === 0) {
				res.sendStatus(404);
			} else {
				res.sendStatus(204);
			}
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

module.exports = {
	browse,
	read,
	edit,
	add,
	destroy,
	editAvatar,
};

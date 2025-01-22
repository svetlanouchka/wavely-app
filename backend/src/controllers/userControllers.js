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
	const image_url = req.file.path;

	user.image_url = image_url;

	user.id = Number.parseInt(req.params.id, 10);

	const [existingUser] = await models.user.find(user.id);

	models.user
		.update(user)
		.then(([result]) => {
			if (result.affectedRows === 0) {
				res.sendStatus(404);
			} else {
				if (existingUser[0].image_url) {
					fs.unlinkSync(existingUser[0].image_url);
					res.status(200).send("Updated");
				} else if (!existingUser[0].image_url) {
					res.status(200).send("Updated with success");
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
};

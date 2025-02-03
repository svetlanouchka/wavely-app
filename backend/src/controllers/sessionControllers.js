const models = require("../models");

const read = (req, res) => {
	models.session
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

const browse = (req, res) => {
	models.session
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

const add = (req, res) => {
	const session = req.body;

	models.session
		.insert(session)
		.then(([result]) => {
			res.location(`/users/${result.insertId}`).sendStatus(201);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const edit = async (req, res) => {
	const session = req.body;

	session.id = Number.parseInt(req.params.id, 10);

	models.session
		.update(session)
		.then(([result]) => {
			if (result.affectedRows === 0) {
				res.status(404).send({ message: "Erreur 404, séance introuvable" });
			} else {
				res.status(200).send({ message: "Commentaire modifié !" });
			}
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

module.exports = {
	browse,
	add,
	edit,
	read,
};

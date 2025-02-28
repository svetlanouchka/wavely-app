const models = require("../models");

const browse = (req, res) => {
	models.frequency
		.findAll()
		.then(([rows]) => {
			res.send(rows);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const read = (req, res) => {
	models.frequency
		.find(req.params.id)
		.then(([rows]) => {
			if (!rows[0]) {
				res.status(404).json("404 Not found");
			} else {
				res.send(rows[0]);
			}
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const edit = (req, res) => {
	const frequency = req.body;

	// TODO validations (length, format...)

	frequency.id = parseInt(req.params.id, 10);

	models.frequency
		.update(frequency)
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

const add = (req, res) => {
	const frequency = req.body;

	// TODO validations (length, format...)

	models.frequency
		.insert(frequency)
		.then(([result]) => {
			res.location(`/frequencies/${result.insertId}`).sendStatus(201);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const destroy = (req, res) => {
	models.frequency
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

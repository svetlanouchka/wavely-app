const models = require("../models");

const browse = (req, res) => {
	models.tag
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
	models.tag
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

module.exports = {
	browse,
	read,
};

const models = require("../models");

const browse = (req, res) => {
    models.frequency
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
    models.frequency
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
    const frequency = req.body;
    const audio_url = req.file.path;

    frequency.audio_url = audio_url;

    frequency.id = Number.parseInt(req.params.id, 10);

    const [existingFrequency] = await models.frequency.find(frequency.id);

    models.frequency
    .update(frequency)
    .then(([result]) => {
        if (result.affectedRows === 0) {
        res.sendStatus(404);
    } else {
        if (existingFrequency[0].audio_url) {
            fs.unlinkSync(existingFrequency[0].audio_url);
            res.status(200).send("Updated frequency and audio with success");
        } else if (!existingFrequency[0].audio_url) {
            res.status(200).send("Updated frequency and added an audio");
        }
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

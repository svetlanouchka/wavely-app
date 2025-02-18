const sendEmail = require("../utils/sendEmail");

const send = async (req, res) => {
	const contact = req.body;

	try {
		sendEmail(contact);
		res.status(200).json("Message envoyé !");
	} catch (err) {
		console.error(err);
		res.status(500).json({ success: false, error: err.message });
	}
};

module.exports = { send };
